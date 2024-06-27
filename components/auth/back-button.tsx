import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button variant={"link"} asChild size="sm" className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
}
