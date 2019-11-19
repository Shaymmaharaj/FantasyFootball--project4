from django.db import models

# Create your models here.
class stats():
     name = models.CharField(max_length=100)
     touchdowns = models.PositiveIntegerField()


