from django.shortcuts import render
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from authModule.serializers import UserSerializer


# Create your views here.
class UserView(ViewSet):
    
    @swagger_auto_schema(operation_description='Create a user for Chat App',tags=['User'],
                        request_body=UserSerializer)
    @action(methods=['POST'],detail=False)
    def signUp(self,request):
        """Sign Up user to the Chat Room App

        Args:
            request (http request): _description_

        Returns:
            Response: rest response
        """
        serializer_obj= UserSerializer(data=request.data)
        if serializer_obj.is_valid(raise_exception=True):
            serializer_obj.save()
        
        return Response('HI')
    
    
    @swagger_auto_schema(operation_description='Create a user for Chat App',tags=['User'])
    @action(methods=['POST'],detail=False)
    def update_user_details(self,request):
        """Update user details in the Chat Room App

        Args:
            request (http request): _description_

        Returns:
            Response: rest response
        """
        return Response('demo')
        