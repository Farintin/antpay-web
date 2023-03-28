import WebsiteRoute from "../Apps/Website"
import WebAppRoute from '../Apps/WebApp'



const routes = {
  web: {
    name: 'webApp',
    comp: <WebAppRoute />
  }
}

export default function () {
  let subdomain = window.location.host.split('.')[0]
  let route = routes[subdomain]
  
  let render = <WebsiteRoute />
  if (route) {
    render = route.comp
  }

  return (
    render
  )
}
