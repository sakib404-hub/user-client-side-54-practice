import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import NoUser from '../NoUser/NoUser';
import AllUsers from '../AllUsers/AllUsers';

const Users = () => {
    const usersLoaded = useLoaderData();
    const [users, setUser] = useState(usersLoaded)
    // users.length ? console.log('true') : console.log('false');
    return (
        <div>
            {
                users.length ? <AllUsers
                    setUser={setUser}
                    users={users}></AllUsers>
                    : (<NoUser></NoUser>)
            }
        </div>
    );
};

export default Users;