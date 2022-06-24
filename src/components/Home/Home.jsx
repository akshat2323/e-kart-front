import Slider from './Slider';
import Bottom from './Bottom';
import Navbar from '../Navbar';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Home() {

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
    },);


    return (<div>
        <Navbar />
        <Slider></Slider>
        <Bottom></Bottom>
    </div>);
}

export default Home;