import { useState } from 'react';
import './signup.css';
import { useNavigate } from "react-router-dom";



function Signup() {

    const history = useNavigate();

    const [user, setUser] = useState({
        name:"",phone:"",address:"",dob:"",email:"",password:"",cpassword:""
    })

    let name, value;
    const handleInputs = (e)=>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]: value});
    }

    const postData = async (e)=> {
        e.preventDefault();
        const{name,phone,address,dob,email,password,cpassword} = user;
        console.log(user);

        const res = await fetch("https://e-kart-back.vercel.app/signup", {
            method:'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                name,phone,address,dob,email,password,cpassword
            })
        })
        const data = await res.json();
        if(data.status === 422 || !data)
        {
            window.alert("Failed");
        }else{
            window.alert("registration done");
            history(`/login`);
        }
    }



    return (<div className="main">
        <h1>Sign Up User</h1>
        <form  method="POST">

        <div className="box2 container">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" className="form-control"
                value={user.name}  onChange={handleInputs} placeholder="Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                <input type="integer"  name="phone"className="form-control" 
                value={user.phone}  onChange={handleInputs} placeholder="Phone Number"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Address</label>
                <input type="text" name="address" className="form-control" 
                value={user.address}  onChange={handleInputs} placeholder="Address"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Date of Birth</label>
                <input type="date" name="dob" className="form-control"
                value={user.dob}  onChange={handleInputs} placeholder="Date of Birth"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control"
                value={user.email}  onChange={handleInputs} placeholder="Email address"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">New Password</label>
                <input type="password" name="password" className="form-control"
                value={user.password}  onChange={handleInputs} placeholder="New Password"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                <input type="password" name="cpassword" className="form-control"
                value={user.cpassword}  onChange={handleInputs} placeholder="Confirm Password"/>
            </div>
            <button type="button" className="m-2 btn btn-outline-primary" onClick={postData}>Submit</button>
        </div>

        </form>
        
    </div>);
}

export default Signup;