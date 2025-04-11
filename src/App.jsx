
import './App.css';
import ResponsiveAppBar from './components/appBar';
import Footer from './components/footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FirstSection from './components/homeImage';

function App() {
  return (
   
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
       
        <ResponsiveAppBar />
          <FirstSection />
          <AboutUs/>
          <ContactUs/>

        <Footer />
      </div>
   
  );
}

export default App;
