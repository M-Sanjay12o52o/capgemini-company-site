import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 mb-4">
                Welcome to our company's "About Us" page! We are a passionate and dedicated team committed to delivering excellence in [your industry/domain].
            </p>
            <p className="text-gray-600 mb-4">
                Our journey began with a vision to [briefly describe the company's mission and goals]. Since our inception, we have strived to [highlight key achievements or milestones].
            </p>
            <img
                src="/career/careerfive.webp" // Replace with the actual path to a team photo or image
                alt="Team Photo"
                className="w-full h-auto mb-4 rounded-md"
            />
            <p className="text-gray-600 mb-4">
                Here at [Your Company Name], we believe in [core values or principles]. Our diverse team brings together a wealth of expertise, creativity, and innovation,
                driving our commitment to [customer satisfaction/industry leadership/etc.].
            </p>
            <p className="text-gray-600 mb-4">
                We value transparency, integrity, and collaboration. Whether you are a customer, partner, or team member, we are dedicated to fostering positive relationships
                and achieving shared success.
            </p>
            <p className="text-gray-600 mb-4">
                Thank you for being a part of our journey. If you have any questions or would like to learn more about us, feel free to [provide contact information or link to a contact page].
            </p>
        </div>
    );
};

export default Page;
