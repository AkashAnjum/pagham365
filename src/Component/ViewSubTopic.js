import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios' 
import Cookie from 'js-cookie';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Card, Button, Table, Form } from 'react-bootstrap';
function ViewSubTopic(props) {
  
    const [mydata, setMydata] = useState([]);
    let [depart, setDepart] = useState();
    let [UpdateTopic, setUpdateTopic] = useState();
    const [myTopicdata, setMyTopicdata] = useState([]);
    const [id, setId] = useState(props.match.params.id);
    const [topic, setTOPIC] = useState(props.match.params.id);
    const idd=props.match.params.id;
    const getData = async (idd) => {
        
          const md = new FormData();
          md.append('topicid', id);
        await axios.post('https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php',md)
            .then(res => {
                setMydata(res.data)
            })
            .catch(error => {
                console.log(error);
            })     
    }
    
     const getTopicData = async () => {
        await axios.get('https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php')
            .then(res => {
                setMyTopicdata(res.data)
            })
            .catch(error => {
                console.log(error);
            })   
    }
    //for update
    const handleUpdate = async (a, b, c) => {
        console.log(UpdateTopic)
        console.log(a)
        console.log(b)
        console.log(c)
        const fd = new FormData();

        fd.append('Id', a);
        fd.append('depart', UpdateTopic || b);
        fd.append('Name', depart || c);
        let data =await axios.post('https://wtitsolution.com/Quran365/AdminPanel/UpdateData/SubTopic.php', fd)
            .then((response) => {
                console.log(response)
           
              
            })
            .catch((error) => { console.log(error) })
            // props.history.push(`/viewsubtopic/${b}`)
            getData()
    }
    // delete data
    const handleDelete = async (a) => {
        console.log(a)
        const fd = new FormData();
        fd.append('id', a);
        let data =await axios.post('https://wtitsolution.com/Quran365/AdminPanel/DeleteData/SubTopic.php', fd)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => { console.log(error) })
            // props.history.push(`/viewsubtopic/${b}`)
            getData()
    }
    useEffect((idd) => {
        let mydata=Cookie.get('userInfo');
        if(mydata==null){
            props.history.push("/login");
        }
        getData(idd);
        getTopicData();
    }, []);
    return (
        <div className="ViewTopic">
            <Table striped bordered hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th></th>
                        
                        <th>نام</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((result, a) => {
                        let nam = mydata[a].subTopicName;
                        let Id = mydata[a].subTopicId;
                        let topicId = mydata[a].topicId;
                        return (
                            <tr>
                                <td><Popup trigger={<input className="edittopic" type="button"  value="Edit" />} position="right top">
                                    <div>
                                        <Card style={{ width: '18rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                                            <Card.Body>
                                                <Form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleUpdate(Id,topicId,nam);
                                                }}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>عنوان</Form.Label>
                                                        <Form.Control as="select" required onChange={e => setUpdateTopic(e.target.value)}>
                                                            <option className="opt" selected='true' disabled='disabled' >عنوان کااتخاب کریں</option>
                                                            {myTopicdata.map((result, a) => {
                                                                return (
                                                                    <option className="opt" value={myTopicdata[a].topicId} >{myTopicdata[a].topicName}</option>
                                                                )
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>سب عنوان</Form.Label>
                                                        <Form.Control type="text" placeholder="سب عنوان درج کریں" required defaultValue={mydata[a].subTopicName} onChange={e => setDepart(e.target.value)} />
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit" >
                                                        Submit
                                                    </Button>
                                                </Form>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Popup>
                                    <div>
                                        <form onClick={(e) => {
                                            e.preventDefault();
                                            handleDelete(Id);
                                        }}>
                                            <Button className="deletetopic">Delete</Button>
                                        </form>

                                    </div>
                                </td>
                               
                                <Link  className="newpagelink"   to={`/viewdetail/${mydata[a].subTopicId}/${topic}`}><td class="colum">{mydata[a].subTopicName}</td></Link>
                                <td>{a + 1}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewSubTopic;
