"use client"

import axios from 'axios';
import Link from 'next/link';
import { FC, useState } from 'react';

interface SignUpFormProps { }

const SignUpForm: FC<SignUpFormProps> = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user'); // Default: user
    console.log(userType)

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

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
            const response = await axios.post('http://localhost:3001/users/signup', {
                firstName,
                lastName,
                email,
                password,
            });

            console.log('Data sent:', response.data);
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error
        }
    };

    return (
        <div className='shadow-lg h-96'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <p className='mb-2 mt-0 pt-0'>Sign Up below</p>
                <input
                    type="email"
                    placeholder="Email"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={lastName}
                    onChange={handleLastNameChange}
                    className="border border-gray-400 rounded-md px-3 py-2 mb-4"
                    required
                />
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
                    SignUp
                </button>
                {userType === "user" ? (<p className='pl-8 pr-8'>Already have an account <Link className='underline text-blue-600' href={'/login'}>
                    Login </Link>here.
                </p>
                ) : null}

                {/* User Type Selection */}
                {/* <div>
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
                </div> */}
            </form>
        </div>
    );
};

export default SignUpForm;
