from django.contrib import admin
from .models import Workstation, Reservas

@admin.register(Workstation)
class WorkstationAdmin(admin.ModelAdmin):
   list_display = ( 'serial', 'configuracoes' )
@admin.register(Reservas)
class ReservasAdmin(admin.ModelAdmin):
   list_display= ('usuario', 'checkin', 'workstation')
