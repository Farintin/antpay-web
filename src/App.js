import Routes from './routes'
import ThemeProvider from './theme'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  )
}

export default App