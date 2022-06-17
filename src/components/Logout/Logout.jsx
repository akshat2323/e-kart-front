import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../LoginSignup/Login";

function Logout() {

    const navigate = useNavigate();

    const signoff = async () => {

        try {

            const response = await fetch('/lgout', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });
            const data = await response.json();
            console.log(data);
            if (data.status === 200) {
                navigate('/login');
                }
        }catch (error) {
        alert.window(error);
    }
}







    useEffect(() => {
        signoff();
    }, []);




    return (<div>
        <Login/>
    </div>);
}

export default Logout;