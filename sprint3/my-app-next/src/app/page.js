import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='container'>
      <div>
        <button>
          <Link href="/landingPage"> Ingresar</Link>
        </button>
      </div>
    </div>
  );
}
