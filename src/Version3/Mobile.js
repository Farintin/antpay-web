import { Root } from "./Desktop.component"
import { 
  MobileHome, 
  MobileAbout, 
  MobileFeatures,
  MobilePartner,
  MobileFooter
} from "../sections"
import MobileNav from "../components/MobileNav"



export default function () {
  return (
    <Root>
      <MobileNav />
      <MobileHome />
      <MobileAbout />
      <MobileFeatures />
      <MobilePartner />
      <MobileFooter />
    </Root>
  )
}