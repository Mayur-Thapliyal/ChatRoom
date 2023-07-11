import './login.css'
import {useState} from "react";

export default function LoginScreen(){
    const [inputs,setInputs] = useState({});
    function handleChange (event){
        let {name, value} = event.target;
        setInputs({...inputs,[name]:value})
    }
    return(
        <>
            <div class="background"></div>
            <div className="login__container">
                <form className='login_form'>
                    <input
                    placeholder='Phone Number/Email'
                    type = 'text'
                    name = 'phone_number_or_email'
                    value={inputs.phone_number_or_email ||""}
                    onChange={handleChange}
                        />
                    Gotham City 10.0 Km
                    <input className='submit_button'
                        type = 'submit'/>
                </form>
            </div>
        </>
    )
}