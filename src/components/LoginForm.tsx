"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

interface LoginFormProps { }

const LoginForm: FC<LoginFormProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user');

    const router = useRouter()

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleUserTypeChange = (type: string) => {
        setUserType(type);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('User Type:', userType);

        setEmail('');
        setPassword('');

        try {
            let url = '';
            if (userType === 'user') {
                url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/login`
            } else if (userType === 'admin') {
                url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/login`
            }

            const response = await axios.post(url, {
                email,
                password,
            });

            if (userType === "user") {
                router.push('/');
            } else if (userType === "admin") {
                router.push('/dashboard');
            }

            console.log('Data sent:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error
        }
    };

    return (
        <div className='shadow-lg h-96'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <p className='mb-2 mt-0 pt-0'>Logging in as {userType}</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                >
                    Login
                </button>
                {userType === "user" ? (<p className='pl-8 pr-8'>If you haven&apos;t already registerd please <Link className='underline text-blue-600' href={'/signup'}>
                    SignUp</Link>  first.
                </p>
                ) : null}

                {/* User Type Selection */}
                <div>
                    <p className="mb-2 ml-8">Login As:</p>
                    <button
                        onClick={() => handleUserTypeChange('user')}
                        className={`mr-2 px-3 py-1 rounded ${userType === 'user'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 text-gray-700'
                            }`}
                    >
                        User
                    </button>
                    <button
                        onClick={() => handleUserTypeChange('admin')}
                        className={`px-3 py-1 rounded ${userType === 'admin'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-300 text-gray-700'
                            }`}
                    >
                        Admin
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
