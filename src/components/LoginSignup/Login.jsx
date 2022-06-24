import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "", password: ""
    })

    let name, value;
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        const res = await fetch("https://e-kart-back.vercel.app/login", {
            method: 'POST',
            mode: 'cors',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        if (data.status !== 201 || !data) {
            console.log('hiii');
            if (!data.msg) {
                window.alert(data.error);
                console.log(data.error);
            } else {
                // window.alert(data.msg);
                navigate(`/`);
            }

        } else {
            // window.alert("Login done");

        }
    }




    return (<div className='main'>
        <h1>Log In User</h1>
        <form method="post">
            <div className="box container">
                <div class="mb-3 row">

                    <div class="col-sm-10">
                        <input type="text" name='email' onChange={handleInputs} placeholder='Enter E-mail' value={user.email} readonly class="mail form-control-plaintext" />
                    </div>
                </div>
                <div class="mb-3 row">

                    <div class="col-sm-10">
                        <input type="password" onChange={handleInputs} value={user.password} name='password' class="password form-control" placeholder='Enter Password' />
                    </div>
                </div>
                <button type="button" onClick={postData} className="m-2 btn btn-primary">LogIn</button>
                <Link type="button" to='/signup' className="m-2 btn btn-success">SignUp</Link>
            </div>

        </form>

    </div>);
}

export default Login;