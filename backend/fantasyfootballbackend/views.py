from django.shortcuts import render
from fantasyfootballbackend.models import stats
from fantasyfootballbackend.serializers import statsserializers
from rest_framework import generics

# Create your views here.


class statsListCreate(generics.ListCreateAPIView):
    queryset = stats.objects.all()
    serializer_class = statsserializers