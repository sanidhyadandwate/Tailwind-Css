import Body from "./Components/Body"
import Footer from "./Components/Footer"
import Header from "./Components/Header"


function App() {

  return (
    <>
      <div className="bg-amber-100 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 py-7 md:justify-between lg:px-16 lg:py-10">
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
