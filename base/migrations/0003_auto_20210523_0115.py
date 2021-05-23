# Generated by Django 3.2 on 2021-05-23 01:15

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_species_ong'),
    ]

    operations = [
        migrations.AddField(
            model_name='species',
            name='img',
            field=cloudinary.models.CloudinaryField(default='', max_length=255, verbose_name='image'),
        ),
        migrations.AddField(
            model_name='species',
            name='logo',
            field=cloudinary.models.CloudinaryField(default='', max_length=255, verbose_name='image'),
        ),
    ]