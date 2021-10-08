import { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError("Passwords do not match.");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account.");
        }
        setLoading(false);
    };

    return (
        <>
            <div className="sign-up">
                <h2 className="text-center ">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <div className='content-input'>
                        <input className='input-main' type="email" ref={emailRef} required />
                        <input className='input-main' type="password" ref={passwordRef} required />
                        <input className='input-main'
                            type="password"
                            ref={passwordConfirmationRef}
                            required
                        />
                    </div>
                    <button className='signupbutton' disabled={loading} className="w-100" type="submit">
                        Sign Up
                    </button>
                </form>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </div>
        </>
    );
};

export default Signup;
