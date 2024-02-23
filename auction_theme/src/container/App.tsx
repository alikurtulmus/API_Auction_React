import React, { useEffect } from 'react';
import './App.css';
import { Header } from '../Layout';
import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setLoggedInUser } from '../Storage/Redux/authenticationSlice';
import userModel from '../Interfaces/userModel';
import { jwtDecode } from 'jwt-decode';

import NotFound from '../Other/NotFound';
import { VehicleList } from '../pages/vehicle';
import { CreateVehicle, VehicleIndex } from '../pages/Admin';
import VehicleDetail from '../pages/vehicle/VehicleDetail';
import Register from '../pages/Account/Register';
import Login from '../pages/Account/Login';
import BidCheckout from '../pages/Bid/BidCheckout';
import Payment from '../pages/Payment/Payment';
function App() {

  const Dispatch = useDispatch();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (token) {
      const {nameid,email,role,fullName} : userModel = jwtDecode(token);
      Dispatch(setLoggedInUser({
          nameid,email,role,fullName
      }))
    }
  })




  return (
    <div className="App">
      <Header></Header>
      <div className='pb-5' >
        <Routes>
          <Route path='/' element={<VehicleList></VehicleList>} ></Route>
          <Route path='/Admin/VehicleIndex' element={<VehicleIndex></VehicleIndex>} ></Route>
          <Route path='/Admin/CreateVehicle/:vehicleId?' element={<CreateVehicle></CreateVehicle>} ></Route>
            <Route path='Vehicle/VehicleId/:vehicleId' element={<VehicleDetail></VehicleDetail>} ></Route>
            <Route path='Register' element={<Register></Register>} ></Route>
            <Route path='Login' element={<Login></Login>} ></Route>
            <Route path='Vehicle/BidCheckout/:vehicleId' element={<BidCheckout></BidCheckout>} ></Route>
            <Route path='Payment' element={<Payment></Payment>} ></Route>
            <Route path='*' element={<NotFound></NotFound>} ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
