from rest_framework import serializers
from . models import Product

class Productserializers(serializers.HyperlinkedModelSerializer):
    image=serializers.ImageField(max_length=None,allow_empty_file=False,allow_null=True,required=False)
    
    class  Meta:
        model=Product
        fields=['id','name','descripation','price','image','category']
        