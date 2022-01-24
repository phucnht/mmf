import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@whammytechvn/wt-components";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box className="min-h-screen relative bg-[#0B2F51] bg-[url('/assets/bg-main.png')] bg-no-repeat bg-[length:100%_51rem] bg-bottom">
      <Box className="absolute bottom-0 w-full min-h-[51rem] main-bg" />
      <Header />
      <Box className="w-full flex justify-center pt-52">{children}</Box>
      <Footer />
    </Box>
  );
}
