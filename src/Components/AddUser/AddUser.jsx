import React from 'react';

const AddUser = () => {
    const handleFormSubmission = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        const newUser = {
            username,
            email,
            password
        }
        fetch('http://localhost:5010/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error.message))
    }
    return (
        <div className='flex items-center justify-center my-40'>
            <form
                onSubmit={handleFormSubmission}>
                <div className=" p-2 card bg-base-100 w-full min-w-[400px] lg:min-w-lg shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label
                                className='label'
                                htmlFor="username">
                                username
                            </label>
                            <input
                                type="text"
                                className='input w-full'
                                placeholder='username'
                                name='username'
                                id='username'
                                required />
                            <label
                                htmlFor='email'
                                className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                name='email'
                                id='email'
                                className="input w-full"
                                placeholder="Email"
                                required />
                            <label
                                htmlFor='password'
                                className="label">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                id='password'
                                className="input w-full"
                                placeholder="Password"
                                required />
                            <button
                                type='submit'
                                className="btn btn-neutral mt-4">
                                Add User
                            </button>
                        </fieldset>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddUser;