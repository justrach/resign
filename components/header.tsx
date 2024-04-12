import Link from 'next/link';
export default function Header() {
  return (
    <header className="flex px-4 py-4 justify-start items-start w-full border-b-2 pb-7">
      <Link href="/">
        <div className="flex justify-center items-center"> 
          <h1 className="text-3xl font-bold tracking-tight">
            resign.lol
          </h1>
        </div>
      </Link>
    </header>
  );
}
