from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from django.core.cache import cache
import os 
import datetime

SCOPES = ['https://www.googleapis.com/auth/calendar']

"""
    Authenticate and return a Google Calendar API service.
    Uses Django's caching framework to store the token.
"""
def get_credentials():
    creds = None
    cached_token = cache.get("google_calendar_token")
    # If cached token exists get credentials from said token
    if cached_token:
        creds = Credentials.from_authorized_user_info(cached_token, SCOPES)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            cache.set("google_calendar_token", creds.to_json(), timeout=None) # Save updated token
        else:
            flow = Flow.from_client_secrets_file(
                "credentials.json", SCOPES,
                redirect_uri='http://localhost:8080/auth/callback'
            )
            auth_url, _ = flow.authorization_url(prompt='consent')
            print(f'Please visit this URL to authorize the application: {auth_url}')
            code = input('Enter the authorization code: ')
            flow.fetch_token(code=code)
            creds = flow.credentials
            # Cache the token
            cache.set("google_calendar_token", creds.to_json(), timeout=None)
    try:
        service = build("calendar", "v3", credentials=creds)
        return service
    except HttpError as error:
        print(f"An error occurred: {error}")


if __name__ == "__main__":
  get_credentials()