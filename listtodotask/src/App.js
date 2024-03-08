
import './App.css';
// import Table from './components/Table';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Routes from './router/Routes';
import Create from './pages/Home/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Index';
import Edit from './pages/Home/Edit';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit' element={<Edit />}></Route>
        </Routes>
      </Router>

      {/* <Table /> */}
      {/* // <Home /> */}
      {/* <Create /> */}
      {/* <Routes /> */}

    </div>
  );
}

export default App;
