"""
This File provide Urls for authApp View set api through router
"""
from rest_framework.routers import DefaultRouter
from .views import *

router=DefaultRouter()                                      #Defining default router
router.register('auth',viewset=UserView,basename='AUTH')    #Registering the app to create Viewset's methods urls
urlpatterns = []
urlpatterns+=router.urls