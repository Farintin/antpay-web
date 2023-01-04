import { Root } from "./Desktop.component"
import { Home, About, Banner, Features, Partner, Footer } from "../sections"
import Nav from "../components/nav"



export default function () {
  return (
    <Root>
      <Nav />
      <Home />
      <About />
      <Banner />
      <Features />
      <Partner />
      <Footer />
    </Root>
  )
}