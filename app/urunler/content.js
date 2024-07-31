'use client';
import SaveApplication, { Navigation } from '@/actions';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Products({ products, productsCategory }) {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (search) {
      const filteredProduct = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filteredProduct);
    }
  }, [search]);

  //   function handleChangeCategory(e) {
  //     setSelectedCategory(e.target.value);
  //   }

  return (
    <div>
      <form action={Navigation}>
        <input placeholder='ürün ara' name='productName' />

        <button>Gönder,</button>
      </form>

      <div>
        {filteredProducts.map((x) => (
          <div key={x.id}>{x.name}</div>
        ))}
      </div>
    </div>
  );
}
