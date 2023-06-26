import './App.css';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';
import Contact from './component/Contact';
import MailChimpForm from './component/MailChimpForm';


function App() {
  return (
    <>
    <NavBar />
    <Banner />
    <Skills />
    <Projects />
    <Contact />
    <MailChimpForm />
    <Footer />
    </>);
}

export default App;
