import Image from 'next/image';
import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <Image className="w-full h-auto mb-4" src="/Capgemini-Healthcare-hero-banner.jpg" alt="Healthcare Illustration"
                width={500}
                height={500}
            />
            <h1 className="text-3xl font-bold mb-4">Healthcare and You</h1>
            <p className="text-gray-600 mb-4">
                Healthcare is an essential aspect of our lives, impacting individuals and communities in various ways.
                In this article, we will explore the importance of healthcare, its key components, and how it plays a crucial role in maintaining a healthy society.
            </p>
            <p className="text-gray-600 mb-4">
                Access to quality healthcare services ensures that individuals can lead healthy lives, preventing and treating illnesses, and promoting overall well-being.
                It encompasses a broad range of services, from primary care and preventive measures to specialized treatments for complex medical conditions.
            </p>
            <p className="text-gray-600 mb-4">
                The healthcare industry is continuously evolving, with advancements in medical technology, research, and treatment methods.
                Healthcare professionals, including doctors, nurses, and support staff, play a pivotal role in delivering compassionate and effective care to patients.
            </p>
            <p className="text-gray-600 mb-4">
                As individuals, it's crucial to prioritize our health through regular check-ups, a balanced diet, exercise, and adopting healthy lifestyle choices.
                Additionally, staying informed about healthcare policies and practices empowers us to make informed decisions about our well-being.
            </p>
            <div className="bg-blue-500 text-white p-4 rounded-md">
                <p className="font-semibold">Stay Informed, Stay Healthy</p>
                <p>
                    This article is just a brief overview of the vast and important topic of healthcare. Stay informed about the latest developments,
                    and always consult with healthcare professionals for personalized advice and care.
                </p>
            </div>
        </div>
    );
};

export default Page;
