from rest_framework import serializers
from . models import Category

class categorySerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Category
        fields=['name','descreption']