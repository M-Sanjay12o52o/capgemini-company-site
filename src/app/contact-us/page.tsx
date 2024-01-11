"use client"

import { Card } from '@/components/ui/card'
import { FC, useState } from 'react'
import axios from 'axios'; // Import axios for HTTP requests
import Logo from '@/components/ui/Logo';
import { X } from 'lucide-react';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Checkbox } from '@mui/material';
import Link from 'next/link';

interface pageProps { }

const Page: FC<pageProps> = ({ }) => {
    const [form, setForm] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>('');
    const [jobTitle, setJobTitle] = useState<string>("")
    const [number, setNumber] = useState<string>('');
    const [company, setCompany] = useState<string>("")

    const notify = (data: any) => toast(data);

    const handleForm = () => {
        setForm(!form);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(process.env.NEXT_PUBLIC_BACKEND_URL, "backendurl")

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
                firstName,
                lastName,
                jobTitle,
                email,
                number,
                company,
            });

            console.log('Data sent:', response.data);
            notify(response.data);
            handleForm();
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error
        }
    }

    return (
        <>
            <div className='ml-20 pl-20 mr-20 pr-20 mt-20 text-4xl font-sans'>
                <div className='absolute  top-80 mt-20 flex items-center justify-center'>
                    <button className='bg-blue-950 bg-opacity-50 text-white p-4 rounded-xl border-2 border-white' onClick={handleForm}>
                        GET IN TOUCH
                    </button>
                </div>
                <p>
                    Thank you for your interest in Capgemini. Whether you&apos;re a client, job seeker, journalist, analyst, or investor, you can find the best way to contact us below.
                </p>
            </div>
            <br />
            <br />
            {form && (
                <Card
                    className="fixed inset-0 z-50 bg-white ml-80 w-1/2 shadow-2xl overflow-auto"
                >
                    <div className='flex justify-end m-4'>
                        <X onClick={handleForm} className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-center">
                        <Logo />
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg">
                        <div className="w-full max-w-md mx-auto">
                            <div className="mb-4">
                                <TextField type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 border rounded" label="First Name" variant='outlined' />
                            </div>
                            <div className="mb-6">
                                <TextField type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} label="Last Name" variant='outlined' className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-6">
                                <TextField type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" label="Email" variant='outlined' />
                            </div>
                            <div className="mb-6">
                                <TextField type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="w-full p-2 border rounded" label="Job Title" variant='outlined' />
                            </div>
                            <div className="mb-6">
                                <TextField type="tel" value={number} onChange={(e) => setNumber(e.target.value)} className="w-full p-2 border rounded" label="Phone (optional)" variant='outlined' />
                            </div>
                            <div className="mb-6">
                                <TextField type="tel" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full p-2 border rounded" label="Company (organization)" variant='outlined' />
                            </div>

                            <br />
                            <div className='flex'>
                                <Checkbox className='top-0' required />
                                <p>
                                    I agree to Capgemini collecting and processing my personal data to allow me to receive information on Capgemini services. For further information, please see our <Link className='text-cyan-400 underline' href={"/"}>Privacy Notice..</Link>
                                </p>
                            </div>
                            <br />
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </Card>
            )}
            <ToastContainer />
        </>
    )
}

export default Page;
