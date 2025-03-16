import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        const trimmedEmail = email.trim();

        if (!trimmedEmail) {
            setMessage("Email is required.");
            setLoading(false);
            return;
        }

        if (!validateEmail(trimmedEmail)) {
            setMessage("Enter a valid email format.");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("https://test.ezworks.ai/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: trimmedEmail }),
            });

            const result = await response.json();

            if (response.status === 422) {
                setMessage("Invalid email domain (@ez.works is not allowed).");
            } else if (response.status === 200) {
                setMessage("Form submitted successfully!");
                setEmail("");
            } else {
                setMessage("Something went wrong. Try again.");
            }
        } catch (error) {
            setMessage("Error connecting to API.");
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="email-input"
            />
            <button type="submit" disabled={loading} className="contact-btn">
                {loading ? "Submitting..." : "Contact Me"}
            </button>
            {message && <p className={`message ${message.includes("success") ? "success" : "error"}`}>{message}</p>}
        </form>
    );
};

export default Form;
