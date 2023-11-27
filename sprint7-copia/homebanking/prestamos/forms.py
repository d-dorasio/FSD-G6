# forms.py
from django import forms

class SolicitudPrestamoForm(forms.Form):
    LOAN_TYPES = [
        ('BLACK', 'Black'),
        ('GOLD', 'Gold'),
        ('CLASSIC', 'Classic'),
    ]

    loan_type = forms.ChoiceField(choices=LOAN_TYPES, label='Tipo de Préstamo')
    loan_date = forms.DateField(label='Fecha de Inicio', input_formats=['%Y-%m-%d'], widget=forms.DateInput(attrs={'type': 'date'}))
    loan_amount = forms.IntegerField(label='Monto de Préstamo')
