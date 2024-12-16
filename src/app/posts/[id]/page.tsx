import { notFound } from "next/navigation";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  date: string;
  image: string;
  description: string;
}

// Simulated posts data
const posts: Post[] = [
  {
    id: "1",
    title: "Post Title 1",
    date: "2024-06-10",
    image: "/images/blog/blog-02.jpg",
    description: "This is the description for Post 1.",
  },
  {
    id: "2",
    title: "Post Title 2",
    date: "2024-06-11",
    image: "/images/blog/blog-02.jpg",
    description: "This is the description for Post 2.",
  },
  {
    id: "3",
    title: "Post Title 3",
    date: "2024-06-12",
    image: "/images/blog/blog-02.jpg",
    description: "This is the description for Post 3.",
  },
];

interface PostDetailsProps {
  params: { id: string };
}

export default function PostDetails({ params }: PostDetailsProps) {
  const { id } = params;

  // Find the post by ID
  const post = posts.find((item) => item.id === id);

  if (!post) {
    notFound(); // Return a 404 page if post not found
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-3xl mx-auto">
        <Image
          src={post?.image || ""}
          alt={post?.title || ""}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
        <p className="text-gray-500 mb-4">{post?.date}</p>
        <p className="text-lg leading-relaxed">{post?.description}</p>
      </div>
    </div>
  );
}
