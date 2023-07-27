import { useState } from "react";
import axios from "axios";


export default function DetailPage() {
 

     
    const [laptops, setLaptops] = useState([]);
    const [phones, setPhones] = useState([]);
    const [watches, setWatches] = useState([]);

    const handleShow = (event) => {
        event.preventDefault();
 
    const responseLaptop =  fetchLaptops();
    const responsePhones =  fetchPhones();
    const responseWatches =  fetchWatches();

    // axios.get(
    //   "http://localhost:8080/madh-app/laptops"
    // );
    // console.log(response);
   
    console.log(laptops);


  
    };

    async function fetchLaptops() {
        let result;
      
        const res = await fetch('http://localhost:8080/madh-app/laptops')
      
        result = await res.json();
        setLaptops(result);

        console.log("Fetched laps: " + laptops);
    }

    async function fetchPhones() {
        let result;
      
        const res = await fetch('http://localhost:8080/madh-app/phones')
      
        result = await res.json();
        setPhones(result);

        console.log("Fetched phones: " + phones);
    }

    async function fetchWatches() {
        let result;
      
        const res = await fetch('http://localhost:8080/madh-app/watches')
      
        result = await res.json();
        setWatches(result);

        console.log("Fetched watches: " + watches);
    }
 
 
 
    return(

        
    <div> 
        
        <h1 style={{ color: 'orange' }}>Details</h1>
        
        <button onClick={handleShow}> Show Details </button>
       <div>
        <div>
        <label style={{ color: 'green' }}>Laptops</label>
        <div>
            {laptops.map((item) =>  
           <li key={item}>
            {item}
            </li>
        )} 
        </div>

        </div><br/>
       <div>
       <label style={{ color: 'green' }}>Phones</label>
       <div>  
        {phones.map((item) =>  
           <li key={item}>
            {item}
            </li>
        )}
        </div> 
       </div><br/>
      <div>  <label style={{ color: 'green' }}>Watches</label><div>
      {watches.map((item) =>  
           <li key={item}>
            {item}
            </li>
        )}
        </div> </div><br/>
       </div>



    </div>);
}