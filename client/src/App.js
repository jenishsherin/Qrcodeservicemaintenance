import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';

import './App.css'
import QrcodeScanner from './pages/QrcodeScanner';
import ForgetPassword, { action as adminpasswordAction } from './pages/ForgetPassword';
import ServiceForgetPassword, { action as servicepasswordAction } from './pages/ServiceForgetPassword';
import AdminDashboard, { loader as requestLoader }  from './pages/AdminDashboard';
import AllRequest, { loader as allrequestLoader }  from './pages/AllRequest';
import NewRequest, { loader as newrequestLoader }  from './pages/NewRequest';
import CompletedRequest, { loader as compequestLoader }  from './pages/CompletedRequest';
import PendingRequest, { loader as pendingrequestLoader }  from './pages/PendingRequest';
import ViewRequest, { loader as viewrequestLoader , action as adminAction } from './pages/ViewRequest';
import Services, { action as serviceAction } from './pages/Services';
import CustomerRegistration, { action as registrationAction } from './pages/CustomerRegistration';
import Login, { action as loginAction } from './pages/Login';
import ServiceLogin, { action as sloginAction } from './pages/ServiceLogin';
import ServiceDashboard, { loader as servicereqLoader }  from './pages/ServiceDashboard';
import ServiceManViewReq, { loader as viewreqLoader , action as servicemanAction } from './pages/ServiceManViewReq';





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route index element={<QrcodeScanner />} />
      <Route path='services' element={<Services />} action={serviceAction} />
      <Route path='registration' element={<CustomerRegistration />} action={registrationAction} />
      <Route path='admin/'>
        <Route path='login' element={<Login />} action={loginAction} />
        <Route path='forgetpassword' element={<ForgetPassword />} action={adminpasswordAction}/>
        <Route path='dashboard' element={<AdminDashboard />} loader={requestLoader} />
        <Route path='allrequest' element={<AllRequest />} loader={allrequestLoader} />
        <Route path='newrequest' element={<NewRequest />} loader={newrequestLoader} />
        <Route path='completedservice' element={<CompletedRequest />} loader={compequestLoader} />
        <Route path='pendingservice' element={<PendingRequest />} loader={pendingrequestLoader} />
        <Route path='viewrequest/:id' element={<ViewRequest />} loader={viewrequestLoader} action={adminAction} />
      </Route>
      <Route path='service/'>
        <Route path='login' element={<ServiceLogin />} action={sloginAction} />
        <Route path='dashboard' element={<ServiceDashboard />} loader={servicereqLoader} />
        <Route path='viewrequest/:id' element={<ServiceManViewReq />} loader={viewreqLoader} action={servicemanAction} />
        <Route path='forgetpassword' element={<ServiceForgetPassword />} action={servicepasswordAction}/>
      </Route>
    </Route>
  )
);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
