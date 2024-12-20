
import { useLanguage } from "@/context/LanguageContext";

// For SubTitle Details
export const SubTitle = ({ titleAr, titleEn }: { titleAr: string, titleEn: string }) => {
  const { language } = useLanguage();

  return (
    <>
    {language === "ar" 
      ? 
        <h2 className="mt-10 mb-5 text-xl font-bold leading-tight text-primary dark:text-white sm:text-[30px] sm:leading-[1.2]">
          {titleAr}
        </h2>
      :
        <h3 className="my-10 text-lg font-bold leading-tight text-primary dark:text-white sm:text-[25px] sm:leading-[1.2]">
          {titleEn}
        </h3>
    }
    </>
  );
};

// For Paragraph Details
export const Parag = ({ textAr, textEn }: { textAr: string, textEn: string }) => {
  const { language } = useLanguage();

  return (
    <>
    {language === "ar" 
      ? 
      <p className="px-7 py-2 text-xl leading-relaxed text-blue-950 dark:text-dark-6 sm:text-[20px] sm:leading-[1.2]">
          {textAr}
        </p>
      :
      <p className="px-7 py-2 text-base leading-relaxed text-blue-950 dark:text-dark-6 sm:text-[15px] sm:leading-[1.2]">
          {textEn}
        </p>
    }
    </>
  );
};

// Click here to download the file
export const ClickHere = ({ urlPathAr, urlPathEn }: { urlPathAr: string, urlPathEn: string }) => {
  const { language } = useLanguage();

  return (
    <>
    {language === "ar" 
      ? 
      <p className="py-10 pr-7 mb-5 text-xl leading-relaxed text-blue-950 dark:text-dark-6 sm:text-[20px] sm:leading-[1.2]">
        للمزيد من المعلومات،
        <a 
          href={urlPathAr} 
          download
          className="px-1 mb-5 text-xl font-bold underline leading-relaxed text-red dark:text-red hover:text-blue-500 hover:dark:text-blue-500 sm:text-[20px] sm:leading-[1.2]"
        >
          اضغط هنا
        </a>
         لتحميل الملف
      </p>
      :
      <p className="py-10 pl-7 mb-5 text-base leading-relaxed text-blue-950 dark:text-dark-6 sm:text-[15px] sm:leading-[1.2]">
        For more information, please 
        <a 
          href={urlPathEn}
          download
          className="px-1 mb-5 text-base font-bold underline leading-relaxed text-red dark:text-red hover:text-blue-500 hover:dark:text-blue-500 sm:text-[15px] sm:leading-[1.2]"
        >
          click here
        </a>
         to download the file
      </p>
    }
    </>
  );
};


// For Download File
export const DownloadFile = ({ urlPathAr, urlPathEn, textAr, textEn }: { urlPathAr: string, urlPathEn: string, textAr: string, textEn: string }) => {
  const { language } = useLanguage();

  return (
    <>
    {language === "ar" 
      ? 
      <p className="pr-7 mb-5 text-xl leading-relaxed text-body-color dark:text-dark-6">
        <a 
          href={urlPathAr} 
          download
          className="px-1 mb-5 text-xl underline leading-relaxed text-red dark:text-red hover:text-blue-500 hover:dark:text-blue-500"
        >
          {textAr}
        </a>
      </p>
      :
      <p className="pl-7 mb-5 text-base leading-relaxed text-body-color dark:text-dark-6">
        <a 
          href={urlPathEn}
          download
          className="px-1 mb-5 text-base underline leading-relaxed text-red dark:text-red hover:text-blue-500 hover:dark:text-blue-500"
        >
          {textEn}
        </a>
      </p>
    }
    </>
  );
};


// For Paragraph Details
export const FormParag = ({ textAr, textEn }: { textAr: string, textEn: string }) => {
  const { language } = useLanguage();

  return (
    <>
    {language === "ar" 
      ? 
      <p className="w-full p-2 border rounded mb-5 text-xl text-blue-950 dark:text-dark-6 sm:text-[20px] sm:leading-[1.2]">
          {textAr}
        </p>
      :
      <p className="w-full p-2 border rounded mb-5 text-base text-blue-950 dark:text-dark-6 sm:text-[15px] sm:leading-[1.2]">
          {textEn}
        </p>
    }
    </>
  );
};