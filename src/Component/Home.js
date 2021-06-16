import React,{useState,useEffect} from 'react';
import '../App.css';
import Cookie from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"
import { Button, Col, Row } from 'react-bootstrap';
function Home() {
    const [show, setShow] = useState()
    let mydata=Cookie.get('userInfo');
    useEffect(() => {
        if(mydata==null){
        setShow(true)
        }})
    return (

        <div className="forHomeCenter1">
            <Col sm="8" xm="12" >
                <h1 className="text"> پیغام 365 میں خوش آمدید</h1>
                {show && <Link to="/login"><Button variant="primary" className="linkhome" type="submit">
                    Login
               </Button></Link>}
            </Col>
        </div>

    );
}

export default Home;
