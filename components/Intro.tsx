import Image from "next/image";
import ProfilePic from "@/public/images/profile_picture.jpg";
import { Button } from "./ui/button";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";

const Intro = () => {
  return (
    <div>
      <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
        <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
          <h1 className="text-4xl text-gray-800/80 dark:text-gray-100">
            Hi! I&apos;m{" "}
            <strong className="text-4xl font-bold text-teal-800 dark:text-teal-300">
              Victor Fernandes
            </strong>
          </h1>
          <p className="text-base text-gray-800 dark:text-gray-100">
            As a Software Engineer with 2+ years of experience, i have crafted
            solutions for backend and frontend development, creating
            applications from scratch to production-ready. I have experience
            working with relational and non-relational databases. I also hold a
            degree in electrical engineering, and currently am a post graduate
            student in software engineering. As a software development
            enthusiast, I&apos;m always looking to acquire new knowledge in the
            field and develop new technical skills.
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
      <Button className="mt-3 p-4 text-base">
        <Link href="/curriculum.pdf" download="Victormrf_cv.pdf">
          Download CV
        </Link>
        <DownloadIcon />
      </Button>
    </div>
  );
};

export default Intro;
