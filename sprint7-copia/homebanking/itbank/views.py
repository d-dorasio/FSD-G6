from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
#@login_required  # ---> DESCOMENTAR LUEGO

def inicio(request):
    return render(request, 'itbank/inicio.html')
