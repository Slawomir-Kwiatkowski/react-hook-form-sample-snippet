import {useForm} from "react-hook-form";
import Home from "../../Home/Home";

function LoginForm({token, putToken}) {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        sessionStorage.setItem('username', data.username)
        fetch('/api/user/login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json()).then(data => putToken(data))
    }

    if (token) return <Home />
    
    return (
        <div className="columns">
            <div className="column is-narrow-desktop is-offset-5">
                <div className="card is-3 mt-5">
                    <div className="card-content">
                        <p className="subtitle">
                            User Login
                        </p>
                        <div className="content">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="field control">
                                    <input placeholder="Username" name="username" 
                                        {...register("username", {required: true, minLength: 3})} />
                                    <p className="help is-danger">
                                        {errors.username?.type === 'required' && "This field is required"}
                                        {errors.username?.type === 'minLength' && "This field must contain at least 3 characters"}
                                    </p>
                                </div>
                                <div className="field control">
                                    <input type="password" placeholder="Password" id="password" name="password"
                                        autoComplete="new-password"
                                        {...register("password",  {required: true, minLength: 6})} />
                                    <p className="help is-danger">
                                        {errors.password?.type === 'required' && "This field is required"}
                                        {errors.password?.type === 'minLength' && "This field must contain at least 6 characters"}
                                    </p>
                                </div>
                                <div className="control">
                                    <input type="submit" value="LogIn" className="button is-link" />    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

    )
}

export default LoginForm

 