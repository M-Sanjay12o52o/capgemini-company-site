import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Latest News</h1>

            <div className="mb-6">
                <div className="bg-blue-500 text-white p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-2">Breaking News: [News Headline]</h2>
                    <p className="text-gray-200">
                        [News summary or description. Provide a brief overview of the breaking news.]
                    </p>
                    <a href="#" className="text-yellow-300 hover:underline mt-2 inline-block">
                        Read More
                    </a>
                </div>
            </div>

            <div className="mb-6">
                <div className="bg-green-500 text-white p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-2">Feature Story: [Feature Headline]</h2>
                    <p className="text-gray-200">
                        [Feature story content. Share details about an interesting or important news feature.]
                    </p>
                    <a href="#" className="text-yellow-300 hover:underline mt-2 inline-block">
                        Read More
                    </a>
                </div>
            </div>

            <div>
                <div className="bg-yellow-500 text-white p-4 rounded-md">
                    <h2 className="text-2xl font-bold mb-2">Upcoming Events: [Event Name]</h2>
                    <p className="text-gray-200">
                        [Details about upcoming events. Provide information about dates, times, and locations.]
                    </p>
                    <a href="#" className="text-yellow-300 hover:underline mt-2 inline-block">
                        View Calendar
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page;
