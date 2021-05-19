from rest_framework import routers
from django.urls import path,include
from . import views

router = routers.DefaultRouter()
router.register(r'', views.orderViewset)
urlpatterns = [
    path('add/<str:id>/<str:token>/',views.add,name="orders.add"),
    path('',include(router.urls))
]