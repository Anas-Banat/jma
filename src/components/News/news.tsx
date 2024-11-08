import Image from "next/image";

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Oct 30, 2024',
      datetime: '2024-10-30',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
    '/images/news/jma103.png',
  },
  {
    id: 2,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
    '/images/blog/blog-02.jpg',
  },
  {
    id: 3,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Oct 30, 2024',
      datetime: '2024-10-30',
    category: { title: 'Marketing', href: '#' },
    imageUrl:
    '/images/news/health_support.jpg',
  },
]

export default function News() {
  return (
    <div className="bg-gray-1 dark:bg-dark py-10 sm:py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Latest News</h2>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-10">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between px-5 bg-white dark:bg-gray-700 py-5 rounded-xl shadow-testimonial dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[100%] w-[100%] ">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full rounded-xl h-[200px]"
                />
                
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-100">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-blue-700 text-white hover:bg-blue-600 dark:bg-white/10 dark:hover:bg-white/20 px-3 py-1.5 font-medium  dark:text-white "
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-dark dark:text-white group-hover:text-blue">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-dark dark:text-gray-300">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
