import React, { useState,useEffect } from 'react';
import '../App.css';
import Cookie from 'js-cookie';
import { Form, Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
function AddDetail(props) {
    const [topId,setTopId]=useState();
     const [subTopId,setSubTopId]=useState();
    let [detail, setDetail] = useState("");
    let [depart1, setDepart1] = useState();
    let [depart2, setDepart2] = useState();
    const [mydata, setMydata] = useState([]);
    let [image, setImage] = useState();
    let [head1,setHead1]=useState("");
    let [head2,setHead2]=useState("");
    const [mysubdata, setSubMydata] = useState([]);
    console.log(detail)
    console.log(head1)
    console.log(head2)
    console.log(depart1)
    console.log(depart2)
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
    const getSubData = async (list) => {
        const md = new FormData();
        md.append('topicid', list);
      await axios.post('https://wtitsolution.com/Quran365/AdminPanel/ViewData/SelectSubTopic.php',md)
            .then(res => {
                setSubMydata(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error); 
            })
        console.log(mysubdata.subTopicId)
    }
    const handleSave = async (e) => {
        console.log(depart1)
        e.preventDefault();
        const Img = document.getElementById('banImg').files[0];
        const fd = new FormData();
        fd.append('depart1', depart1);
        fd.append('depart2', depart2);
        fd.append('head1', head1);
        fd.append('head2', head2);
        fd.append('detail', detail);
        fd.append('Img', Img);
        let data = axios.post('https://wtitsolution.com/Quran365/AdminPanel/AddData/Detail.php', fd
        )
            .then((response) => {
                console.log(response)
                props.history.push(`/viewdetail/${depart2}/${depart1}`);
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
                <Card style={{ width: '28rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                    <Card.Body>
                        <Form onSubmit={handleSave}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>عنوان</Form.Label>

                                <Form.Control as="select" defaultValue="عنوان کااتخاب کریں" required onLoad={e => setDepart1(e.target.value)} onChange={e => (setDepart1(e.target.value), getSubData(e.target.value))}>
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
                                <Form.Control as="select" defaultValue="سب عنوان کااتخاب کریں" required onLoad={e => setDepart2(e.target.value)} onChange={e => setDepart2(e.target.value)}>
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
                                <Form.Label>سرخی نمبر 1</Form.Label>
                                <Form.Control type="text" placeholder="درج کریں"  onChange={e => setHead1(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>سرخی نمبر 2</Form.Label>
                                <Form.Control type="text" placeholder="درج کریں"  onChange={e => setHead2(e.target.value)} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>تفصیل </Form.Label>
                                <Form.Control type="text" placeholder="درج کریں" as="textarea" aria-label="With textarea"  onChange={e => setDetail(e.target.value)} />
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
            </div></div>
    );
}
export default AddDetail;