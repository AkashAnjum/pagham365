import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookie from 'js-cookie';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup'; 
import { Card, Button, Table, Form } from 'react-bootstrap';
function ViewDetail(props) {
    const [mysubdata, setSubMydata] = useState([]);
    const [myTopicdata, setMyTopicdata] = useState([]);
    const [mydata, setMydata] = useState([]);
    let [id, setId] = useState(props.match.params.id);
    let [subtopic, setSUBTOPIC] = useState();
    let [subtopic1, setSUBTOPIC1] = useState();
    let [utopic, setUTopic] = useState();
    let [usubTopic, setUSubTopic] = useState();
    let [h1, setH1] = useState();
    let [h2, setH2] = useState();
    let [h3, setH3] = useState();
    const getData = async (idd) => {
        const md = new FormData();
        md.append('subTopicId', id);
        console.log(id)
        await axios.post('https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectDetail.php', md)
            .then(res => {
                setMydata(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getTopicData = async () => {
        await axios.get('https://wtitsolution.com/Quran365/AdminPanel/ViewData/Topic.php')
            .then(res => {
                setMyTopicdata(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const getSubData = async (list) => {
        const md = new FormData();
        md.append('topicid', list);
        await axios.post('https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php', md)
            .then(res => {
                setSubMydata(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            })
        console.log(mysubdata.subTopicId)
    }
    //for update
    const handleUpdate = async (ID,a,b,c,d,e,f) => {

        console.log(a)
        console.log(b)
        console.log(c)
        const Img = document.getElementById('banImg').files[0];
        let imageName = "";
        if (Img) {
            imageName = Img.name;
        }
        console.log(imageName)
        const fd = new FormData();
        fd.append('DetailId', ID);
        fd.append('topicId', utopic || a);
        fd.append('subTopicId', usubTopic || b);
        fd.append('h1', h1 || c);
        fd.append('h2', h2 || d);
        fd.append('h3', h3 || e);
        fd.append('Img', Img);
        fd.append('imageName', imageName || f);
       
        let data =await axios.post('https://wtitsolution.com/Quran365/AdminPanel/UpdateData/Detail.php', fd)
            .then((response) => {
                console.log(response)

            })
            .catch((error) => { console.log(error) })
        getData();
    }
    // delete data
    const handleDelete = async (a) => {
        console.log(a)
        const fd = new FormData();
        fd.append('id', a);
        let data =await axios.post('https://wtitsolution.com/Quran365/AdminPanel/DeleteData/Detail.php', fd)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => { console.log(error) })
        getData()
    }
    useEffect((idd) => {
        let mydata=Cookie.get('userInfo');
        if(mydata==null){
            props.history.push("/login");
        }
        getData(idd);

        if (props.match.params.name == 42) {
            setSUBTOPIC(props.match.params.name);
        }
        else if (props.match.params.name == 41 || props.match.params.name== 46)
            setSUBTOPIC1(props.match.params.name);
        getTopicData();
    }, []);
   
    return (
        <div className="ViewTopic">
            <Table striped bordered hover size="sm" variant="light">
                <thead>
                    <tr>
                        <th></th>
                        <th>فائل</th>
                        <th>تفصیل</th>
                        <th>سرخی نمبر 2</th>
                        <th>سرخی نمبر 1</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {mydata.map((result, a) => {
                        console.log(mydata[a].topicId)
                        let ID=mydata[a].detailId;
                        let A=mydata[a].topicId;
                        let b=mydata[a].subTopicId;
                        let c=mydata[a].head1;
                        let d = mydata[a].head2;
                        let detail=mydata[a].detail
                        let link = mydata[a].imageName;
                        return (
                            <tr>
                                <td><Popup trigger={<input className="edittopic" type="button" value="Edit" />} position="right top">
                                    <div >
                                        <Card style={{ width: '18rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                                            <Card.Body>
                                                <Form onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleUpdate(ID,A,b,c,d,detail,link);
                                                }}>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>عنوان</Form.Label>
                                                        <Form.Control as="select" required  onChange={e => (setUTopic(e.target.value), getSubData(e.target.value))}>
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
                                                        <Form.Control as="select" defaultValue="سب عنوان کااتخاب کریں" required onChange={e => setUSubTopic(e.target.value)}>
                                                            <option className="opt" selected='true' disabled='disabled' > سب عنوان کااتخاب کریں</option>
                                                            {mysubdata.map((result, a) => {
                                                                console.log(mysubdata[a].subTopicId)
                                                                return (
                                                                    <option className="opt" value={mysubdata[a].subTopicId} >{mysubdata[a].subTopicName}</option>
                                                                )
                                                            })}
                                                        </Form.Control>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>سب عنوان</Form.Label>
                                                        <Form.Control type="text" defaultValue={mydata[a].head1}  onChange={e => setH1(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>سب عنوان</Form.Label>
                                                        <Form.Control type="text" defaultValue={mydata[a].head2} as="textarea" aria-label="With textarea" onChange={e => setH2(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>سب عنوان</Form.Label>
                                                        <Form.Control type="text" defaultValue={mydata[a].detail} as="textarea" aria-label="With textarea"  onChange={e => setH3(e.target.value)} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>تصویر</Form.Label>
                                                        <Form.Control type="file" id="banImg" placeholder="تصویر کا انتخاب کریں"  />
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
                                            handleDelete(ID );
                                        }}>
                                            <Button className="deletetopic">Delete</Button>
                                        </form>

                                    </div>
                                </td>
                                <td class="colum">
                                    {link ?
                                        (<div>
                                            {subtopic ?
                                                (<audio controls>
                                                    <source src={"https://wtitsolution.com/Quran365/AdminPanel/images/" + link} type="audio/mpeg" />
                                                </audio>)
                                                : subtopic1 ?
                                                    (<Button><a className="pdfbutton" href={"https://wtitsolution.com/Quran365/AdminPanel/images/" + link}>Open PDF</a></Button>)
                                                    : (<img className="images" alt="No Image Found" src={"https://wtitsolution.com/Quran365/AdminPanel/images/" + link} />)}
                                        </div>)
                                        : (
                                            <h6></h6>
                                        )}
                                </td>
                                <td class="colum">{mydata[a].detail}</td>
                                <td class="colum">{mydata[a].head2}</td>
                                <td class="colum">{mydata[a].head1}</td>
                                <td>{a + 1}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default ViewDetail;
