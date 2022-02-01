import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage } from './containers/HomePage/homePage';
import { ProductPage } from './containers/ProductPage/productPage';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/:slug' element={<ProductPage />}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
