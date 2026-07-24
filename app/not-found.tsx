import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-black text-white">
      <h2 className="text-4xl font-serif mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8">Could not find requested resource</p>
      <Link href="/" className="text-brand-gold hover:underline">
        Return Home
      </Link>
    </div>
  );
}
