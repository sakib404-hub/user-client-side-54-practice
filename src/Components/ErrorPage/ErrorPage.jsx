import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
                <p className="text-gray-600 mb-6">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="btn btn-primary btn-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
