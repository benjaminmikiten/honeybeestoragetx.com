import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col [&>main]:px-[18px] md:[&>main]:px-12 lg:[&>main]:px-16 [&>main]:max-w-container [&>main]:mx-auto [&>main]:w-full [&>main]:h-full [&>main]:flex-1">
      {children}
    </div>
  );
}
