import type { Metadata } from "next";

import Navigation from "@/app/components/navigation/navigation"



export const metadata: Metadata = {
  title: "Inengs Marikina",
  description: "Shoes and Sandals Store",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
    
        <Navigation/>
        
        {children}
        
    </>
  );
}
