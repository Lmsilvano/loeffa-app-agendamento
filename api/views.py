from django.shortcuts import render

import json
from django.shortcuts import render
from django.http import JsonResponse
from .models import Workstation, Reservas

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




# POSTS

def create_workstation(request):
    data = json.loads(request.body)

    numero = data.get('numero')
    localizacao = data.get('localizacao')
    configuracoes = data.get('configuracoes')

    if not numero or not localizacao or not configuracoes:
        return JsonResponse({'error': 'Dados incompletos'}, status=400)

    workstation = Workstation(numero=numero, localizacao=localizacao, configuracoes=configuracoes)
    workstation.save()

    return JsonResponse({'success': 'Workstation criada com sucesso'})