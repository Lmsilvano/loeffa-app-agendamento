from rest_framework import serializers
from .models import Reservas, Workstation

class WorkstationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workstation
        fields = ['serial', 'localizacao']

class ReservasSerializer(serializers.ModelSerializer):
    workstation = WorkstationSerializer()

    class Meta:
        model = Reservas
        fields = ['id', 'usuario', 'data_hora_inicio', 'data_hora_fim', 'checkin', 'workstation']