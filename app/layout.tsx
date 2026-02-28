import type { Metadata } from "next";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danang Adi Nugroho | Cloud DevOps Engineer",
  description: "L2 Cloud DevOps Engineer with 2 years of experience in AWS, GCP, and Alibaba Cloud. Holder of 16 industry certifications.",
  keywords: ["Cloud Engineer", "DevOps", "AWS", "GCP", "Alibaba Cloud", "Kubernetes", "Terraform"],
  authors: [{ name: "Danang Adi Nugroho" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Danang Adi Nugroho | Cloud DevOps Engineer",
    description: "L2 Cloud DevOps Engineer with 2 years of experience in AWS, GCP, and Alibaba Cloud",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} relative`}>
        {/* Background Image with Overlay */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
