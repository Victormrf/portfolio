"use client";

import Image from "next/image";
import ProfilePic from "@/public/images/profile_picture.jpg";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
          <h1 className="text-4xl text-gray-800/80 dark:text-gray-100">
            {t("greeting")}{" "}
            <strong className="text-4xl font-bold text-teal-800 dark:text-teal-300">
              Victor Fernandes
            </strong>
          </h1>
          <p className="text-base text-gray-800 dark:text-gray-100">
            {t("intro")}
          </p>
        </div>
        <div className="md:w-3/12 sm:w-full">
          <Image
            src={ProfilePic}
            alt="Yatharth"
            width={160}
            height={160}
            className="rounded-full border h-36 w-36"
          />
        </div>
      </div>
      <Button className="mt-3 p-4 text-base border-zinc-300 bg-background text-zinc-300 dark:border-zinc-600 dark:hover:border-teal-300 dark:text-zinc-600 dark:hover:text-teal-300">
        <Link href="/curriculum.pdf" download="Victormrf_cv.pdf">
          {t("downloadCV")}
        </Link>
        <DownloadIcon />
      </Button>
    </div>
  );
};

export default Intro;
