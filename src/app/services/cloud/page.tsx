import Image from 'next/image';
import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Hero Image */}
            <div className="mb-6">
                <Image
                    src="/Capgemini_Mountain_landscape.webp"
                    alt="Hero Image"
                    className="w-full h-auto rounded-md"
                    width={500}
                    height={500}
                />
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">Aero Space and Defense</h1>
                <p className="text-gray-600 mb-4">
                    The aerospace and defense industry plays a critical role in ensuring national security and technological advancement.
                    In this article, we will delve into the fascinating world of aero space and defense, exploring innovations, challenges, and the impact on global affairs.
                </p>
                <p className="text-gray-600 mb-4">
                    The aerospace sector involves the design, development, and production of aircraft and spacecraft. It encompasses a wide range of disciplines,
                    from aeronautical engineering to avionics, with a focus on pushing the boundaries of human flight and exploration beyond Earth's atmosphere.
                </p>
            </div>
        </div>
    );
};

export default Page;
