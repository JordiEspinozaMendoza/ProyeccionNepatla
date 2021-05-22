from django.db import models

# Create your models here.
class Species(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(blank=True, null=False)
    risk = models.CharField(max_length=200, null=True, blank=True)
    habitat = models.CharField(max_length=200, null=True, blank=True)
    kingdom = models.CharField(max_length=200, null=True, blank=True)
    ong = models.CharField(max_length=200, null=True, blank=True)
    family = models.CharField(max_length=200, null=True, blank=True)
    ecosistem =models.CharField(max_length=200, null=True, blank=True)
    info_actual=models.TextField(blank=True, null=False)
    movement = models.CharField(max_length=200, null=True, blank=True)
    awareness = models.TextField(blank=True, null=True)
    latitude = models.DecimalField(max_digits=1000, decimal_places=16, verbose_name="Latitud")
    altitude = models.DecimalField(max_digits=1000, decimal_places=16, verbose_name="Altitud")
    
    def __str__(self):
        return self.name