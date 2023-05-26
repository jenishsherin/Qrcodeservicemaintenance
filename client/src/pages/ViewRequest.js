import { useLoaderData,useNavigate,redirect, Form, useParams} from 'react-router-dom';
import { getRequest,sendToService } from '../util/api';
import styles from './ViewRequest.module.css';
import AdminNavigation from '../component/AdminNavigation';
import AdminHeader from '../component/AdminHeader';
import ErrorElement from '../component/ErrorElement';
function ViewRequest() {
    const requestData = useLoaderData();
    const navigate = useNavigate();
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const {id}=useParams();
    const bclink='/admin/viewrequest/'+id;

    async function cancelHanldler(){
        navigate('/admin/newrequest');
    }

    if (!isAuth) {
        return (
            <ErrorElement links={bclink} rightlink='/admin/login'/>
        )
    }

    return (
        <div className={styles.employee}>
            <AdminHeader />
            <div style={{ display: 'flex' }}>
                <AdminNavigation />
                <div className={styles.viewMainDiv}>
                    <h1>New Service Request</h1>
                    <div className={styles.viewDiv}>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Name</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.name}</label>
                        </div>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Phone No</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.mobile}</label>
                        </div>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Address</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.address}</label>
                        </div>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Location</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.location}</label>
                        </div>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Service</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.service}</label>
                        </div>
                        <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Service Type</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.servicetype}</label>
                        </div>
                        {requestData.comment && <div className={styles.dispdata}>
                            <label className={[styles.label1,styles.alllabel].join(' ')}>Comment</label>
                            <label className={[styles.label2,styles.alllabel].join(' ')}>:</label>
                            <label className={[styles.label3,styles.alllabel].join(' ')}>{requestData.comment}</label>
                        </div>}
                        <div className={styles.dispdata} style={{justifyContent:'space-evenly',marginTop:'20px'}}>
                        <button className={styles.btnstyle} style={{background:'red'}} onClick={cancelHanldler}>Back</button>
                        <Form method='post'>
                        <button  className={styles.btnstyle} style={{background:'green'}} >Send To Service Man</button>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ViewRequest;

export async function loader({ params }) {
    const reqId = params.id;
    return getRequest(reqId);
}

export async function action({ request ,params}) {

    const validationError = await sendToService(params.id);
    if (validationError) {
        return validationError;
    }
    return redirect('/admin/newrequest');;

}