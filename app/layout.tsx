import { Metadata } from "next"
import Navigation from "../components/navigation"
import AboutUsLayout from "./about-us/layout"
import "../styles/global.css"

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies(JY)",
    default: "Next Movies"
  },
  description: 'The Best Movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation  />
        {children}
      </body>
    </html>
  )
}