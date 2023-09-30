import Head from "next/head";
import { Button } from "@mui/material";
import BasicTable from "../basicTable/page";

function Movements() {
  return (
    <><Head>
      <meta name="keywords" content="movimientos, tarjeta, resumen" />
      <meta name="description" content="movimientos y resumenes de las tarjetas"/>
    </Head>
    <div>
      <h1>Movimientos:</h1>
      <p>
        En la siguiente tabla se muestran los movimientos de{" "}
        <strong>este mes</strong>.
        <br />
        Para visualizar movimientos de fechas anteriores, por favor,{" "}
        <strong>solicite un resumen de cuenta</strong>.
      </p>
       <BasicTable /> 
      <br />
      <Button type="submit" variant="contained" disabled>
        SOLICITAR RESUMEN DE CUENTA
      </Button>
    </div> </>
  );
}

export default Movements;
