import './App.css'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import NavBar from './components/navBar'
import HomeSlider from './components/HomeSlider'
import HomeShop from './components/HomeShop'
import HomeFeatures from './components/HomeFeatures'
import HomeTestimonials from './components/HomeTestimonials'
import InstagramPage from './components/InstagramPage'
import Footer from './components/Footer'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const theme = createTheme({
  palette: {
    primary: {
      main: "#141414"
    },
    secondary: {
      main: "#f1f0ec"
    }
  },
});

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <HomeSlider/>
        <HomeShop/>
        <HomeFeatures/>
        <HomeTestimonials/>
        <InstagramPage/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
