from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from . import translate

@csrf_exempt
def translate_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            text = data.get('text')
            target_language = data.get('target_language')
            translated_text = translate.translate(text, target_language)  # Adjust according to your translate function
            return JsonResponse({'translated_text': translated_text})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)
