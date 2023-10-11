from authModule.models import UserModel
from rest_framework import serializers
from django.db.models import Q


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        phone_number = validated_data.get('phone_num')
        email =validated_data.get('email')
        user_query_set = UserModel.objects.filter(Q(phone_num = phone_number) | Q(email=email))
        if user_query_set.exists() and user_query_set.exclude(Q(is_phone_num_verified=True) | Q(is_email_verified = True)).exists():
            #! raise Exception you were coding here
        return super().create(validated_data)
    class Meta:
        model = UserModel
        exclude = ['is_admin','is_deleted','is_active','is_phone_num_verified','is_email_verified']
        