# Generated by Django 4.0.3 on 2022-12-03 01:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0002_binvo_import_href_alter_shoes_bin_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='shoes',
            options={'verbose_name': 'Shoe', 'verbose_name_plural': 'Shoes'},
        ),
    ]
