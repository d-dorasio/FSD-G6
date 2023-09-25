function Loans() {
  // const [tipoSeleccionado, setTipoSeleccionado] = useState("publica");
  // const [monto, setMonto] = useState("");
  // const [plazoEjecucion, setPlazoEjecucion] = useState("");
  // const [cuotas, setCuotas] = useState([]);

  // const calcularPrestamo = () => {
  //   let tasaInteres = 0.012;

  //   if (tipoSeleccionado === "publica") {
  //     tasaInteres = 0.012;
  //   } else if (tipoSeleccionado === "privado") {
  //     tasaInteres = 0.012;
  //   } else if (tipoSeleccionado === "IPS") {
  //     tasaInteres = 0.0115;
  //   } else if (tipoSeleccionado === "ANSES") {
  //     tasaInteres = 0.0115;
  //   }

  //   const tasaInteresMensual = tasaInteres / 12;
  //   const mesesTotales = parseInt(plazoEjecucion);
  //   const datosTabla = [];
  //   let saldoRestante = parseFloat(monto);

  //   for (let mes = 1; mes <= mesesTotales; mes++) {
  //     const pagoInteres = saldoRestante * tasaInteresMensual * 100;
  //     const pagoPrincipal =
  //       (monto * tasaInteresMensual) /
  //       (1 - Math.pow(1 + tasaInteresMensual, -mesesTotales));
  //     const pagoMensual = pagoInteres + pagoPrincipal;

  //     saldoRestante -= pagoPrincipal;

  //     datosTabla.push([
  //       mes,
  //       saldoRestante,
  //       pagoPrincipal,
  //       pagoInteres,
  //       pagoMensual,
  //     ]);

  //     if (saldoRestante <= 0) {
  //       break;
  //     }
  //   }

  //   setCuotas(datosTabla);
  // };

  return (
    <div>
      <section>
        {/* <Card sx={{ boxShadow: 5 }}>
                  <CardContent> */}
        <h1 className="h1-center">Simulador de préstamos</h1>
        {/*  <div className="container-form">
                      <br />
                      <Card
                        variant="outlined"
                        sx={{ borderColor: "secondary.main" }}
                      >
                        <CardContent> */}
        <form className="form-container">
          <label>Sector de Pertenencia</label>
          {/* <Select
                              required
                              name=""
                              label="Seleccione"
                              variant="standard"
                              onChange={(e) =>
                                setTipoSeleccionado(e.target.value)
                              }
                            >
                              <MenuItem value="publica">
                                Administración Pública
                              </MenuItem>
                              <MenuItem value="privado">Sector privado</MenuItem>
                              <MenuItem value="IPS">IPS</MenuItem>
                              <MenuItem value="ANSES">ANSES</MenuItem>
                            </Select> 
  
                            <TextField
                              required
                              type="text"
                              name="amount"
                              label="Monto"
                              placeholder="Ingrese el monto"
                              variant="standard"
                              value={monto}
                              onChange={(e) => setMonto(e.target.value)}
                            />
  
                            
                            <TextField
                              required
                              type="number"
                              name="months"
                              label="Plazo en meses"
                              placeholder="Cantidad de meses en números"
                              variant="standard"
                              value={plazoEjecucion}
                              onChange={(e) => setPlazoEjecucion(e.target.value)}
                            />
                            <br />
                            <Button
                              type="button"
                              className="boton-form"
                              variant="contained"
                              onClick={calcularPrestamo}
                            >*/}
          Calcular
          {/* </Button> */}
        </form>
        {/* </CardContent> 
                      </Card>*/}
        <br />
        {/* <TableContainer component={Paper}>
                        <Table
                          sx={{ minWidth: 650 }}
                          aria-label="simple table"
                          className="tab-movimientos"
                          cellSpacing="1"
                          style={{ borderCollapse: "collapse" }}
                          width="100%"
                          id="transactionTable"
                        >
                          <TableHead>
                            <TableRow>
                              <TableCell
                                style={{
                                  fontWeight: 900,
                                  color: "#000000",
                                  backgroundColor: "#C2B2B4",
                                }}
                                align="center"
                              >
                                Cuota
                              </TableCell>
                              <TableCell
                                style={{
                                  fontWeight: 900,
                                  color: "#000000",
                                  backgroundColor: "#C2B2B4",
                                }}
                                align="center"
                              >
                                Saldo
                              </TableCell>
                              <TableCell
                                style={{
                                  fontWeight: 900,
                                  color: "#000000",
                                  backgroundColor: "#C2B2B4",
                                }}
                                align="center"
                              >
                                Amortización
                              </TableCell>
                              <TableCell
                                style={{
                                  fontWeight: 900,
                                  color: "#000000",
                                  backgroundColor: "#C2B2B4",
                                }}
                                align="center"
                              >
                                Interés
                              </TableCell>
                              <TableCell
                                style={{
                                  fontWeight: 900,
                                  color: "#000000",
                                  backgroundColor: "#C2B2B4",
                                }}
                                align="center"
                              >
                                Cuota sin I.V.A.
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {cuotas.map((cuota, index) => (
                              <TableRow key={index}>
                                {cuota.map((valorCelda, indexCelda) => (
                                  <TableCell key={indexCelda}>
                                    {valorCelda.toFixed(2)}
                                  </TableCell>
                                ))}
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </CardContent>
                </Card> */}
      </section>
      <section>
        <h2>Préstamos</h2>
        <h3>Préstamos Hipotecarios:</h3>
        <p>
          Los préstamos hipotecarios se utilizan para comprar una vivienda. La
          propiedad se utiliza como garantía del préstamo. Los términos, tasas
          de interés y plazos pueden variar.
        </p>
        <h3>Préstamos Automotores:</h3>
        <p>
          Estos préstamos están diseñados para financiar la compra de vehículos,
          ya sean automóviles nuevos o usados. El vehículo suele servir como
          garantía.
        </p>
        <h3>Préstamos con Tasa Fija o Variable:</h3>
        <p>
          Los préstamos pueden tener tasas de interés fijas (que no cambian) o
          variables (que se ajustan según las tasas de mercado).
        </p>
        <h3>Préstamos a Corto Plazo:</h3>
        <p>
          Estos préstamos son de menor monto y se pagan en un período corto, a
          menudo en unos pocos meses.
        </p>
        <h3>Préstamos a Largo Plazo:</h3>
        <p>
          Los préstamos a largo plazo tienen plazos más largos, a menudo varios
          años, y son adecuados para financiar proyectos más grandes.
        </p>
      </section>
    </div>
  );
}

export default Loans;
