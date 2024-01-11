import React, { FC } from 'react';

interface PageProps { }

const Page: FC<PageProps> = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Hero Image */}
            {/* Article Content */}
            <div>
                <h1 className="text-3xl font-bold mb-4">Company's Research Library Performance Over the Year</h1>
                <p className="text-gray-600 mb-4">
                    As we reflect on the past year, the company's research library has played a pivotal role in advancing knowledge,
                    fostering innovation, and supporting informed decision-making across various departments.
                </p>
                <p className="text-gray-600 mb-4">
                    The library's performance has been outstanding, providing employees with access to a diverse range of resources,
                    from academic journals to industry reports, contributing to the overall growth and development of the organization.
                </p>
                <img
                    src="/insights/researchlibrary.jpg" // Replace with the actual path to a chart or performance visualization
                    alt="Performance Chart"
                    className="w-full h-auto mb-4 rounded-md"
                />
                <p className="text-gray-600 mb-4">
                    The chart above illustrates the positive trajectory of the company's research library performance over the year.
                    The increase in resource utilization, user engagement, and the acquisition of valuable insights showcase the library's impact.
                </p>
                <p className="text-gray-600 mb-4">
                    Moving forward, the company is committed to further enhancing the research library's capabilities, ensuring that
                    it remains a cornerstone for knowledge dissemination and strategic decision-making.
                </p>
            </div>
        </div>
    );
};

export default Page;
