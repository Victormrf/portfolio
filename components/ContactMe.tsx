import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p>
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
