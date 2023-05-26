import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import styles from './QrcodeScanner.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {

    useNavigate,

} from 'react-router-dom';
function QrcodeScanner() {
    const [scanEnabled, setScanEnabled] = useState(false);
    const navigate = useNavigate();

    function handleScan(data) {
        console.log(data)
        if (data) {
            if (data.text) {
                console.log(data.text)
                toast.error('Successfully Scanned', {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                
                navigate(data.text);
            }
        }

    }
    function handleError(err) {

        toast.error('Error while scanning, Start scanning again', {
            position: toast.POSITION.BOTTOM_CENTER
        });
        setScanEnabled(false);
    }

    const startScan = () => {

        setScanEnabled(true);

    };

    const qrstyle = {
        width: 500,
        height: 400,
        border: 2,
        borderColor: '#1c1c1c',
        borderStyle: 'solid',
        background: '#e3e3e3',
        paddingLeft: 12,
        paddingRight: 12,
    }

    return (
        <div className={styles.qrcontainer} style={{ backgroundImage: "url(/firstbg.avif)",backgroundRepeat: 'no-repeat',backgroundSize:'cover' }}>
            <h1 className={styles.mainHead}>Welcome to</h1>
            <h2 className={styles.mainHead1}>QR-Based Service Request and Maintenance</h2>
            <ToastContainer />
            {scanEnabled ? (
                <QrReader
                    delay={300}
                    style={qrstyle}
                    onError={handleError}
                    onScan={handleScan}
                />
            ) : (
                <button className={styles.buttonStyle} onClick={startScan}>Start Scan</button>
                
            )}
        </div>
    )
}


export default QrcodeScanner;
