import Image from "next/image";
import Link from "next/link";

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
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 max-w-lg mx-auto gap-4">
        <h1 className="text-4xl font-bold text-center py-4">Next Blog</h1>

        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
