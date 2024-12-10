"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const posts = [
  {
    id: 1,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/news/jma103.png',
  },
  {
    id: 2,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/blog/blog-02.jpg',
  },
  {
    id: 3,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/news/health_support.jpg',
  },
  {
    id: 4,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/news/health_support.jpg',
  },
  {
    id: 5,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/news/jma103.png',
  },
  {
    id: 6,
    titleEn: 'Boost your conversion rate',
    titleAr: 'Boost your conversion rate',
    href: '#',
    descriptionEn:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    descriptionAr:
      'Ilo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Oct 30, 2024',
    datetime: '2024-10-30',
    imageUrl:
    '/images/blog/blog-02.jpg',
  },
]


export default function Conferences() {
  const { lang, language } = useLanguage();

  return (
    <div className="bg-gray-1 dark:bg-dark py-10 sm:py-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {language === 'ar' ? 'مؤتمرات النقابة' : 'Association Conferences'}
          </h2>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-10">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between px-5 bg-white dark:bg-gray-700 py-5 rounded-xl shadow-testimonial dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[100%] w-[100%] ">
                <Image
                  src={post.imageUrl}
                  alt={lang === 'ar' ? post.titleAr : post.titleEn}
                  width={400}
                  height={400}
                  className="w-full rounded-xl h-[200px]"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-100">
                  {post.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-dark dark:text-white group-hover:text-blue">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {lang === 'ar' ? post.titleAr : post.titleEn}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-dark dark:text-gray-300">{lang === 'ar' ? post.descriptionAr : post.descriptionEn}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
