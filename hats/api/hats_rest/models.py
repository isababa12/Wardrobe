from django.db import models


class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True, null=True)


class Hat(models.Model):
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    picture_url = models.URLField()

    location = models.ForeignKey(
        LocationVO,
        related_name="location",
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return self.style_name
