import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Hero Image */}
            <div className="mb-6">
                <img
                    src="/insights/generativeaihero.webp" // Replace with the actual path to your Generative AI image
                    alt="Generative AI Image"
                    className="w-full h-auto rounded-md"
                />
            </div>

            {/* Article Content */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Exploring Generative AI</h1>
                <p className="text-gray-600 mb-4">
                    Generative Artificial Intelligence (AI) is a fascinating field that involves creating models capable of generating new content,
                    whether it be images, text, or even music, based on patterns and data it has been trained on.
                </p>
                <p className="text-gray-600 mb-4">
                    Companies are increasingly leveraging Generative AI to automate creative tasks, enhance content generation, and explore new possibilities
                    in various industries, from design and marketing to healthcare and finance.
                </p>
                <img
                    src="/insights/generativeaihero.webp" // Replace with the actual path to a Generative AI demo or example
                    alt="Generative AI Demo"
                    className="w-full h-auto mb-4 rounded-md"
                />
                <p className="text-gray-600 mb-4">
                    The image above showcases a demo of Generative AI in action, illustrating its ability to generate realistic and novel content.
                    This technology opens doors to innovative applications and has the potential to revolutionize the way we approach creative tasks.
                </p>
                <p className="text-gray-600 mb-4">
                    As Generative AI continues to evolve, it is essential for companies to stay informed about the latest developments in the field
                    and explore how they can integrate this technology to drive innovation and efficiency within their respective domains.
                </p>
            </div>
        </div>
    );
};

export default Page;
