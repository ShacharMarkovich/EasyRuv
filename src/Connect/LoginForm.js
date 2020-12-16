import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { managerContext } from '../App';

function LoginForm() {
    const history = useHistory()
    const manager_context = React.useContext(managerContext)
    const [loginMsg, setLoginMsg] = useState("")

    const { register, errors, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = data => {
        if (data["password"] === "1234" && data.email==="s@s")
        {
            manager_context.setIsLogin(true)
            history.push("/my-cities")
        }
        else
            alert("Error! invaild email or password")

    };

    return (
        <div class="content-section" >
            <h3 class="article-metadata"> Login</h3>
            <form onSubmit={e => e.preventDefault()}><br></br>
                <label>Email</label>
                <input class="list-group-item" type="email" placeholder="email" name="email" ref={register({
                    required: "You must specify an Email",
                    maxLength: { value: 50, message: "Email must have no morw then 50 characters" },
                    pattern: { value: /^\S+@\S+$/i, message: "Email must contain '@'" }
                })} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                <br></br>

                <label>Password</label>
                <input class="list-group-item" type="password" placeholder="password" name="password" ref={register({
                    required: "You must specify a password",
                    minLength: { value: 4, message: "Password must have at least 4 characters" },
                    maxLength: { value: 20, message: "Password must have no morw then 20 characters" }
                })} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                <br></br>

                <input type="checkbox" name="rememberMe" ref={register} />
                <label>Remember Me</label>
                <br></br>

                {loginMsg !== "" && <p style={{ color: 'red' }}>{loginMsg}</p>}
                <input class="btn" type="submit" onClick={handleSubmit(onSubmit)} value="Sign In" />
            </form>
        </div>
    );
}

export default LoginForm