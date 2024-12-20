"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { photos } from "../../../components/Photos/photosData";
import { useLanguage } from "@/context/LanguageContext";
import Breadcrumb from "../../../components/Common/Breadcrumb";


interface PhotoDetailsProps {
  params: Promise<{ id: string }>;
}

export default function PhotoDetails({ params }: PhotoDetailsProps) {
  const { language } = useLanguage();
  
  const id = parseInt(params.id);

  // Find the post by ID
  const photo = photos.find((item) => item.id === id);

  if (!photo) {
    notFound(); // Return a 404 page if post not found
  }

  return (
    <main dir={language === "ar" ? "rtl" : "ltr"}>
      <Breadcrumb 
        pageName={language === 'ar' ? photo?.titleAr : photo?.titleEn}
      />
      <section className='py-16 px-4 md:px-28'>
        <div className='container mx-auto'>
            <div className='grid gap-10 py-10'>
                <p className='opacity-60 font-light sm:text-lg'>
                Serveyoo Cleaning is your trusted partner in creating pristine and inviting spaces. With a passion for cleanliness and a commitment to excellence, we specialize in delivering top-tier cleaning solutions that transform environments.</p>
            </div>
                {photos.map((photo) => (
                    <div key={photo.id} className='grid sm:grid-cols-2 lg:grid-cols-3 gap-[8px]'>
                    {photo.id === id && photo.photosUrl && photo.photosUrl.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        width={800}
                        height={800}
                        className='px-4 py-4 w-full h-full object-cover transform' 
                        alt={language === 'ar' ? photo?.titleAr : photo?.titleEn || ""}
                      />
                    ))}
                  </div>
                ))}
        </div>
    </section>
    </main>
  );
}



