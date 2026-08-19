import React from "react"
import Header from "./components/Header"
import ExtensionCard from "./components/ExtensionCard"
import ExtensionsList from "./components/ExtensionsList"
function App() {
  return (
    <div className="min-h-screen w-full bg-sky-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <Header />
      <ExtensionsList/>
      </div>
    </div>
  )
}

export default App