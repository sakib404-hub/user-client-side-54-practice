import React from 'react';
import UserCard from './UserCard';

const AllUsers = ({ users, setUser }) => {
    const handleDelete = (id) => {
        console.log('Button is Clicked');
    }
    return (
        <div className='flex items-center justify-center my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    users.map((user) => {
                        return <UserCard
                            user={user}
                            handleDelete={handleDelete}
                        ></UserCard>
                    })
                }
            </div>
        </div>
    );
};

export default AllUsers;