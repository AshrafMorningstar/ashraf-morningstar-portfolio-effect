/**
 * @author Ashraf Morningstar
 * @github https://github.com/AshrafMorningstar
 * @project Premium Personal Portfolio
 * @description Architecting the Digital Future with Quantum Precision.
 */
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

