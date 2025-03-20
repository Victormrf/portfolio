"use client";

import { ModalProvider } from "@/context/ModalContext";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n/config";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ModalProvider>{children}</ModalProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
