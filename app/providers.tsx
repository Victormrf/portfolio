"use client";

import { ModalProvider } from "@/context/ModalContext";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n/config";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nextProvider i18n={i18n}>
        <ModalProvider>{children}</ModalProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
}
