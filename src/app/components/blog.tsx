import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

export interface BlogType {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}

async function Blog() {
  // Fetching data from sanity
  const data: BlogType[] = await client.fetch(`*[_type == "blog"]{
    heading,
    description,
    "slug":slug.current,
    "imageUrl":image.asset->url
  }`);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3  gap-6 px-4 py-6">
      {data.map((blog, index) => {
        return (
          <Link key={index} href={`blog/${blog.slug}`} className="bg-gray-50">
            <div className="p-4 shadow-md rounded-md hover:scale-105 active:scale-100 transition-all cursor-pointer">
              <Image
                src={blog.imageUrl}
                alt={blog.heading}
                height={300}
                width={300}
                className="w-auto object-cover rounded-md"
              />
              <span className="p-2">
                <h2 className="text-xl font-bold">{blog.heading}</h2>
                <p className="line-clamp-2">{blog.description}</p>
              </span>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Blog;
