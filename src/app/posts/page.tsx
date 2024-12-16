import Link from "next/link";

interface Post {
  id: string;
  title: string;
}

const posts: Post[] = [
  { id: "1", title: "Post Title 1" },
  { id: "2", title: "Post Title 2" },
  { id: "3", title: "Post Title 3" },
];

export default function PostsList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/posts/${post.id}`}>
              <span className="text-blue-500 hover:underline cursor-pointer">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
