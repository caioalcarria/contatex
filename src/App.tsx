import "./App.css"
import { Contact } from "./components/Contact/"
import { Header } from "./components/Header"
import { Scrollup } from "./components/Scrollup"
import { Skills } from "./components/Skills"
import { Work } from "./components/Work"

function App() {


  return (
    <>
      <Header />
      <main>
        <Skills />
        <Work />
        <Contact />
      </main>
      <Scrollup />
    </>
  )
}

export default App
