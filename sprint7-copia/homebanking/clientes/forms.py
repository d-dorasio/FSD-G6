from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Cliente

class CreateUserForm(UserCreationForm):
    class Meta:
        model=User
        fields = ['username', 'password1', 'password2']

'''
class CreateClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = ['customer_name', 'customer_surname', "customer_dni", "dob", "branch_id"]
'''