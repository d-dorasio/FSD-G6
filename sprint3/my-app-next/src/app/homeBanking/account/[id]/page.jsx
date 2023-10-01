
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
      <section className="min-h-[calc(100vh-208px)] flex items-center">
        <div className="flex flex-col mx-auto w-3/4 bg-slate-50 p-4 rounded-md border-l-4 border-orange-400 shadow-lg cursor-default">
          <div className="flex justify-between">
            <Link
              href="/homeBanking/account"
              className="flex items-center gap-1 hover:text-orange-400 transition-colors"
            >
             
              Volver atrás
            </Link>
            <p className="flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer">
              Más opciones 
            </p>
          </div>
          <div className="text-center">
            <p className="uppercase text-4xl font-semibold border-b-2 border-orange-400 w-1/2 mx-auto">
              C.A {cuentas.type}
            </p>
            <p className="text-3xl py-3">$ {cuentas.balance}</p>
            <p className="text-base">N° de cuenta: {cuentas.card}</p>
          </div>
          <div className="flex justify-between px-4 pt-6">
            <p className="flex flex-col items-center text-slate-700">
              Titular:
              <span className="text-black font-semibold">
                {cuentas.name}
              </span>
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
