import { FC } from 'react';

interface JobListingProps { }

const JobListing: FC<JobListingProps> = () => {
    return (
        <div>
            <section className='w-full h-screen bg-blue-600'>
                <div className='container mx-auto flex items-center justify-center h-full'>
                    <div className='text-white text-center'>
                        <h1 className='text-4xl font-bold mb-4'>Job Title</h1>
                        <p className='text-lg mb-8'>
                            We are looking for a talented individual to join our team. If you
                            are passionate about [specific industry/technology], enjoy working
                            in a collaborative environment, and have the skills to [mention
                            key responsibilities], we would love to hear from you!
                        </p>
                        <h2 className='text-2xl font-bold mb-4'>Key Responsibilities</h2>
                        <ul className='list-disc text-left mb-8'>
                            <li>Responsibility 1</li>
                            <li>Responsibility 2</li>
                            <li>Responsibility 3</li>
                            {/* Add more responsibilities as needed */}
                        </ul>
                        <h2 className='text-2xl font-bold mb-4'>Requirements</h2>
                        <ul className='list-disc text-left mb-8'>
                            <li>Requirement 1</li>
                            <li>Requirement 2</li>
                            <li>Requirement 3</li>
                            {/* Add more requirements as needed */}
                        </ul>
                        <h2 className='text-2xl font-bold mb-4'>How to Apply</h2>
                        <p className='mb-4'>
                            To apply for this position, please send your resume and a cover
                            letter to [email@example.com]. In the subject line, mention the
                            job title.
                        </p>
                        <p>
                            Application deadline: [Insert Deadline]
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobListing;
