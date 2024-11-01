from . import api
from django.urls import path

urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
]