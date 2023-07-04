import './signup.css'
import {useState} from "react";
import Span from '../span/span';

export default function SignupScreen(){
    const [inputs,setInputs] = useState({});
    function validateInput(field_name,input){
        const name_regx = /[^A-Z ]/gi
        const age_regx = /[0-9]{1,2}/
        const email_regx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ 
        const phone_number_regx = /(0|91)?[6-9][0-9]{9}$/
        switch(field_name){
            case 'name':
                name_regx.test(input['name']['value'])? input['name']["isvalid"] = false :input['name']["isvalid"] = true
                break;
            case 'age':
                age_regx.test(input['age']['value']) ? input['age']["isvalid"] = true :input['age']["isvalid"] = false
                break;
            case 'phone_number':
                phone_number_regx.test( input['phone_number']['value']) ? input['phone_number']["isvalid"] = true :input['phone_number']["isvalid"] = false
                break;
            case 'email':
                email_regx.test( input['email']['value']) ? input['email']["isvalid"] = true :input['email']["isvalid"] = false
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
    function checkIsAllValid(){
        return (
                (
                    inputs.name && 
                    inputs.age && 
                    inputs.phone_number && 
                    inputs.email 
                ) &&
                (
                    inputs.name.isvalid === true &&
                    inputs.age.isvalid === true &&
                    inputs.phone_number.isvalid === true &&
                    inputs.email.isvalid === true
                )
            )? true:false
            

    }
    return(
        <>
            <div className="background"></div>
            <div className="signup__container">
                <form className='signup_form'>
                    <div>
                    {inputs.name  && inputs.name.isvalid === false?<Span error_type='invalid' name='Name'/>:null}
                    <input 
                        placeholder='Name'
                        type="text" 
                        name="name" 
                        onChange={handleChange}
                        value={inputs.name?inputs.name.value:''}
                        />
                    </div>
                    <div>
                    {inputs.age  && inputs.age.isvalid === false?<Span error_type='invalid' name="Age"/>:null}
                    <input 
                    placeholder='Age'
                    type="number" 
                    name="age" 
                    maxLength='2'
                    value={inputs.age?inputs.age.value:''} 
                    onChange={handleChange}
                    />
                    </div>
                    <div>
                    {inputs.phone_number  && inputs.phone_number.isvalid === false?<Span error_type='invalid' name="Phone Number"/>:null}
                    <input
                    placeholder='Phone Number'
                    type = 'number'
                    name = 'phone_number'
                    value={inputs.phone_number?inputs.phone_number.value:''} 
                    onChange={handleChange}
                        />
                    </div>
                    <div>
                    {inputs.email  && inputs.email.isvalid === false?<Span error_type='invalid' name="Email"/>:null}
                    <input
                        placeholder='Email'
                        type = 'text'
                        name = 'email'
                        value={inputs.email?inputs.email.value:''} 
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input className='submit_button'
                        disabled ={(!checkIsAllValid())}
                        value="Sign Up"
                        type = 'submit'/>
                    </div>
                </form>
            </div>
        </>
    )
}