import Link from "next/link";


export default function page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1>About</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link href={'/'}>Home Page</Link>
        </button>
      </div>
    </>
  );
}
