import { useState } from "react";
import axios from "axios";


export default function DashBoard() {

    const [lapMsg, setLapMsg] = useState("");
    const [lapMsgList, setLapMsgList] = useState([]);
    const handleLapChange = (event) => setLapMsg(event.target.value);

    const [phoneMsg, setPhoneMsg] = useState("");
    const [phoneMsgList, setPhoneMsgList] = useState([]);
    const handlePhoneChange = (event) => setPhoneMsg(event.target.value);

    const [watchMsg, setWatchMsg] = useState("");
    const [watchMsgList, setWatchMsgList] = useState([]);
    const handleWatchChange = (event) => setWatchMsg(event.target.value);

    const handleLapPost = (event) => {
        event.preventDefault();
        console.log(lapMsg);

        console.log(lapMsg);
        console.log(lapMsg);
        const postData = {lapMsg}

        // axios.post(`http://localhost:8080/madh-app/post`, {})
        // .then(response => {
        //     console.log(response);
        // }) 



  
    };
    const handleLapClick = (event) => {
        event.preventDefault();
        console.log(lapMsg);
        let tempList = lapMsgList;
        tempList.push(lapMsg);
        setLapMsgList(tempList);
        console.log(lapMsgList);

        axios.post(`http://localhost:8080/madh-app/laptops`, null, { params: {
            name: lapMsg
          }})
          .then(response => response.status)
          .catch(err => console.warn(err));
    };

    const handlePhoneClick = (event) => {
        event.preventDefault();
        console.log(phoneMsg);
        let tempList = phoneMsgList;
        tempList.push(phoneMsg);
        setPhoneMsgList(tempList);
        console.log(phoneMsgList);

        axios.post(`http://localhost:8080/madh-app/phones`, null, { params: {
            name: phoneMsg
          }})
          .then(response => response.status)
          .catch(err => console.warn(err));
    };

    const handleWatchClick = (event) => {
        event.preventDefault();
        console.log(watchMsg);
        let tempList = watchMsgList;
        tempList.push(watchMsg);
        setWatchMsgList(tempList);
        console.log(watchMsgList);

        axios.post(`http://localhost:8080/madh-app/watches`, null, { params: {
            name: watchMsg
          }})
          .then(response => response.status)
          .catch(err => console.warn(err));
    };


    
     // console.log(toDo);
    return(
    <div> 
        <h1 style={{ color: 'brown' }}>Gadget Store</h1>
        <h1 style={{ color: 'orange' }}>Accessories</h1>
        <div> 
        <label style={{ color: 'blue' }}>Laptop</label>
        <input value = {lapMsg} type="text" onChange={handleLapChange}></input>
        <button onClick={handleLapClick}> Send </button>
        
        {lapMsgList.map((item) => {
            <h3 key= {item}>{item}</h3>
        })}
        </div> 
        <div> 
        <label style={{ color: 'blue' }}>Phone</label>
        <input value = {phoneMsg} type="text" onChange={handlePhoneChange}></input>
        <button onClick={handlePhoneClick}> Send </button>

        {phoneMsgList.map((item) => {
            <h3 key= {item}>{item}</h3>
        })}
        </div> 
        <div> 
        <label style={{ color: 'blue' }}>Watch</label>
        <input value = {watchMsg} type="text" onChange={handleWatchChange}></input>
        <button onClick={handleWatchClick}> Send </button>

        {watchMsgList.map((item) => {
            <h3 key= {item}>{item}</h3>
        })} 
         </div> 
    </div>);
}