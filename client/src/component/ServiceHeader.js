
import {  useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
function ServiceHeader(){
    const navigate = useNavigate();
      const logoutHandle = () => {
        localStorage.setItem("isServiceAuth", false)
        navigate('/service/login');
    }

    return(
        <div className={styles.mainhead}>
                <img src="/servicelogo.png" alt=""/>
                <button onClick={logoutHandle}>Logout</button>
            </div>
    )
}

export default ServiceHeader;