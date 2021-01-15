import React from 'react'
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () =>{
    const {loading, error, request}= useHttp()
    const[form, setForm] = useState({
        email: '', password: ''
    })

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try{
            const data = await request(('/api/auth/register', 'POST', {...form}))
            console.log('Data', data)
        }
        catch (e) {}
    }

    return (
        <div className='row'>
            <div className='card darken-1' style={{width:300, paddingLeft:20, paddingRight:20, paddingTop: 5, textAlign: "right"}}>

                <div className="input-field">
                    <input id="email" type="text" name='email' onChange={changeHandler}/>
                        <label htmlFor='email'>E-Mail</label>
                </div>

                <div className="input-field">
                    <input id="email" type="password" name='password' onChange={changeHandler}/>
                        <label htmlFor='password'>Password</label>
                </div>

                <div>
                    <button className='btn light-blue darken-4' style={{margin:10, marginTop:5}} disabled={loading}>Sign in</button>

                </div>

                <div>
                    <button className='btn light-blue darken-4' style={{margin:10, marginTop:5}} onClick={registerHandler} disabled={loading}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}