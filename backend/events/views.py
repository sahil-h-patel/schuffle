import os
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests

# Retrieve client credentials from environment variables
CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
CLIENT_SECRET = os.getenv('GOOGLE_CLIENT_SECRET')
REDIRECT_URI = os.getenv('GOOGLE_REDIRECT_URI')

@csrf_exempt
def google_auth(request):
    try:
        # Check the content type
        if request.content_type != 'application/json':
            return JsonResponse({'error': 'Expected JSON request body'}, status=400)

        # Try to load the request body as JSON
        data = json.loads(request.body.decode('utf-8'))  # decode to handle byte-string

        # Check if 'code' is present in the request
        code = data.get('code')
        if not code:
            return JsonResponse({'error': 'Code not provided'}, status=400)

        # Continue with your Google OAuth logic
        return JsonResponse({'message': 'Code received successfully', 'code': code})

    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON format'}, status=400)

    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)


def exchange_code_for_tokens(request):
    if request.method == 'POST':
        try:
            # Get the authorization code from the request
            data = json.loads(request.body)
            code = data.get('code')
            
            if not code:
                return JsonResponse({'error': 'Code not provided'}, status=400)

            # Set up the token exchange request parameters
            token_url = "https://oauth2.googleapis.com/token"
            client_id = os.getenv("GOOGLE_CLIENT_ID")
            client_secret = os.getenv("GOOGLE_CLIENT_SECRET")
            redirect_uri = os.getenv("REDIRECT_URI")

            # Prepare the data for the token request
            token_data = {
                'code': code,
                'client_id': client_id,
                'client_secret': client_secret,
                'redirect_uri': redirect_uri,
                'grant_type': 'authorization_code',
            }

            # Send POST request to exchange the code for tokens
            response = requests.post(token_url, data=token_data)
            response_data = response.json()

            if response.status_code != 200:
                return JsonResponse({'error': response_data.get('error', 'Unknown error')}, status=400)

            # Return the tokens to the frontend
            return JsonResponse(response_data)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)