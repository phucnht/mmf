import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@whammytechvn/wt-components";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box className="min-h-screen relative">
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
}
