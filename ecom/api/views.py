from django.http import JsonResponse

# Create your views here.
def home(request):
    return JsonResponse({'name':'abhishek','nameofcourse':'react and django course'})