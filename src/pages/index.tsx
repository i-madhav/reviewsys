// src/pages/index.tsx
import Head from 'next/head';
import StarRating from '../components/StarRating';
import ThumbsRating from '@/components/ThumbsRating';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen py-2  bg-black text-white">

      <main className="flex flex-col items-center justify-center p-8 rounded-md text-center bg-white text-black">
        <h1 className="text-4xl font-bold mb-8">
          Safety:
          <StarRating/>
        </h1>

        <h1 className="text-4xl font-bold mb-8">
          Communication:
          <StarRating/>
        </h1>

        <section>
          <h2 className="text-3xl font-bold mb-4">
            Would Like to recommend ?
          </h2>
          <ThumbsRating />
        </section>
      </main>
    </div>
  );
}