import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios' 
import Cookie from 'js-cookie';
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom';
import { Card, Button, Table,Form } from 'react-bootstrap';
function ViewTopic(props) {
    const [mydata, setMydata] = useState([]);
    let [depart, setDepart] = useState();
 
    let [image, setImage] = useState();
    const getData = async () => {
        await axios.get('https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php')
            .then(res => {
                setMydata(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        
    }
   
    //for update
    const handleUpdate = async (a,b,c) => {
        console.log(a)
        console.log(b)
        console.log(c)
       
        const Img = document.getElementById('banImg').files[0];
        let imageName="";
        if(Img){
            imageName=Img.name;
        }
        console.log(imageName)
        const fd = new FormData();
        fd.append('Img', Img);
        fd.append('imageName', imageName || b);
        fd.append('depart', depart || c);
        fd.append('id', a);
       let data=await axios.post('https://wtitsolution.com/Quran365/AdminPanel/UpdateData/Topic.php',fd)
        .then((response) => { console.log(response) 
          
        })
        .catch((error) => { console.log(error) })
        getData();
    }
// delete data
    const handleDelete = async (a) => {
        console.log(a)
        const fd = new FormData();
        fd.append('id', a);
        let data=await axios.post('https://wtitsolution.com/Quran365/AdminPanel/DeleteData/Topic.php',fd)
        .then((response) => { console.log(response) 
        
        })
        .catch((error) => { console.log(error) })
        getData()
       
    }
    useEffect(() => {
       
        let mydata=Cookie.get('userInfo');
        if(mydata==null){
            props.history.push("/login");
        }
        getData();
    }, []);
   
    return (
        <div className="ViewTopic">
            <Table striped bordered hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th></th>
                        <th>تصویر</th>
                        <th>نام</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((result, a) => {
                        console.log(mydata[a].topicId)
                        let link = mydata[a].topicImg;
                        let nam=mydata[a].topicName;
                        let ID=mydata[a].topicId;
                        return (
                            <tr>
                                <td><Popup trigger={<input className="edittopic" type="button" value="Edit" />} position="right top">
                                    <div >
                                        <Card style={{ width: '18rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                                            <Card.Body>
                                                <Form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleUpdate(ID,link,nam,getData());
                                                }}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>عنوانات</Form.Label>
                                                        <Form.Control type="text" defaultValue={mydata[a].topicName}   placeholder="عنوان درج کریں" required onChange={e => setDepart(e.target.value)} />
                                                        <Form.Label>تصویر</Form.Label>
                                                        <Form.Control type="file" id="banImg"  placeholder="تصویر کا انتخاب کریں"  onChange={e => setImage(e.target.value)} />
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
                                                handleDelete(ID,getData());
                                            }}>
                                                <Button className="deletetopic">Delete</Button>
                                            </form>
                                        
                                        </div>
                                </td>
                                <td><img className="images" src={"https://wtitsolution.com/Quran365/AdminPanel/images/" + link} /></td>
                                <Link className="newpagelink" to={`/viewsubtopic/${mydata[a].topicId}`}><td class="colum">{mydata[a].topicName}</td></Link>
                                <td>{a+1}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            {/* {mydata.map((result,a) => {
                    console.log(mydata[a].topicId)
                    let link=mydata[a].topicImg
                    return (
                        <Card className="topiccard" style={{ width: '40rem' }}>
                            <Card.Header as="h5">
                           
                            <img className="images" src={"https://wtitsolution.com/Quran365/AdminPanel/images/"+link}/>
                                <Card.Title>{mydata[a].topicName}</Card.Title>
                         
                                <Button className="edittopic" variant="primary">Go somewhere</Button>
                                <Button className="deletetopic" variant="primary">Go somewhere</Button>
                            </Card.Header>

                        </Card>
                    )
                })} */}

        </div>
    );
}

export default ViewTopic;
