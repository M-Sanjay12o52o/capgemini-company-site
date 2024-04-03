import { FC } from 'react';

interface Investor {
    id: number;
    name: string;
    investment: string;
}

interface PageProps { }

const Page: FC<PageProps> = () => {
    const investors: Investor[] = [
        { id: 1, name: 'John Doe', investment: '$100,000' },
        { id: 2, name: 'Jane Smith', investment: '$50,000' },
        { id: 3, name: 'Alice Johnson', investment: '$75,000' }
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Investors Page</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {investors.map(investor => (
                    <div key={investor.id} className="bg-white shadow-md p-6 rounded-md">
                        <h2 className="text-xl font-bold mb-2">{investor.name}</h2>
                        <p className="text-gray-600">Investment: {investor.investment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
