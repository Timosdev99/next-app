import "@/styles/globals.css"
import Nav from "@component/nav"
import provider from "@component/provider"


export const metadata = {
  title: "prompter",
  description: "discover best prompt"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}