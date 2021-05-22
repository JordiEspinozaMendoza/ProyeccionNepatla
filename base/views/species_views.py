from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.contrib.auth.models import User
from base.models import *
from base.serializers import SpecieSerializer

from rest_framework import status


@api_view(["GET"])
def getSpecies(request):
    try:
        species = Species.objects.all()
        serializer = SpecieSerializer(species, many=True)
        return Response(serializer.data)
    except Exception as err:
        print(str(err))


@api_view(["GET"])
def getSpecie(request, pk):
    try:
        specie = Species.objects.get(id=pk)
        serializer = SpecieSerializer(specie, many=False)
        return Response(serializer.data)
    except Exception as err:
        print(str(err))


@api_view(["POST"])
def createSpecie(request):
    try:
        specie = Species.objects.create(
            name= 'Sample name',
            description= 'Sample description',
            latitude= 0.00,
            altitude= 0.00,
        )
        serializer = SpecieSerializer(specie, many=False)
        return Response(serializer.data)
    except Exception as err:
        print(str(err))
        return Response("Error")
@api_view(['PUT'])
def updateSpecie(request, pk):
    data = request.data
    print(data)
    try:
        specie = Species.objects.get(id=pk)
        specie.name = data['name']
        specie.description = data['description']
        specie.risk=data['risk']
        specie.habitat=data['habitat']
        specie.kingdom = data['kingdom']
        specie.family = data['family']
        specie.ecosistem = data['ecocistem']
        specie.info_actual = data['info_actual']
        specie.movement = data['movement']
        specie.awareness=data['awareness']
        specie.latitude = data['latitude']
        specie.altitude = data['altitude']
        specie.ong = data['ong']
        
        specie.save()
        return Response("Ok")

    except Exception as err:
        print(data)
        print("Error details", str(err))
        return Response("Error")
