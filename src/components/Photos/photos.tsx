"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { photos } from "./photosData";
import Link from "next/link";


export default function Photos() {
  const { language } = useLanguage();

  return (
    <div className="bg-gray-1 dark:bg-dark py-10 sm:pb-20 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 px-10">
          {photos.map((photo) => (
            <article key={photo.id} className="group flex max-w-xl flex-col items-start justify-between px-5 bg-white dark:bg-gray-700 py-5 rounded-xl shadow-testimonial dark:shadow-none">
              <div className="relative z-10 mx-auto mb-5 h-[100%] w-[100%] ">
                <Image
                  src={photo.imageUrl}
                  alt={language === 'ar' ? photo.titleAr : photo.titleEn}
                  width={400}
                  height={400}
                  className="w-full rounded-xl h-[200px] group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-dark dark:text-white group-hover:text-blue">
                  <Link href={`/photos/${photo.id}`}>
                    <span className="absolute inset-0" />
                    {language === 'ar' ? photo.titleAr : photo.titleEn}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
