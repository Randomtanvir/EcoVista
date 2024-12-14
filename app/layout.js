import "./globals.css";

export const metadata = {
  title: "EcoVista",
  description: "One place Dashboard for Eco Information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
