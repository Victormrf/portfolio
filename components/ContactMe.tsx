import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-base text-gray-700 dark:text-gray-300">
        Want to chat? Just shoot me a dm with a direct question on{" "}
        <Link className="text-blue-500" href="https://x.com/vmrf2000">
          twitter
        </Link>{" "}
        or email me directly at{" "}
        <Link className="text-blue-500" href="mailto:vmrf2000@hotmail.com">
          vmrf2000@hotmail.com
        </Link>
      </p>
    </div>
  );
};

export default ContactMe;
