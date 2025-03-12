import { Separator } from "./ui/separator";

const Footer = () => {
  const current_year = new Date().getFullYear();
  return (
    <footer className="w-full mt-8">
      <Separator className="w-full bg-gray-200 dark:bg-gray-800" />
      <div className="flex items-center justify-center h-16 py-8">
        <p className="text-sm text-gray-500">
          © {current_year} Victor Fernandes. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
