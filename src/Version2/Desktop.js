import { Root } from "./Desktop.component"
import { 
  Home2, 
  About2, 
  Banner, 
  Features2, 
  // Partner, 
  // Footer 
} from "../sections"
import Nav from "../components/nav"



export default function () {
  return (
    <Root>
      <Nav />
      <Home2 />
      <About2 />
      <Banner />
      <Features2 />
      {/* <Partner />
      <Footer /> */}
    </Root>
  )
}