from django.urls import path
from . import views

urlpatterns = [
    path('', views.slider_page, name='slider_page'),
]

