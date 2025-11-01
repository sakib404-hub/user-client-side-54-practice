import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const UserCard = ({ user, handleDelete }) => {
    const { _id, username, email } = user;

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 w-80 p-4 flex flex-col justify-between min-h-[130px]">
            {/* Top: User Info */}
            <div className="flex items-center gap-3 mb-2">
                <FaUserCircle className="text-4xl text-blue-500" />
                <div className="leading-tight">
                    <h2 className="text-lg font-semibold text-gray-800">{username}</h2>
                    <p className="flex items-center text-gray-600 text-sm">
                        <MdEmail className="mr-1 text-blue-400" /> {email}
                    </p>
                </div>
            </div>

            {/* Middle: Dummy Text */}
            <p className="text-gray-500 text-xs mt-1">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.”
            </p>

            {/* Bottom: Delete Button */}
            <div className="flex justify-end mt-3">
                <button
                    onClick={() => handleDelete(_id)}
                    className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition
                    cursor-pointer"
                    title="Delete User"
                >
                    <RiDeleteBin6Line className="text-red-500 text-xl" />
                </button>
            </div>
        </div>
    );
};

export default UserCard;
