"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const ContactMe = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-4">
      <p className="text-base text-gray-700 dark:text-gray-300">
        {t("contactMe")}{" "}
        <Link className="text-blue-500" href="mailto:vmrf2000@hotmail.com">
          vmrf2000@hotmail.com
        </Link>
      </p>
    </div>
  );
};

export default ContactMe;
