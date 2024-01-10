"use client"

import { FC, useState } from 'react';
import axios from 'axios';
import { Button, Card, TextField, Grid } from '@mui/material';
import { X } from 'lucide-react';

interface JobPosting {
    title: string;
    description?: string;
    company: string;
    location: string;
    requirements: string[];
    responsibilities: string[];
}

const JobPostingForm: FC = () => {
    const initialJobState: JobPosting = {
        title: '',
        description: '',
        company: '',
        location: '',
        requirements: [],
        responsibilities: [],
    };

    const [job, setJob] = useState<JobPosting>(initialJobState);
    const [showForm, setShowForm] = useState<boolean>(false);

    const onXClick = () => {
        setShowForm((prevState) => !prevState)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Post the job details to the server using axios.post
            await axios.post(`${process.env.BACKEND_URL}/admin/createJob`, job);

            setJob(initialJobState);
        } catch (error) {
            console.error('Error posting job:', error);
        }
    };

    return (
        <Card className='flex flex-col p-4 w-1/2 ml-72'>
            {/* <X onClick={onXClick} /> */}
            <form onSubmit={handleSubmit} className='p-4'>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <p className='text-2xl mb-4 font-semibold'>Posting Jobs</p>
                        <TextField
                            type="text"
                            label="Job Title"
                            name="title"
                            value={job.title}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            label="Description"
                            name="description"
                            value={job.description}
                            onChange={handleChange}
                            multiline
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            label="Company"
                            name="company"
                            value={job.company}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            label="Location"
                            name="location"
                            value={job.location}
                            onChange={handleChange}
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            label="Requirements (comma-separated)"
                            name="requirements"
                            value={job.requirements.join(',')}
                            onChange={(e) =>
                                setJob({ ...job, requirements: e.target.value.split(',') })
                            }
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type="text"
                            label="Responsibilities (comma-separated)"
                            name="responsibilities"
                            value={job.responsibilities.join(',')}
                            onChange={(e) =>
                                setJob({ ...job, responsibilities: e.target.value.split(',') })
                            }
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item>
                        <Button className='bg-blue-600' type="submit" variant="contained" color="primary">
                            Post Job
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    );
};

export default JobPostingForm;
