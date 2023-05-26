import { useLoaderData } from 'react-router-dom';
import { getCompletedRequest } from '../util/api';
import styles from './Request.module.css';
import AdminNavigation from '../component/AdminNavigation';
import AdminHeader from '../component/AdminHeader';
import ErrorElement from '../component/ErrorElement';
import Table from '../component/Table';

function CompletedRequest() {

    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    const loaderData = useLoaderData();
    if (!isAuth) {
        return (
            <ErrorElement links='/admin/completedservice' rightlink='/admin/login'/>
        )
    }
    return (
        <div className={styles.employee}>
            <AdminHeader />
            <div style={{ display: 'flex' }}>
                <AdminNavigation />
                <div className={styles.adminDashbord}>
                    <h1>Completed Services</h1>
                    <div className={styles.center}>
                        <Table data={loaderData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompletedRequest;

export async function loader() {
    return getCompletedRequest();

}