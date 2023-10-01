import { Button, Card, CardContent } from "@mui/material";
import Link from "next/link";


const fetchCuentaSeleccionada = (id) => {
  return fetch(`https://6518ca51818c4e98ac5febc6.mockapi.io/itbank/accounts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function DetalleCuenta({ params }) {
  const { id } = params;
  const cuentas = await fetchCuentaSeleccionada(id);

  return (
    <>
      <section>
        <div>
          <div>
            <Button variant="outlined" color="secondary">
              <Link href="/homeBanking/account">Volver atrás</Link>
            </Button>
          </div>
          <Card sx={{margin: "10px", textAlign: "center"}}>
            <CardContent>
              <h3>
              <strong>Titular: </strong>
                <span>
                  {cuentas.name}
                </span>
              </h3>
              <Card variant="outlined" sx={{margin: "10px", textAlign: "center"}}>
                <CardContent>
                  <p>
                    <strong>Tipo de cuenta:</strong> {cuentas.type}
                  </p>
                  <p><strong>Saldo: $ </strong>{cuentas.balance}</p>
                  <p><strong>N° de cuenta: </strong>{cuentas.card}</p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </section>

    </>
  );
}
