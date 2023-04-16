import './app.scss';
import './styles/index.scss';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="grsp">
      <Menu />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
