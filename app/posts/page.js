import MyPosts from './content';

export default async function Posts() {
  const request = await fetch('https://dummyjson.com/products');
  const response = await request.json();

  const requestCat = await fetch('https://dummyjson.com/products/categories');
  const responseCat = await requestCat.json();

  return (
    <div>
      <MyPosts response={response} categories={responseCat} />
    </div>
  );
}
