import { Link, useLoaderData } from 'react-router-dom';
import { getNewServiceRequest } from '../util/api';
import styles from './Request.module.css';
import ServiceHeader from '../component/ServiceHeader';
import ErrorElement from '../component/ErrorElement';

function NewRequest() {

    const isAuth = JSON.parse(localStorage.getItem('isServiceAuth'));
    const loaderData = useLoaderData();

    if (!isAuth) {
        return (
            <ErrorElement links='/service/dashboard' rightlink='/service/login' />
        )
    }
    return (
        <div className={styles.employee}>
            <ServiceHeader />
            <h1>New Service Request</h1>
            <div className={styles.center}>
                <table >
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Location</th>
                            <th>Service</th>
                            <th>Service Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {loaderData.length==0 && <tr><td colSpan={7} style={{textAlign:'center'}}>No request to view</td></tr>}
                        {loaderData.map((item) => <tr key={item.id}>

                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.address}</td>
                            <td>{item.location}</td>
                            <td>{item.service}</td>
                            <td>{item.servicetype}</td>
                            <td><Link to={`/service/viewrequest/${item.id}`}>View</Link></td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default NewRequest;

export async function loader() {
    return getNewServiceRequest();

}