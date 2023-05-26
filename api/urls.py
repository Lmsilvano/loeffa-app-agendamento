from django.contrib import admin
from django.urls import path, include
from .views import reservasData, workstationData
urlpatterns = [
    path('worworkstationData/', workstationData, name='worworkstationData'),
    path('reservasData/',reservasData, name='reservasData')
]