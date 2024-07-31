import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostDetail({ params }) {
  const { id } = params;

  const request = await fetch(`https://dummyjson.com/products/${id}`);

  if (request.ok) {
    const response = await request.json();

    return (
      <div>
        <span>{response.id}</span>
        <h5>{response.title}</h5>
        <p>{response.body}</p>
        <Link href={'/posts'}>Geri Dön</Link>
      </div>
    );
  } else {
    return notFound();
  }
}
