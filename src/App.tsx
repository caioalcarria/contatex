import "./App.css"
import { CreateContact } from "./components/createContact"
import { Header } from "./components/Header"
import { Scrollup } from "./components/Scrollup"
import { Contact } from "./components/contact"
import { Client } from "./components/client"

function App() {


  return (
    <>
      <Header />
      <main>
        <Client/>
        <Contact />
        <CreateContact/>
      </main>
      <Scrollup />
    </>
  )
}

export default App
