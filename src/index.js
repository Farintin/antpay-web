import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import { store } from './store'
import ThemeProvider from './theme'
import reportWebVitals from './reportWebVitals'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <ThemeProvider>

        <Router>
          <Routes/>
        </Router>

      </ThemeProvider>
    </Provider>
  </HelmetProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()