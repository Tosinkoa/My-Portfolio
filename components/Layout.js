import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import Dropdown from "./Dropdown"

const Layout = ({ title, keywords, description, children }) => {
  const [showDropdown, setShowDropdown] = useState(false)

  const dropdownHandler = () => setShowDropdown(!showDropdown)

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="home" className="relative font-open-san bg-gray-50 dark:bg-gray-900">
        <Header dropdownHandler={dropdownHandler} />
        <Dropdown showDropdown={showDropdown} dropdownHandler={dropdownHandler} />
        <div className="mt-20 md:mt-16">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: "Paul Ojo Portfolio",
  description: "Paul Ojo portfolio web app",
  keywords: "Paul, Ojo, Paul Ojo, Ojo Paul, Paul Ojo Oluwatosin, Ojo Paul Oluwatosin, Oluwatosin, Oluwatosin Paul Ojo",
}
