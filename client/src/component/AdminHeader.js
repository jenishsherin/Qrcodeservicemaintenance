import {  useNavigate } from 'react-router-dom';
import styles from './Header.module.css'
function AdminHeader(){
    const navigate = useNavigate();
      const logoutHandle = () => {
        localStorage.setItem("isAuth", false)
        navigate('/admin/login');
    }

    return(
        <div className={styles.mainhead}>
                <img src="/servicelogo.png" alt=""/>
                <button onClick={logoutHandle}>Logout</button>
            </div>
    )
}

export default AdminHeader;