'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MyPosts({ response }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredPosts, setFilteredProducts] = useState(response);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  console.log(search);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (search) {
      const filteredPost = response.filter((res) =>
        res.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filteredPost);
    }
  }, [search]);

  function handleForm(e) {
    e.preventDefault();
    router.push(`?search=${searchInput}`);
  }
  return (
    <div>
      {isLoading ? (
        <>
          <form onSubmit={handleForm}>
            <input
              placeholder='ara'
              name='postname'
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button>gönder</button>
          </form>
          {filteredPosts.map((res) => (
            <div key={res.id}>
              <span style={{ paddingRight: '20px' }}>{res.id}</span>
              <span>{res.title}</span>
              <Link href={`/posts/${res.id}`}>Detay Göster</Link>
            </div>
          ))}
        </>
      ) : (
        <span>Yükleniyor...</span>
      )}
    </div>
  );
}
