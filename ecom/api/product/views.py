from rest_framework import viewsets
from .serializers import Productserializers
from .models import Product


# Create your views here.
class Productviewset(viewsets.ModelViewSet):
    queryset=Product.objects.all().order_by('id')
    serializer_class=Productserializers