import React from "react";

const AboutUs = () => {
    const teamMembers = [
        {
            name: "Alice Johnson",
            role: "CEO",
            description:
                "Alice is a visionary leader with over 10 years of experience in the tech industry.",
        },
        {
            name: "Bob Smith",
            role: "CTO",
            description:
                "Bob oversees all technical aspects and ensures our products are top-notch.",
        },
        {
            name: "Catherine Lee",
            role: "Marketing Head",
            description:
                "Catherine leads marketing campaigns that connect with our audience worldwide.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 p-10">
            {/* Page Title */}
            <section className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                    lacinia est at sapien facilisis, non imperdiet orci tincidunt. We
                    are passionate about delivering the best solutions to our clients.
                </p>
            </section>

            {/* Team Cards */}
            <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                        <h4 className="text-gray-500 mb-4">{member.role}</h4>
                        <p className="text-gray-600">{member.description}</p>
                    </div>
                ))}
            </section>

            {/* Additional Info Section */}
            <section className="mt-16 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    fermentum, dolor ac ultricies bibendum, turpis dui dapibus nunc, sed
                    convallis magna nisl sit amet urna. We aim to innovate and inspire
                    through every project we undertake.
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
