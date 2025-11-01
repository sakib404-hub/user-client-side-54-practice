import React from 'react';
import { useLoaderData } from 'react-router';
import NoUser from '../NoUser/NoUser';

const Users = () => {
    const users = useLoaderData();
    users.length ? console.log('true') : console.log('false');
    return (
        <div>
            {
                users.length ? <></>
                    : (<NoUser></NoUser>)
            }
        </div>
    );
};

export default Users;