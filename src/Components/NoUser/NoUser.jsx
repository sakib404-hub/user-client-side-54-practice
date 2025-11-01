import React from 'react';
import noUserImg from '../../assets/9264885.jpg';

const NoUser = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className=" rounded-xl p-8 flex flex-col items-center space-y-6">
                <img
                    src={noUserImg}
                    alt="No User"
                    className="w-64 h-64 object-cover rounded-full border-4 border-gray-200"
                />
                <p className="text-2xl md:text-3xl font-bold text-gray-700">
                    No User Found!
                </p>
                <p className="text-gray-500 text-center max-w-xs">
                    It looks like there are no users in the database yet.
                </p>
            </div>
        </div>
    );
};

export default NoUser;
