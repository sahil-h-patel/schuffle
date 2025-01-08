import base64
from django.shortcuts import redirect
from google_auth_oauthlib.flow import Flow
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from django.core.cache import cache
import os
import json

def google_calendar_callback(request):
    # Retrieve the authorization code from the GET parameters
    code = request.GET.get('code')

    if not code:
        return HttpResponse("Authorization code missing!", status=400)
    
    client_secrets_json = base64.b64decode(os.getenv("GOOGLE_CLIENT_SECRETS_JSON_BASE64")).decode("utf-8")
    client_config = json.loads(client_secrets_json)

    try:
        # Initialize the flow again to exchange the code for tokens
        flow = Flow.from_client_config(
            client_config, 
            scopes=['https://www.googleapis.com/auth/calendar'],
            redirect_uri='https://schuffle.up.railway.app/api/auth/callback'
        )
        print(code)
        # Fetch the token from Google
        flow.fetch_token(code=code)
        
        creds = flow.credentials
        # Cache the credentials
        cache.set('google_calendar_token', creds.to_json(), timeout=None)  # Cache token indefinitely
        
        return JsonResponse({'message': 'Google Calendar login successful'})
    except Exception as e:
        return HttpResponse(f"An error occurred: {str(e)}", status=500)


def google_auth(request):

    client_secrets_json = base64.b64decode(os.getenv("GOOGLE_CLIENT_SECRETS_JSON_BASE64")).decode("utf-8")
    client_config = json.loads(client_secrets_json)

    flow = Flow.from_client_config(
        client_config, 
        scopes=['https://www.googleapis.com/auth/calendar'],
        redirect_uri='https://schuffle.up.railway.app/api/auth/callback'
    )
        
    # Generate the authorization URL and state
    auth_url, state = flow.authorization_url(prompt='consent')
    
    # Return the authorization URL to the frontend
    return JsonResponse({'authUrl': auth_url})

