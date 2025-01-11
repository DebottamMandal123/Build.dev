
import "./globals.css";
import Provider from "./provider";


export const metadata = {
  title: "Code Mind AI | Bolt CLone",
  description: "Generated by create next app",
  icons:{
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
