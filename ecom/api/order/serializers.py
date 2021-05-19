from . models import Orders
from rest_framework import serializers

class orderSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Orders
        fields=['User']
