
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashbord/Dashboard';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <div >

<Routes>
  <Route path="/" element={<Dashboard/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
  <Route path="*" element={"404 not found"}/>

</Routes>

<AlertNotification/>


    </div>
  );
}

export default App;
