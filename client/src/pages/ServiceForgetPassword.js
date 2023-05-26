
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Login.module.css';
import { servicechangepassword } from '../util/api';
import {
    Form,
    redirect,
    useActionData,
} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceForgetPassword = () => {

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
            <div className={styles.container} style={{ backgroundImage: "url(/servicelog2.avif)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className={styles.content}>
                    <div className={styles.login}>
                        <h1>Forget Password</h1>
                        <Form className={styles.loginform} method='post'>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="text" name="email" id="email" required />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" name="password" id="password" required />
                            </div>
                            <Link to='/service/login' className={styles.linkStyle}>LogIn Instead</Link>
                            <button>Submit</button>
                        </Form>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServiceForgetPassword;

export async function action({ request }) {

    const data = await request.formData();
    const loginError = await servicechangepassword(data);
    if (loginError) {
        return loginError;
    }
    return redirect('/service/login');

}