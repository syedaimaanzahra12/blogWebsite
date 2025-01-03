import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { BlogType } from "@/app/components/blog";

interface BlogPostParams {
  params: Promise<{ slug: string }>
  
}

const BlogPost = async ({params}: BlogPostParams) => {
const { slug } = await params;  
  const data: BlogType = await client.fetch(
    `
    *[_type == "blog" && slug.current == $slug]{
      heading,
      description,
      "imageUrl":image.asset->url
    }[0]`,
    { slug }
  );

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={data.imageUrl}
            alt={data.heading}
            height={600}
            width={600}
            className="rounded-md object-cover w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 font-serif">
            {data.heading}
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl leading-relaxed text-left font-medium ">
            {data.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
