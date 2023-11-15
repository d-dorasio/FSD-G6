from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, "myapp/home.html")

def services(request):
    return render(request,"myapp/services.html")

def us(request):
    return render(request,"myapp/us.html")

