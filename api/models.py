from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
class Workstation(models.Model):
    serial = models.CharField(max_length=20, unique=True)
    localizacao = models.CharField(max_length=100)
    configuracoes = models.TextField()

class Reservas(models.Model):
    workstation = models.ForeignKey('Workstation', on_delete=models.CASCADE)
    usuario = models.CharField(max_length=30)
    checkin = models.BooleanField(default=False)
    periodo = models.CharField(max_length=15)
    date = models.DateField()







