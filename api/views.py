from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ReservasSerializer
import json
from django.http import JsonResponse
from .models import Workstation, Reservas
from django.views.decorators.csrf import csrf_exempt
# GETS

def workstationData(request):
    workstation = Workstation.objects.all()
    data = {
        'workstations': list(workstation.values()),
    }
    return JsonResponse(data)

def reservasData(request):
    reservas = Reservas.objects.all()
    data = {
        'reservas': list(reservas.values()),
    }
    return JsonResponse(data)

@api_view(['GET'])
def reservas_with_workstations(request):
    reservas = Reservas.objects.select_related('workstation')
    serializer = ReservasSerializer(reservas, many=True)
    return Response(serializer.data)

# POSTS
@api_view(['POST'])
def create_workstation(request):
    data = json.loads(request.body)

    numero = data.get('numero')
    localizacao = data.get('localizacao')
    configuracoes = data.get('configuracoes')
    date = data.get('date')

    if not numero or not localizacao or not configuracoes or not date:
        return JsonResponse({'error': 'Dados incompletos'}, status=400)

    workstation = Workstation(numero=numero, localizacao=localizacao, configuracoes=configuracoes, date=date)
    workstation.save()

    return JsonResponse({'success': 'Workstation criada com sucesso'})

@csrf_exempt
def create_reservas(request):
    data = json.loads(request.body)

    reservas = data.get('reservas', [])
    print(reservas)

    for reserva in reservas:
        workstation_serial = reserva.get('workstation')
        usuario = reserva.get('usuario')
        periodo = reserva.get('periodo')
        date = reserva.get('date')

        if not workstation_serial or not usuario or not periodo or not date:
            return JsonResponse({'error': 'Dados incompletos'}, status=400)

        try:
            workstation = Workstation.objects.get(serial=workstation_serial)
        except Workstation.DoesNotExist:
            return JsonResponse({'error': 'Workstation não encontrada'}, status=400)

        reserva_obj = Reservas(workstation=workstation, usuario=usuario, periodo=periodo, date=date)
        reserva_obj.save()

    return JsonResponse({'success': 'Reservas criadas com sucesso'})
