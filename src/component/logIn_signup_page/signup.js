import './signup.css'
import {useState} from "react";

export default function SignupScreen(){
    const [inputs,setInputs] = useState({});
    function validateInput(field_name,input){
        const name_regx = /[^A-Z ]/gi
        const age_regx = /[0-9]{2}/gi
        const email_regx = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@↵(?:[A-Z0-9-]+input['phone_number']['value']\.)+[A-Z]{2,6}$/gi
        const phone_number_regx = /(0|91)?[6-9][0-9]{9}$/
        let match_result =''
        switch(field_name){
            case 'name':
                input['name']['value'].match(name_regx) ? input['name']["isvalid"] = false :input['name']["isvalid"] = true
                break;
            case 'age':
                match_result=input['age']['value'].match(age_regx)
                match_result && match_result[0]===input['age']['value'] ? input['age']["isvalid"] = true :input['age']["isvalid"] = false
                break;
            case 'phone_number':
                match_result =(input['phone_number']['value'].match(phone_number_regx))
                match_result && match_result[0]===input['phone_number']['value'] ? input['phone_number']["isvalid"] = true :input['phone_number']["isvalid"] = false
                break;
            case 'email':
                input['email']['value'].match(email_regx) ? input['email']["isvalid"] = false :input['email']["isvalid"] = true
                break;
            default:
                break;
        }
        

    }
    function handleChange (event){
        let {name, value} = event.target;
        setInputs(()=>{
            let return_input = {...inputs,[name]:{"value":value}}
            validateInput(name,return_input)
            return return_input
        })
    }
    return(
        <>
            <div className="background"></div>
            <div className="signup__container">
                <form className='signup_form'>
                    {console.log(inputs)}
                    <input 
                        placeholder='Name'
                        type="text" 
                        name="name" 
                        onChange={handleChange}
                        value={inputs.name?inputs.name.value:''}
                        />
                    <input 
                    placeholder='Age'
                    type="number" 
                    name="age" 
                    maxLength='2'
                    value={inputs.age?inputs.age.value:''} 
                    onChange={handleChange}
                    />
                    <input
                    placeholder='Phone Number'
                    type = 'number'
                    name = 'phone_number'
                    value={inputs.phone_number?inputs.phone_number.value:''} 
                    onChange={handleChange}
                        />
                    <input
                        placeholder='Email'
                        type = 'text'
                        name = 'email'
                        value={inputs.email?inputs.email.value:''} 
                        onChange={handleChange}
                        />
                    <input className='submit_button'
                        type = 'submit'/>
                </form>
            </div>
        </>
    )
}