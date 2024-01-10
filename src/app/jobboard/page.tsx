import Link from 'next/link';
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
                            are passionate about Information technology Consulting Outsourcing
                            ,enjoy working in a collaborative environment,
                            {/* <ul>
                                <li>Provide strategic IT advice and solutions aligned with client objectives.</li>
                                <li>Manage IT projects, ensuring timely and within-budget delivery.</li>
                                <li>Design, implement, and manage tailored IT solutions.</li>
                                <li>Research and recommend suitable technologies for client needs.</li>
                                <li>Cultivate strong client relationships and offer ongoing support.</li>
                                <li>Ensure compliance with security and regulatory standards.</li>
                                <li>Collaborate with teams to drive innovation and problem-solving.</li>
                                <li>Analyze and optimize IT systems for enhanced performance.</li>
                                <li>Guide clients through technological transitions and change.</li>
                                <li>Stay updated with industry trends and propose innovative solutions.</li>
                            </ul> */}

                            {" "}we would love to hear from you!
                        </p>
                        <Link href={"/openPositions"}>Open Positions</Link>
                        <div className=''>
                            <h2 className='text-2xl font-bold mb-4'>Key Responsibilities</h2>
                            <ul className='list-disc mb-8 text-center'>
                                <li className='list-none'>Manage IT projects, ensuring timely and within-budget delivery.</li>
                                <li className='list-none'>Design, implement, and manage tailored IT solutions.</li>
                                <li className='list-none'>Research and recommend suitable technologies for client needs.</li>
                                {/* Add more responsibilities as needed */}
                            </ul>

                            <h2 className='text-2xl font-bold mb-4'>Requirements</h2>
                            <ul className='list-disc text-center mb-8'>
                                <li className='list-none'>Bachelor&apos;s degree in Computer Science or related field.</li>
                                <li className='list-none'>Proven experience in IT project management.</li>
                                <li className='list-none'>Strong knowledge of current IT trends and technologies.</li>
                                {/* Add more requirements as needed */}
                            </ul>
                        </div>
                        <h2 className='text-2xl font-bold mb-4'>How to Apply</h2>
                        <p className='mb-4'>
                            To apply for this position, please send your resume and a cover
                            letter to <span className='underline text-cyan-400'>email@example.com</span>. In the subject line, mention the
                            job title.
                        </p>
                        <p>
                            {/* Application deadline: [Insert Deadline] */}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobListing;
