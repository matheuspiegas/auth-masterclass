import { ReactNode } from "react";
import Navbar from "@/app/(protected)/_components/navbar";

interface ProtectedLayoutProps {
  children: ReactNode;
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-sky-500">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
