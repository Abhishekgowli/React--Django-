# Generated by Django 3.2 on 2021-04-29 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='transaction_id',
            field=models.CharField(default=0, max_length=150),
        ),
    ]
