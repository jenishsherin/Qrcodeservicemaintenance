import { useEffect, useState } from "react";
import styles from './CustomerRegistration.module.css';
import { Form,  useActionData } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userregistartion } from "../util/api";

function CustomerRegistration() {
    const [service, setService] = useState();
    const [mobileno,setMobileno]=useState('');
    let data = useActionData();
    useEffect(() => {
        const query = new URLSearchParams(window.location.search)
        setService(query.get('service'))

        if (data && data.isError) {
            console.log(data)
            toast.error(data.message);
        }
    }, [data])

    function handleChange(e){
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setMobileno(e.target.value)
        }
     }

    return (
        <>
            <ToastContainer />
            <div className={styles.container} style={{ backgroundImage: "url(/registration1.avif)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div className={styles.content}>
                    <h1>User Registration</h1>
                    <Form className={styles.formStyle}  method="post">
                        <div className={styles.formDiv}>
                            <label>Name</label>
                            <input type='text' name='name'  />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Mobile Number</label>
                            <input type='text' name='mobile' value={mobileno} onChange={handleChange}    />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Address</label>
                            <input type='text' name='address'  />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Location</label>
                            <input type='text' name='location'  />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Selected Service</label>
                            <input type='text' name='service' readOnly value={service} />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Service Type</label>
                            <input type='text' name='servicetype'  />
                        </div>
                        <div className={styles.formDiv}>
                            <label>Comment</label>
                            <input type='text' name='comment'  />
                        </div>
                        <button>Submit</button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default CustomerRegistration;

export async function action({ request }) {

    const data = await request.formData();

    const validationError = await userregistartion(data);
    if (validationError) {
        return validationError;
    }
    return null;

}