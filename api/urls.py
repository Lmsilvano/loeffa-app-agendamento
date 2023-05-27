from django.contrib import admin
from django.urls import path, include
from .views import reservasData, workstationData, reservas_with_workstations
 
urlpatterns = [
    path('worworkstations/', workstationData, name='worworkstationData'),
    path('reservasData/',reservasData, name='reservasData'),
    path('reservas/', reservas_with_workstations, name='reservas_with_workstations'),
]