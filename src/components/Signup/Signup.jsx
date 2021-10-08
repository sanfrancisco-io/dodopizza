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
            <Card style={{ padding: "1em" }}>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" style={{ paddingBottom: "1em" }}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password" style={{ paddingBottom: "1em" }}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                    <Form.Group id="password-confirm" style={{ paddingBottom: "1em" }}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            ref={passwordConfirmationRef}
                            required
                        />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default Signup;
