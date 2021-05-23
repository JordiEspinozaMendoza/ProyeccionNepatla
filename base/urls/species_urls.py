from django.urls import path
from base.views import species_views as views

urlpatterns = [
    path('create/', views.createSpecie, name="create"),
    path("getspecies/", views.getSpecies, name="get-species"),
    path("uploadimage/", views.uploadImage, name="upload-image"),
    path("uploadlogo/", views.uploadLogo, name="upload-logo"),
    path("getspecie/<str:pk>/", views.getSpecie, name="get-specie"),
    path("update/<str:pk>/", views.updateSpecie, name="get-specie"),
]