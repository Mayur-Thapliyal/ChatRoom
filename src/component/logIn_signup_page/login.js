import './login.css'
import {useState} from "react";
import Span from '../span/span';
import { memo } from 'react';

function LoginScreen(){
    const [inputs,setInputs] = useState({});
    const email_regx = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
    const phone_number_regx = /^(0|91)?[6-9][0-9]{9}$/;
    function validateInput(field_name,input){
        switch(field_name){
            case 'phone_number_or_email':
                let value = input['phone_number_or_email']['value']
                phone_number_regx.test( value) || email_regx.test(value) ? input['phone_number_or_email']["isvalid"] = true :input['phone_number_or_email']["isvalid"] = false
                break;
            default:
                break;
        }
    }
    function checkIsAllValid(){
        return (
                    inputs.phone_number_or_email && 
                    inputs.phone_number_or_email.isvalid === true
                )
    }
    function handleChange (event){
        let {name, value} = event.target;
        value.match(/^[0-9+]/)?event.target.type = 'number':event.target.type = 'text'
        setInputs(()=>{
            let return_input = {...inputs,[name]:{"value":value}}
            validateInput(name,return_input)
            return return_input
        })
    }
    function addSpanTag(){
            let field = inputs.phone_number_or_email
            if(field && field.isvalid === false){
                if (field.value.match(/^[0-9+]/)){
                    return <Span error_type='invalid' name='Phone Number'/>
                }
                else if(field.value === ''){
                    return <Span error_type="empty field" name='This'/>
                }
                else{
                    return <Span error_type='invalid' name='Email'/>
                }
            }
            else{
                return null
            }
    }
    return(
        <>
            <div className="background"></div>
            <div className="login__container">
                <form className='login_form'>
                    <div>
                        {addSpanTag()}
                        <input
                        placeholder='Phone Number/Email'
                        type = 'text'
                        name = 'phone_number_or_email'
                        value={inputs.phone_number_or_email?inputs.phone_number_or_email.value:''}
                        onChange={handleChange}
                            />
                    </div>
                    <div className='quote'>
                        Gotham City 10.0 Km
                    </div>
                    <div>
                        <input className='submit_button'
                            value={"Log In"}
                            disabled={checkIsAllValid()}
                            type = 'submit'/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default memo(LoginScreen)