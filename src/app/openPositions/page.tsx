"use client"

import axios from 'axios';
import { FC, useEffect, useState } from 'react';

interface Job {
    title: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    // ... other fields from your JobInterface
}

interface JobListingProps { }

const JobListing: FC<JobListingProps> = () => {
    const [jobs, setJobs] = useState<Job[]>([]);

    console.log(jobs)

    useEffect(() => {
        // Fetch jobs from your API
        axios.get<Job[]>(`${process.env.BACKEND_URL}/jobs`) // Specify the expected response type with <Job[]>
            .then((response) => {
                // Assuming data is an array of job objects
                setJobs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
            });
    }, []);

    return (
        <div>
            {jobs.map((job, index) => (
                <section key={index} className='w-full h-screen bg-blue-600'>
                    {/* Display job details */}
                    <div className='container mx-auto flex items-center justify-center h-full' key={index}>
                        <div className='text-white text-center'>
                            <h1 className='text-4xl font-bold mb-4'>{job.title}</h1>
                            <p className='text-lg mb-8'>
                                {job.description}
                            </p>
                            <div className=''>
                                <h2 className='text-2xl font-bold mb-4'>Key Responsibilities</h2>
                                <ul className='list-disc mb-8 text-center'>
                                    {job.responsibilities.map((responsibility, index) => (
                                        <li className='list-none' key={index}>{responsibility}</li>
                                    ))}
                                </ul>

                                <h2 className='text-2xl font-bold mb-4'>Requirements</h2>
                                <ul className='list-disc text-center mb-8'>
                                    {job.requirements.map((requirement, index) => (
                                        <li className='list-none' key={index}>{requirement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default JobListing;
