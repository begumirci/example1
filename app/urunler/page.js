import Products from './content';
import ProductsData from '@/data/products';
import ProductsCategory from '@/data/productsCategory';

export default function GetProducts() {
  return (
    <div>
      <Products products={ProductsData} productsCategory={ProductsCategory} />
    </div>
  );
}
