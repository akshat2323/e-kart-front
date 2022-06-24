import { useState } from "react";
import Navbar from "../Navbar";
import "./profile.css";
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Profile() {

    const navigate = useNavigate();

    const [user,setUser] = useState('');

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
            }else{
                setUser(data);
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
        <div className="container">
            <h1>Hello User</h1>
        </div>
        <div className="container m-4 d-flex info-sec row">
            <div className="container pic col-4"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg></div>
            <div className="container info col-8">
                <h3>Hello {user.name}</h3>
                <p>Phone : {user.phone}</p>
                <p>Address : {user.address}</p>
                <p>Date Of Birth : {user.dob}</p>
                <p>E-mail : {user.email}</p>
            </div>

        </div>
        <Link to="/subs" type="button" class="btn m-4 btn-success">Pay for subscription</Link>
    </div>);
}

export default Profile;