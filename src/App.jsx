import './app.scss';
import './styles/index.scss';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, BusinessPage } from './views';

function App() {
  return (
    <BrowserRouter>
      <div className="grsp">
        <Menu />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurantid" element={<BusinessPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
