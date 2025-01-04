from google_auth_oauthlib.flow import Flow
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from django.core.cache import cache

def google_calendar_callback(request):
    # Retrieve the authorization code from the GET parameters
    code = request.GET.get('code')
    
    if not code:
        return HttpResponse("Authorization code missing!", status=400)

    try:
        # Initialize the flow again to exchange the code for tokens
        flow = Flow.from_client_secrets_file(
            settings.GOOGLE_CLIENT_SECRETS_FILE, 
            scopes=['https://www.googleapis.com/auth/calendar'],
            redirect_uri='https://schuffle.up.railway.app/auth/callback'
        )
        # Fetch the token from Google
        flow.fetch_token(code=code)
        
        creds = flow.credentials
        # Cache the credentials
        cache.set('google_calendar_token', creds.to_json(), timeout=None)  # Cache token indefinitely
        
        return JsonResponse({'message': 'Google Calendar login successful'})
    except Exception as e:
        return HttpResponse(f"An error occurred: {str(e)}", status=500)


def google_auth(request):
    flow = Flow.from_client_secrets_file(
        settings.GOOGLE_CLIENT_SECRETS_FILE, 
        scopes=['https://www.googleapis.com/auth/calendar'],
        redirect_uri='https://schuffle.up.railway.app/auth/callback'
    )
    
    auth_url, _ = flow.authorization_url(prompt='consent')
    
    return JsonResponse({'authUrl': auth_url})

