"use client"

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { FC, useState } from 'react'

interface pageProps {

}

const Page: FC<pageProps> = ({ }) => {
    const [form, setForm] = useState<boolean>(false)

    const handleForm = () => {
        if (form === true) {
            setForm(false);
        } else if (form === false) {
            setForm(true)
        }
    }

    const handleSubmit = () => {
        console.log("submitted")
    }

    return <>
        <div className='ml-20 pl-20 mr-20 pr-20 mt-20 text-4xl font-sans'>
            <div className='absolute bg-red-700 top-80 mt-20 flex items-center justify-center'>
                <button className='bg-blue-950 bg-opacity-50 text-white p-4' onClick={handleForm}>
                    CONTACT US
                </button>
            </div>
            <p>
                Thank you for your interest in Capgemini. Whether you’re a client, job seeker, journalist, analyst or investor, you can find the best way to contact us below.
            </p>
        </div>
        {form && (
            <Card className="fixed inset-0 z-50 bg-black bg-opacity-50">
                <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
                    <div>
                        Name: <input type="text" />
                        Emai: <input type="text" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button>
                    </div>
                </form>
            </Card>
        )}
    </>
}

export default Page