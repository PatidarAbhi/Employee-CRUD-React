import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Employee from './components/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Company from './components/Company';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Company></Company>} />
          <Route path='/employee' element={<Employee></Employee>} />
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );}
  
export default App;
