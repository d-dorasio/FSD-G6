from django.shortcuts import render

# Create your views here.

def landing(request):
    return render(request,"landing/landing.html")


# pip install virtualenv
# virtualenv venv
# venv\Scripts\activate
# pip install django
# pip install Pillow
# python manage.py runserver
