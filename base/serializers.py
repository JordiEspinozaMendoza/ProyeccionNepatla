from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.tokens import RefreshToken

class SpecieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Species
        fields = "__all__"