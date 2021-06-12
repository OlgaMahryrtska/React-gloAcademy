import logo from './logo.svg';
import '../src/css/style.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Features from './components/features/features';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
 <Header></Header>
 <Main></Main>
 <Features></Features>
 <Contact></Contact>
 <Footer></Footer>
    </div>
  );
}

export default App;
