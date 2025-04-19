// Define the structure of a blog post object
// in order to use it in the page
type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  category: string;
}

export default async function Page({params}: {params: Promise<{ id: string }>}) {
  // Extracting the id from the params
  const { id } = await params;

  // Fetching data from Vercel's dummy API
  const post_data = await fetch(`https://api.vercel.app/blog/${id}`); 
  
  // Process the response and parse data as JSON
  const post: Post = await post_data.json();
  
  return (
    <main>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
        <p>Date: {new Date(post.date).toLocaleDateString()}</p>
        <p>Category: {post.category}</p>
      </article>
    </main>
  );
}