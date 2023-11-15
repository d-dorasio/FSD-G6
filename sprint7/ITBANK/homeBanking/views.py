from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
#@login_required  # ---> DESCOMENTAR LUEGO

def homeBanking(request):
    return render(request, 'homeBanking/homeBanking.html')

def accountStatus(request):
    return render(request, 'homeBanking/accountStatus.html')

def transfers(request):
    return render(request, 'homeBanking/transfers.html')


def account(request):
    return render(request, 'homeBanking/account.html')