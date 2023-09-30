import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <><Head>
      <link
      rel="canonical"
      href="https://www.itbank.com/itbank"
      key="canonical"
      />
  </Head>
    <div className='container'>
      <div>
        <button>
          <Link href="/landingPage"> Ingresar</Link>
        </button>
      </div>
    </div></>
  );
}
