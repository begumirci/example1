'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MyPosts({ response, categories }) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [minPriceInput, setMinPriceInput] = useState('');
  const [maxPriceInput, setMaxPriceInput] = useState('');
  const [filteredPosts, setFilteredProducts] = useState(response.products);

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const minPrice = searchParams.get('min-price');
  const maxPrice = searchParams.get('max-price');

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (search) {
      const filteredPost = response.products.filter((res) => {
        const names = res.title.toLowerCase().includes(search.toLowerCase());
        const prices = res.price >= minPrice && res.price <= maxPrice;

        return names, prices;
      });
      setFilteredProducts(filteredPost);
    }
  }, [search]);

  function handleForm(e) {
    e.preventDefault();
    e.preventDefault();
    const form = new FormData(e.target);
    const searchInput = form.get('searchInput');
    const min = form.get('min-price');
    const max = form.get('max-price');

    console.log(min);

    setSearchInput(searchInput);
    setMinPriceInput(min);
    setMaxPriceInput(max);

    getParams(minPriceInput, maxPriceInput, search);
  }

  function getParams(minPriceInput, maxPriceInput, search) {
    const query = [];
    if (search) {
      query.push(`search=${search}`);
    }
    if (minPriceInput) {
      query.push(`min-price=${minPriceInput}`);
    }
    if (maxPriceInput) {
      query.push(`max-price=${maxPriceInput}`);
    }

    const myString = query.join('&');
    router.push(`?${myString}`, undefined, { shallow: true });
  }
  return (
    <div>
      {isLoading ? (
        <>
          <form>
            <input
              placeholder='ara'
              name='postname'
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <input
              placeholder='max-price'
              type='number'
              name='max-price'
              onChange={(e) => setMaxPriceInput(e.target.value)}
            />
            <input
              placeholder='min-price'
              type='number'
              name='min-price'
              onChange={(e) => setMinPriceInput(e.target.value)}
            />

            <button>gönder</button>
          </form>

          {filteredPosts.map((res) => (
            <div key={res.id}>
              <span style={{ paddingRight: '20px' }}>{res.id}</span>
              <span style={{ paddingRight: '20px' }}>{res.title}</span>
              <span style={{ paddingRight: '20px' }}>{res.price}</span>
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
