import styles from './Services.module.css';
import {
    redirect,
    Form
} from 'react-router-dom';
function Services() {
    return (
        <div className={styles.servicecontainer} style={{ backgroundImage: "url(/registrationbg.jpg)",backgroundRepeat: 'no-repeat',backgroundSize:'cover' }} >
            <div className={styles.content}>
            <h1 className={styles.mainHead}>Welcome to Our Website</h1>
            <Form className={styles.selectform} action='/registration' method='get'>
                <select className={styles.selectService} name="service">
                    <option>AC Service</option>
                    <option>Computer Service</option>
                    <option>Mobile Service</option>
                </select>
                <button className={styles.buttonStyle}>Ok</button>
            </Form>
            </div>
        </div >
    )
}

export default Services;

export async function action({ request }) {
    const data = await request.formData();
    console.log(data)
    return redirect('/registration',{data});

}