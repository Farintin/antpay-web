import { MemoryRouter, BrowserRouter } from "react-router-dom"
import WebsiteRoute from "../Apps/Website"
import WebAppRoute from '../Apps/WebApp'



const routes = {
  web: {
    name: 'webApp',
    comp: <MemoryRouter><WebAppRoute /></MemoryRouter>
  }
}

export default function () {
  let render = <BrowserRouter><WebsiteRoute /></BrowserRouter>
  let subdomain = window.location.host.split('.')[0]
  let route = routes[subdomain]
  
  if (route) {
    render = route.comp
  }

  return (
    render
  )
}
