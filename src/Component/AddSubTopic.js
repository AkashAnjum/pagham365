import React, { useState, useEffect } from 'react';
import '../App.css';
import Cookie from 'js-cookie';
import { Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function AddSubTopic(props) {
    let [depart, setDepart] = useState();
    let [depart1, setDepart1] = useState();
    const [mydata, setMydata] = useState([]);
    const getData = async () => {
        await axios.get('https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php')
            .then(res => {
                setMydata(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        console.log(mydata.topicId)
    }
    const handleSave = async (e) => {
        console.log(depart1)
        e.preventDefault();
        const fd = new FormData();
        fd.append('depart', depart);
        fd.append('depart1', depart1);
        let data = axios.post('https://wtitsolution.com/Quran365/AdminPanel/AddData/SubTopic.php', fd
        )
            .then((response) => {
                console.log(response)
                props.history.push(`/viewsubtopic/${depart1}`);
            })
            .catch((error) => { console.log(error) })
    }
  
    useEffect(() => {
        let mydata=Cookie.get('userInfo');
        if(mydata==null){
            props.history.push("/login");

        }
        getData();
    },[])
       
    
    return (
        <div className="Adddepart3">
            <div >
                <Card style={{ width: '22rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                    <Card.Body>
                        <Form onSubmit={handleSave}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>عنوان</Form.Label>

                                <Form.Control as="select" defaultValue="عنوان کااتخاب کریں" required onLoad={e => setDepart1(e.target.value)} onChange={e => setDepart1(e.target.value)}>
                                    <option className="opt" selected='true' disabled='disabled' >عنوان کااتخاب کریں</option>
                                    {mydata.map((result, a) => {
                                        console.log(mydata[a].topicId)

                                        return (
                                            <option className="opt" value={mydata[a].topicId} >{mydata[a].topicName}</option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>سب عنوان</Form.Label>
                                <Form.Control type="text" placeholder="سب عنوان درج کریں" required onChange={e => setDepart(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                           </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div></div>
    );
}
export default AddSubTopic;