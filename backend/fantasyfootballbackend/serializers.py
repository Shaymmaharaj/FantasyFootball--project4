from rest_framework import serializers
from fantasyfootballbackend.models import stats

class statsserializers(serializers.ModelSeriallizer):
    class Meta:
        model = stats
        fields = '__all__'