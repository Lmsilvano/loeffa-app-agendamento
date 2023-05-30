from django.contrib import admin
from django.urls import path, include
from .views import reservasData, workstationData, reservas_with_workstations, create_reservas
 
urlpatterns = [
    path('workstations/', workstationData, name='workstationData'),
    path('reservasData/',reservasData, name='reservasData'),
    path('reservas/', reservas_with_workstations, name='reservas_with_workstations'),
    path('novasreservas/', create_reservas, name='create_reservas'),
]