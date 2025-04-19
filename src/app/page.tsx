import Image from "next/image";

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

export default async function Home() {
  
  // Fetching data from an API
  const blog_data = await fetch("https://api.vercel.app/blog");
  
  // Process the response and parse data as JSON
  const posts: Post[] = await blog_data.json();
  
  return (
    <div>
      <main>
        <h1 className="text-4xl font-bold">Next Blog</h1>

        <ul>
          {posts.map((post: Post) => (<li key={post.id}>{post.title}</li>))}
        </ul>
      </main>
    </div>
  );
}
