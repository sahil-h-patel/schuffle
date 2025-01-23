class COOP_COEP_Middleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        
        # Set the COOP and COEP headers
        response['Cross-Origin-Opener-Policy'] = 'same-origin'  # You can change this to 'same-origin-allow-popups' for flexibility
        response['Cross-Origin-Embedder-Policy'] = 'require-corp'  # Ensures resources are safe to embed
        
        return response;

