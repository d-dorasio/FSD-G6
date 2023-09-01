document.addEventListener("DOMContentLoaded", function() {
    const botonCalcular = document.querySelector(".boton-form");
    const cuerpoTabla = document.querySelector(".table tbody");
    
    botonCalcular.addEventListener("click", function() {
      const tipoSeleccionado = document.querySelector(".tipo").value;
      const monto = parseFloat(document.querySelector("[name='amount']").value);
      const plazoEjecucion = parseInt(document.querySelector("[name='months']").value);
  
  
      // Define tu lógica de cálculo aquí
      // Por ejemplo, un cálculo simple basado en el tipo seleccionado y el monto
      let tasaInteres = 0.012; // Tasa de interés predeterminada
      if (tipoSeleccionado === "publica") {
        tasaInteres = 0.012;
      } else if (tipoSeleccionado === "privado") {
        tasaInteres = 0.012;
      } else if (tipoSeleccionado === "IPS") {
        tasaInteres = 0.0115;
      } else if (tipoSeleccionado === "ANSES") {
        tasaInteres = 0.0115;
      }
  
      const tasaInteresMensual = tasaInteres / 12;
      const mesesTotales = plazoEjecucion;
  
      const datosTabla = [];
      let saldoRestante = monto;
  
      for (let mes = 1; mes <= mesesTotales; mes++) {
        const pagoInteres = saldoRestante * tasaInteresMensual*100;
        const pagoPrincipal = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -mesesTotales));
        const pagoMensual = pagoInteres + pagoPrincipal;
  
        saldoRestante -= pagoPrincipal;
  
        datosTabla.push([mes, saldoRestante, pagoPrincipal, pagoInteres, pagoMensual]);
  
        if (saldoRestante <= 0) {
          break;
        }
      }
  
      // Borra los datos existentes de la tabla
      cuerpoTabla.innerHTML = "";
  
      // Llena la tabla con los datos calculados
      datosTabla.forEach(datos => {
        const fila = document.createElement("tr");
        datos.forEach(valorCelda => {
          const celda = document.createElement("td");
          celda.textContent = valorCelda.toFixed(2);
          fila.appendChild(celda);
        });
        cuerpoTabla.appendChild(fila);
      });
    });
  });
