"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { conferences } from "./conferencesData";


export default function Conferences() {
  const { language } = useLanguage();

  return (
    <div className="bg-gray-1 dark:bg-dark py-10 sm:pb-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-10">
          {conferences.map((conference) => (
            <article key={conference.id} className="group flex max-w-xl flex-col items-start justify-between px-5 bg-white dark:bg-gray-700 py-5 rounded-xl shadow-testimonial dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[100%] w-[100%] ">
                <Image
                  src={conference.imageUrl}
                  alt={language === 'ar' ? conference.titleAr : conference.titleEn}
                  width={400}
                  height={400}
                  className="w-full rounded-xl h-[200px] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500 dark:text-gray-100">
                  {conference.date}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-dark dark:text-white group-hover:text-blue">
                  <Link href={`/conferences/${conference.id}`}>
                    <span className="absolute inset-0" />
                    {language === 'ar' ? conference.titleAr : conference.titleEn}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-2 text-sm/6 text-dark dark:text-gray-300">{language === 'ar' ? conference.descriptionAr : conference.descriptionEn}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
