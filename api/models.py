from django.db import models

class Workstation(models.Model):
    serial = models.CharField(max_length=20)
    localizacao = models.CharField(max_length=100)
    configuracoes = models.TextField()

class Reservas(models.Model):
    workstation = models.ForeignKey('Workstation', on_delete=models.CASCADE)
    usuario = models.CharField(max_length=30)
    data_hora_inicio = models.DateTimeField()
    data_hora_fim = models.DateTimeField()
    checkin = models.BooleanField(default=False)
