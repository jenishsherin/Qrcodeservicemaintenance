import styles from './ErrorElement.module.css'
import { Link } from 'react-router-dom';
function ErrorElement({links,rightlink}){
   
    return(
        <div className={styles.errorContainer}>
                <h1>401</h1>
                <h2>UNAUTHENTICATED</h2>
                <h5>You are not authenticated. Before you start using this service please login. Once logged in you can access requested page</h5>
                <div>
                    <button><Link to={links} className={styles.linkStyle1}>Try Again</Link></button>
                    <button><Link to={rightlink} className={styles.linkStyle2}>Login</Link></button>
                </div>
            </div>
    )
}
export default ErrorElement;