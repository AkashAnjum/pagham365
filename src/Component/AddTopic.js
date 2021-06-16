import React, { useState,useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Cookie from 'js-cookie';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function AddTopic(props) {
    let [depart, setDepart] = useState();
    let [image, setImage] = useState();
  
    const handleSave = async (e) => {
        e.preventDefault();
        const Img = document.getElementById('banImg').files[0];
        const fd = new FormData();
        fd.append('Img', Img);
        fd.append('depart', depart);
       let data= axios.post('https://wtitsolution.com/Quran365/AdminPanel/AddData/AddTopic.php',fd
        )
        .then((response) => { console.log(response) 
            props.history.push("/viewtopic");
        })
        .catch((error) => { console.log(error) })
    
       
    }
    useEffect(() => {
        let mydata=Cookie.get('userInfo');
        if(mydata==null){
            props.history.push("/login");
        }},[])
    return (
        <div className="Adddepart3">
            <div >
                <Card style={{ width: '22rem' }, { borderWidth: 3 }, { borderColor: 'rgb(238, 91, 46)' }} >
                    <Card.Body>
                        <Form onSubmit={handleSave}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>عنوانات</Form.Label>
                                <Form.Control type="text" placeholder="عنوان درج کریں" required onChange={e => setDepart(e.target.value)} />
                                <Form.Label>تصویر</Form.Label>
                                <Form.Control type="file" id="banImg" placeholder="تصویر کا انتخاب کریں" required onChange={e => setImage(e.target.value)} />
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
export default AddTopic;




// Add Image

// function addBanner() {
//     var monValue='';
//     var tueValue='';
//     var wedValue='';
//     var thuValue='';
//     var friValue='';
//     var satValue='';
//     var sunValue='';
//     var status=document.getElementsByName('status');
//     var statusValue;
//         for(var i = 0; i < status.length; i++){
//            if(status[i].checked){
//            statusValue = status[i].value;
//            }
//     }
    
//     var banName=document.getElementById('banName').value;
//     var timee=document.getElementById('timee').value;
//     var banCat=document.getElementById('banCat').value;
    
//     if(document.getElementById('Mon').checked){
//         monValue=document.getElementById('Mon').value;
//     }
//     if(document.getElementById('Tue').checked){
//         tueValue=document.getElementById('Tue').value;
//     }
//     if(document.getElementById('Wed').checked){
//         wedValue=document.getElementById('Wed').value;
//     }
//     if(document.getElementById('Thu').checked){
//         thuValue=document.getElementById('Thu').value;
//     }
//     if(document.getElementById('Fri').checked){
//         friValue=document.getElementById('Fri').value;
//     }
//     if(document.getElementById('Sat').checked){
//         satValue=document.getElementById('Sat').value;
//     }
//     if(document.getElementById('Sun').checked){
//         sunValue=document.getElementById('Sun').value;
//     }
//     var banImg = document.getElementById('banImg').files[0];

//     var request=new XMLHttpRequest();
//     var data = new FormData();
//     data.append("statusValue",statusValue);
//     data.append("banName",banName);
//     data.append("timee",timee);
//     data.append("banCat",banCat);
//     data.append("Mon",monValue);
//     data.append("Tue",tueValue);
//     data.append("Wed",wedValue);
//     data.append("Thu",thuValue);
//     data.append("Fri",friValue);
//     data.append("Sat",satValue);
//     data.append("Sun",sunValue);
//     data.append("banImg",banImg);
//     data.append("banImgName",banImg.name);
//     request.onreadystatechange = function(){
//         if (this.readyState == 4 && this.status == 200) {
//         document.getElementById('BanRes').innerHTML="<h3 class='text-center text-success'>"+this.responseText+"</h3>";
//         }
//     }
//     request.open("POST","scripts/addBanner.php",true);
//     request.send(data);