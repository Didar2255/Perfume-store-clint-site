import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handelOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handelAdminSubmit}>
                <input type="email" onBlur={handelOnBlur} />
                <button className='btn btn-dark' type='submit'>Make Admin</button>
            </form>
            {success && <Alert >
                User Successfully create
            </Alert>}
        </div>
    );
};

export default MakeAdmin;