import Image from "next/image";
import ProfilePic from "@/app/images/profile_picture.jpg";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="text-4xl font-bold">Hi! I&apos;m Yatharth.</h1>
        <p className="text-base text-gray-700">
          Seasoned Fullstack Engineer with 4+ years in startups. I excel in
          building applications from scratch to production-ready. My expertise
          spans across frontend, backend, and full-stack development, with a
          knack for system design and scalability.
        </p>
      </div>
      <div className="w-3/12 flex-1">
        <Image
          src={ProfilePic}
          alt="Yatharth"
          width={160}
          height={160}
          className="rounded-full border border-gray-100 h-36 w-36"
        />
      </div>
    </div>
  );
};

export default Intro;
