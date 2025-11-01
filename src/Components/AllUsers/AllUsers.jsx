import React from 'react';
import UserCard from './UserCard';

const AllUsers = ({ users, setUser }) => {
    const handleDelete = (id) => {
        console.log('Button is Clicked', id);

        fetch(`http://localhost:5010/users/${id}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    const remainingUser = users.filter((user) => user._id !== id)
                    setUser(remainingUser);
                }
            })
            .catch((error) => console.log(error.message))
    }
    return (
        <div className='flex items-center justify-center my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    users.map((user) => {
                        return <UserCard
                            key={user._id}
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