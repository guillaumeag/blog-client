import Link from "next/link";
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
            <p className="font-medium pt-8">{post.content}</p>
          </header>
          <section className="article-content mt-8">
            <Image className="rounded-lg mb-8" src="/image-placeholder-1200x800.svg" alt={post.title} width={800} height={400} /> 
            <p className="pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis congue vehicula. Pellentesque posuere est vitae nunc mollis, quis placerat est egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse mauris enim, luctus eu felis in, mollis euismod metus. Maecenas condimentum convallis enim, non vulputate nunc aliquet quis. Donec interdum, eros eget tincidunt molestie, felis velit condimentum justo, in faucibus erat tortor in lectus. Vestibulum lobortis, purus non tempus sagittis, nisi lacus viverra erat, lobortis auctor augue quam eget eros. Suspendisse ultrices orci ultricies dapibus euismod. Morbi consectetur mi a nulla suscipit imperdiet. Suspendisse hendrerit malesuada ornare. Nulla elementum faucibus magna sed congue. Curabitur erat leo, ornare eget urna id, placerat posuere metus. Pellentesque id posuere orci, ut mollis sapien. Morbi a sapien quis odio mattis facilisis.
            </p>
            <p className="pb-4">
            Vivamus varius nibh lectus, vel molestie risus viverra ut. Aenean imperdiet volutpat aliquam. Morbi in convallis augue. Integer non volutpat purus, molestie sodales lacus. Mauris pulvinar vitae ligula et cursus. Sed sollicitudin in elit in mattis. Etiam ac erat quis tellus tincidunt faucibus.
            </p>
            <p className="pb-4">
              Fusce lorem quam, accumsan id neque ac, pellentesque laoreet nibh. Nulla facilisi. Suspendisse urna metus, scelerisque sit amet vestibulum sit amet, condimentum in ex. Quisque facilisis efficitur libero eu molestie. Maecenas gravida ornare dolor, at pretium tellus convallis eget. Aliquam quis bibendum sem. Suspendisse potenti. Nunc ac nunc elit. Nulla id nibh ex.
            </p>
            <p className="pb-4">
              Nulla facilisi. Etiam eleifend elit ut sapien viverra, vel efficitur nibh dictum. Aliquam dictum feugiat porta. Phasellus sit amet elementum arcu. Donec enim tellus, gravida eu imperdiet non, pharetra eu ligula. Mauris condimentum, ipsum vel volutpat feugiat, enim ex consectetur enim, in sagittis magna mi nec arcu. Fusce mollis ante erat, sed efficitur purus efficitur ut. Maecenas est nisi, ornare a dignissim gravida, ornare id libero. Aenean hendrerit arcu ac lorem pretium bibendum. Vestibulum posuere urna sapien, et pulvinar nisl imperdiet ut. Ut vehicula eget nisi a sodales. Aliquam ut quam gravida, porta mi vel, elementum ex. Duis tristique condimentum lacus ut laoreet. Donec id viverra tellus, euismod dapibus lorem.
            </p>
            <p className="pb-4">
              Morbi odio nulla, malesuada et imperdiet sed, laoreet eget purus. Donec posuere aliquet ex a condimentum. Mauris ac est sit amet urna feugiat maximus vitae non nisl. Curabitur sit amet varius ex, in euismod purus. Cras sit amet ornare libero, dictum accumsan lorem. Mauris convallis non ante non finibus. Donec consectetur massa neque, ac semper eros scelerisque ut. Sed est turpis, posuere at arcu sit amet, viverra commodo lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ultricies commodo lacus, sed ultrices turpis ullamcorper in. Aenean ullamcorper, lacus sed viverra iaculis, enim lectus blandit massa, eget aliquet magna dolor a dui. Integer faucibus congue congue. Nullam ut laoreet sapien.
            </p>
          </section>
          <footer className="py-8 text-center">
            <Link href="/" className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-full">
              Back to the list
            </Link>
          </footer>
        </article>
      </div>
    </main>
  );
}