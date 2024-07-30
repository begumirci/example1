import MyPosts from './content';

export default async function Posts() {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await request.json();

  return (
    <div>
      <MyPosts response={response} />
    </div>
  );
}
