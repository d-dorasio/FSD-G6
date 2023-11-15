from django.urls import path
from . import views

urlpatterns = [
    path('', views.homeBanking, name="homeBanking"),
    path('accountStatus/', views.accountStatus, name='accountStatus'),
    path('transfers/', views.transfers, name='transfers'),

    path('acount/', views.account, name='account')
]
