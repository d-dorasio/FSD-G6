from django.shortcuts import render
from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import ContactForm
from django.contrib.auth.decorators import login_required

@login_required
def contacto(request):
    contact_form = ContactForm
    if request.method == "POST":
        contact_form = contact_form(data=request.POST)
        if contact_form.is_valid():
            name = request.POST.get('name','')
            email = request.POST.get('email','')
            content = request.POST.get('content','')
        return redirect(reverse('contact')+"?ok")
    return render(request,'Contacto/contacto.html',{'form': contact_form})