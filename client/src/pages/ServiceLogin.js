import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Login.module.css';
import { servicelogIn } from '../util/api';
import {
    Form,
    redirect,
    useActionData,
} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceLogin = () => {

    let data = useActionData();

    useEffect(() => {

        if (data && data.isError) {
            toast.error(data.message, {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }, [data])

    return (
        <>
            <ToastContainer />
            <div className={styles.container} style={{ backgroundImage: "url(/servicelogin.avif)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className={styles.content}>
                    <div className={styles.login}>
                        <h1>Login</h1>
                        <Form className={styles.loginform} method='post'>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" id="password" required />
                            </div>
                            <Link to='/service/forgetpassword' className={styles.linkStyle}>Forget Password</Link>
                            <button>Login</button>
                        </Form>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceLogin;

export async function action({ request }) {

    const data = await request.formData();
    
    const loginError = await servicelogIn(data);
    if (loginError) {
        return loginError;
    }
    return redirect('/service/dashboard');

}