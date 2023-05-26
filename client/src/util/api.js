import axios from 'axios';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isMobileNumber, userdataValidation } from '../validation/validation';
export async function userregistartion(data) {
    const userData = {
        name:data.get('name'),
        mobile: data.get('mobile'),
        address: data.get('address'),
        location: data.get('location'),
        service: data.get('service'),
        servicetype: data.get('servicetype'),
        comment: data.get('comment'),
    }

    if (!userdataValidation(userData.name, userData.mobile,userData.address,userData.location,userData.servicetype)) {
        return { isError: true, message: 'Invalid input data provided.' };
    }

    if(!isMobileNumber(userData.mobile))
    {
        return { isError: true, message: 'Invalid phone number' };
    }

    try{
        const response=await axios.post('http://localhost:5000/userregistration', userData)
        
        if(response.statusText==="OK"){
            toast.success("Registered Successfully");
        }
    }
    catch(error){
        
        return { isError: true, message: error.response.data.message };
    }
}

export async function logIn(data){
    const logindata = {
        email: data.get('email'),
        password: data.get('password'),
    }
    try{
    const response=await axios.post('http://localhost:5000/login', logindata)
  
        if(response.statusText==='OK'){
            
            localStorage.setItem("isAuth",true)    
        }
    }
    catch(error){
        return { isError: true, message: error.response.data.message };
    }
}

export async function servicelogIn(data){
    const logindata = {
        email: data.get('email'),
        password: data.get('password'),
    }
    try{
    const response=await axios.post('http://localhost:5000/servicelogin', logindata)
  
        if(response.statusText==='OK'){ 
            localStorage.setItem("isServiceAuth",true)   
        }
    }
    catch(error){
        return { isError: true, message: error.response.data.message };
    }
}

export async function getAdminRequest(){
    const response=await axios.get('http://localhost:5000/allrequest')
    return response.data;
}

export async function getNewRequest(){
    const response=await axios.get('http://localhost:5000/newrequest')
    return response.data;
}

export async function getCompletedRequest(){
    const response=await axios.get('http://localhost:5000/completedrequest')
    return response.data;
}

export async function getPendingRequest(){
    const response=await axios.get('http://localhost:5000/pendingrequest')
    return response.data;
}

export async function getRequest(id){
    const response=await axios.get('http://localhost:5000/viewrequest/'+id)
    return response.data;
}

export async function sendToService(id){
    const response=await axios.post('http://localhost:5000/adminupdaterequest/'+id)
    return 
}

export async function getNewServiceRequest(){
    const response=await axios.get('http://localhost:5000/getservicerequest')
    return response.data;
}

export async function setAsCompleted(id){
    const response=await axios.post('http://localhost:5000/serviceupdaterequest/'+id)
    return 
}

export async function adminchangepassword(data){
    const logindata = {
        email: data.get('email'),
        password: data.get('password'),
    }
    try{
        await axios.post('http://localhost:5000/adminpassword', logindata)
    }
    catch(error){
        return { isError: true, message: error.response.data.message };
    }
}

export async function servicechangepassword(data){
    const logindata = {
        email: data.get('email'),
        password: data.get('password'),
    }
    try{
        await axios.post('http://localhost:5000/servicepassword', logindata)
    }
    catch(error){
        return { isError: true, message: error.response.data.message };
    }
}