from django import forms
from .models import Cuenta

class CrearCuentaForm(forms.ModelForm):
    class Meta:
        model = Cuenta
        fields = ['customer_id', 'balance', 'iban', 'type_account_id']

class TransferenciaForm(forms.Form):
    cuenta_origen = forms.ModelChoiceField(queryset=Cuenta.objects.all(), label='Cuenta de Origen')
    cuenta_destino = forms.ModelChoiceField(queryset=Cuenta.objects.all(), label='Cuenta de Destino')
    monto = forms.DecimalField(label='Monto de la Transferencia')
