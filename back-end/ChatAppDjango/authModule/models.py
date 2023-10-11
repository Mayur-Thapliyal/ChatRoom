from django.db import models
from authModule.utils import valid_email,valid_name,valid_phone_num

# Create your models here.
class UserModel(models.Model):
    name                    =       (models.CharField(max_length=255,null=False,validators=[valid_name]))
    age                     =       (models.DateField(default=None))
    email                   =       (models.EmailField(max_length=255,null=False,unique=True,validators=[valid_email]))
    phone_num               =       (models.CharField(max_length=50,null=False,unique=True,validators=[valid_phone_num]))
    is_active               =       (models.BooleanField(default=True,null=False))
    is_phone_num_verified   =       (models.BooleanField(default=False,null=False))
    is_email_verified       =       (models.BooleanField(default=False,null=False))
    is_admin                =       (models.BooleanField(default=False,null=False))
    is_deleted              =       (models.BooleanField(default=False,null=False))
    updated_at              =       (models.DateTimeField(auto_now=True))
    created_at              =       (models.DateTimeField(auto_now_add=True))
