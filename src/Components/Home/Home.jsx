import React from "react";

const Homepage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-100 flex-1 flex items-center justify-center p-10">
                <div className="text-center max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to MyWebsite
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        efficitur, justo a facilisis faucibus, lectus quam tempus ex, vel
                        viverra urna libero in leo.
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-6xl mx-auto p-10 grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Feature One</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        fermentum, nunc ut pretium.
                    </p>
                </div>
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        fermentum, nunc ut pretium.
                    </p>
                </div>
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        fermentum, nunc ut pretium.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
