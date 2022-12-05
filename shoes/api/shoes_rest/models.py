from django.db import models


class BinVO(models.Model):
    closet_name = models.CharField(max_length=100, null=True)
    bin_number = models.PositiveSmallIntegerField()
    import_href = models.CharField(max_length = 200, unique=True, null=True)

class Shoes(models.Model):
    manufacturer = models.CharField(max_length=150)
    model_name = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    picture_url = models.TextField(max_length=100, null=True)
    bin = models.ForeignKey(
        BinVO,
        related_name='shoes',
        on_delete=models.CASCADE,
    )
    class Meta:
        verbose_name = "Shoe"
        verbose_name_plural = "Shoes"
