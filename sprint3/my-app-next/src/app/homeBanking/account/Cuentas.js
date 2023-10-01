import { Button, Card, CardContent } from "@mui/material";
import Link from "next/link";

const fetchCuentas = () => {
  return fetch(`https://6518ca51818c4e98ac5febc6.mockapi.io/itbank/accounts`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Cuentas() {
  const cuentas = await fetchCuentas();
  return (
    <div className="flex gap-14">
      {cuentas.map((cuenta) => (
        <Card sx={{margin: "10px", marginBottom: "40px", textAlign: "center"}}>
          <CardContent>
            <div key={cuenta.id}
            >
              <h3>
                Tipo de Cuenta: {cuenta.type}
              </h3>
              <div>
                <p>
                  <span>N° de cuenta:</span>{" "}
                  {cuenta.card}
                </p>
              </div>
              <div>
                <Link href={`/homeBanking/account/${cuenta.id}`}>
                  <Button variant="contained">
                    VER MÁS
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        
      ))}
    </div>
  );
}
