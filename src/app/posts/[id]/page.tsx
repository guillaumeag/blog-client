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
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 max-w-2xl mx-auto">
        <article>
          <header>
            <p className="text-sm text-orange-600">{post.category}</p>
            <h1 className="text-4xl font-black uppercase py-4">{post.title}</h1>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()} • {post.author}</p>
          </header>
          <section className="article-content mt-8">
            <p>{post.content}</p>
          </section>
        </article>
      </div>
    </main>
  );
}