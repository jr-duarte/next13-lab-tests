import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  contact,
  dashboard,
}: {
  children: React.ReactNode;
  contact: React.ReactNode;
  dashboard: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h2>layout 2</h2>

        {children}
        <hr />
        {contact}
        <hr />
        {dashboard}
      </body>
    </html>
  );
}
