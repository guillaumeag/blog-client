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
      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black uppercase py-4">Next Blog</h1>
          <p className="text-current/80">This is a Blog demo using Next.js</p>
        </div>

        <h2 className="text-xl text-center font-bold p-4">Latest Posts</h2>
        <div id="posts">
          {posts.map((post: Post) => (
            <article key={post.id} className="py-5 border-b-1 border-gray-200" id="post">
              <Link href={`/posts/${post.id}`}className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] items-center gap-2">
                <span className="font-bold text-orange-600 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                <span className="flex-grow hover:underline">{post.title}</span>
                <span className="text-xs text-gray-500 sm:text-right">{post.category}</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
