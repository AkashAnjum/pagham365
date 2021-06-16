import React,{ useState,getState } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
export default function Login(props) {
    const [error,setError]=useState(false);
    const [error1,setError1]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    function login(e) {
        e.preventDefault();
        console.log(email)
        console.log(password)
        const fd = new FormData();
        fd.append('email', email);
        fd.append('password', password);
       let data= axios.post('https://wtitsolution.com/Quran365/AdminPanel/ViewData/Login.php',fd
        )
      
        .then((response) => { 
            console.log(response.data) 
            if(response.data=='Login successfully'){
                Cookie.set('userInfo', (response.data));
                window.location.href = "https://quirky-goldwasser-be4cf9.netlify.app/"
            }
            else{
             alert(response.data)
            }
           
           
        })
        .catch((error) => { console.log(error) })
        console.log(data)
    }

   

    return (
        <div className="Adddepart3login" >
            <div>
            <Card style={{ width: '18rem' },{borderWidth:3},{borderColor:'rgb(238, 91, 46)'}}  >
                <Card.Body>
                    <Form onSubmit={(e) => login(e)} >
                    <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail"> 
                         
                            </Form.Group>
                            </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Admin Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Admin Name" required onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
                            </Form.Row>
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" required onChange={e => setPassword(e.target.value)}/>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}