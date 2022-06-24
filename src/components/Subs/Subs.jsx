import Navbar from "../Navbar";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




function Subs() {


    const navigate = useNavigate();

    const calling = async () => {
        console.log('calling running');
        try {
            const res = await fetch('https://e-kart-back.vercel.app/home', {
                method: "GET",
                mode: 'cors',
                headers: {
                    
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true
                },
                credentials:"include"
            });
            const data = response.json();
            console.log('fetch runned');
            console.log(data);
            if (response.status !== 200) {
                let err = new Error('Login First');
                throw err;
            }
        } catch (error) {
            console.log(error);
            navigate(`/login`);
        }
    }



    useEffect(() => {
        calling();
    },);





    return ( <div>
        <Navbar/>
        <button type="button" class="btn btn-outline-success">Success</button>
    </div> );
}

export default Subs;