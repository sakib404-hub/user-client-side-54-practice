import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
                <div className="w-4 h-4 bg-white rounded-full animate-bounce delay-450"></div>
            </div>
        </div>
    );
};

export default Loader;
