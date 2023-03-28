import { Root } from "./Desktop.component"
import { 
  Home3, 
  About4, 
  Banner, 
  Features2, 
  Partner2, 
  Footer2 
} from "../../sections"
import Nav from "../../components/nav"



export default function () {
  return (
    <Root>
      <Nav />
      <Home3 />
      <About4 />
      <Banner />
      <Features2 />
      <Partner2 />
      <Footer2 />
    </Root>
  )
}