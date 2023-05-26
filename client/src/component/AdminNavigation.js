import { Link} from 'react-router-dom';
import styles from './Navigation.module.css'
function AdminNavigation() {
    return (
        <div className={styles.sidenavDiv}>
            <ul>
                <li>
                    <Link to='/admin/allrequest' className={styles.linkStyle}>All Request</Link>
                </li>
                <li>
                    <Link to='/admin/newrequest' className={styles.linkStyle}>New Request</Link>
                </li>
                <li>
                    <Link to='/admin/pendingservice' className={styles.linkStyle}>Pending Request</Link>
                </li>
                <li>
                    <Link to='/admin/completedservice' className={styles.linkStyle}>Completed Request</Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminNavigation;