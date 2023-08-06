import { io } from 'socket.io-client'


// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000'

// const URL = 'http://ec2-15-237-107-34.eu-west-3.compute.amazonaws.com:5000'
const URL = 'http://localhost:5000'



export const socket = io(URL, {
    autoConnect: false
  })