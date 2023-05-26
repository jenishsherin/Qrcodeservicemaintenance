import {  useLoaderData } from 'react-router-dom';
import { getAdminRequest } from '../util/api';
import styles from './AdminDashboard.module.css'
import { useEffect, useState } from 'react';
import AdminNavigation from '../component/AdminNavigation';
import AdminHeader from '../component/AdminHeader';
import ErrorElement from '../component/ErrorElement';
function AdminDashboard() {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
   
    const loaderData = useLoaderData();
    const [treq,setTreq] = useState();
    const [nreq,setNreq] = useState();
    const [creq,setCreq] = useState();
    const [preq,setPreq] = useState();
    useEffect(() => {
        setTreq(loaderData.length)

        const newreq=loaderData.filter(function (req) {
            return req.status==='requested'
        })
        setNreq(newreq.length)

        const compreq=loaderData.filter(function (req) {
            return req.status==='completed'
        })
        setCreq(compreq.length)

        const penreq=loaderData.filter(function (req) {
            return req.status==='pending'
        })
        setPreq(penreq.length)
    },[loaderData])

  

    if (!isAuth) {
        return (
            <ErrorElement links='/admin/dashboard' rightlink='/admin/login' />
        )
    }



    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <AdminHeader/>
            <div style={{display:'flex'}}>
                <AdminNavigation/>
                <div className={styles.adminDashbord}>
                    <h2 style={{paddingLeft:'20px'}}>Admin Dashboard</h2>
                    <div className={styles.dashSubDiv}>
                        <div className={styles.dashSubDiv1} >
                            <div style={{textAlign: 'center'}}>
                                <img src="/totalrequest.jpg" className={styles.divIconWidth} alt="" />
                            </div>
                            <div >
                                <h2 style={{fontSize: '20px'}}>Total Request</h2>
                                <h2 style={{textAlign: 'center',margin: '0px'}}>{treq}</h2>
                            </div>
                        </div>
                        <div className={styles.dashSubDiv1} >
                            <div style={{textAlign: 'center'}}>
                                <img src="/newrequest.png" className={styles.divIconWidth} alt="" />
                            </div>
                            <div >
                                <h2 style={{fontSize: '20px'}}>New Request</h2>
                                <h2 style={{textAlign: 'center',margin: '0px'}}>{nreq}</h2>
                            </div>
                        </div>
                        <div className={styles.dashSubDiv1} >
                            <div style={{textAlign: 'center'}}>
                                <img src="/completedreq.png" className={styles.divIconWidth} alt="" />
                            </div>
                            <div >
                                <h2 style={{fontSize: '20px'}}>Completed Request</h2>
                                <h2 style={{textAlign: 'center',margin: '0px'}}>{creq}</h2>
                            </div>
                        </div>
                        <div className={styles.dashSubDiv1} >
                            <div style={{textAlign: 'center'}}>
                                <img src="/pendingrequest.png" className={styles.divIconWidth} alt="" />
                            </div>
                            <div >
                                <h2 style={{fontSize: '20px'}}>Pending Request</h2>
                                <h2 style={{textAlign: 'center',margin: '0px'}}>{preq}</h2>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;

export async function loader() {
    return getAdminRequest();

}