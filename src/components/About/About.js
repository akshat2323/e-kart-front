import Navbar from "../Navbar";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




function About() {

    const navigate = useNavigate();

    const calling = async () => {
        console.log('calling running');
        try {

            const res = await fetch('/home', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials:"include"
            });
            console.log('fetch runned');
            const data = await res.json();
            if (!data) {
                // navigate(`/login`);
                let err = new Error('Login First');
                throw err;
            }
        } catch (err) {
            console.log('catch runned');
            console.log(err);

            navigate(`/login`);
        }
    }



    useEffect(() => {
        calling();
    },[]);


    return ( <div>
        <Navbar/>
        hello I'am About page
    </div> );
}

export default About;