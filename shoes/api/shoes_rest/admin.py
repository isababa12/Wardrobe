from django.contrib import admin
from .models import Shoes, BinVO
# Register your models here.
@admin.register(Shoes)
class ShoesAdmin(admin.ModelAdmin):
    pass


