import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">I am learning Next.js by building something cool.</p>
      <ul className="mt-6 space-y-2">
        <li>
          <Link href="/about" className="text-blue-500 underline">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/projects/portfolio" className="text-blue-500 underline">
            Project: Portfolio
          </Link>
        </li>
      </ul>
    </main>
  );
}

