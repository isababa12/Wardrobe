# Generated by Django 4.0.3 on 2022-12-02 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fabric', models.CharField(max_length=200)),
                ('style_name', models.CharField(max_length=200)),
                ('color', models.CharField(max_length=200)),
                ('picture_url', models.URLField()),
            ],
        ),
    ]