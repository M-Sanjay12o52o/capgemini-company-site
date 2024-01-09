import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import Logo from './ui/Logo'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
    return <div className='w-full h-screen bg-lime-500 pt-32'>
        <div className='mt-4 mr-4 ml-4 mb-0 bg-red-400 h-80 flex flex-row justify-around'>
            <div className='bg-orange-300 flex flex-col w-52 p-4'>
                <Logo />
                <p className='text-lg mt-2'>
                    Our brands:
                </p>
                <div className='flex flex-col items-center space-y-4'>
                    <Image className='mt-8 pb-8' src='/LogoEngineering.svg' alt='Engineering Logo' width={200} height={100} />
                    <Image className='mt-8 pb-8' src='/LogoInvent.svg' alt='Invent Logo' width={200} height={100} />
                    <Image className='mt-8 pb-8' src='/LogoSogeti.svg' alt='Sogeti Logo' width={200} height={100} />
                </div>
            </div>
            <div className='bg-green-400 flex flex-col w-52 p-4'>
                <Link className='p-1 hover:underline' href={"/insights"}>Insights</Link>
                <Link className='p-1 hover:underline' href={"/industries"}>Industries</Link>
                <Link className='p-1 hover:underline' href={"/services"}>Services</Link>
                <Link className='p-1 hover:underline' href={"/careers"}>Careers</Link>
                <Link className='p-1 hover:underline' href={"/news"}>News</Link>
                <Link className='p-1 hover:underline' href={"/about-us"}>About us</Link>
                <Link className='p-1 hover:underline' href={"/contact-us"}>Contact us</Link>
            </div>
            <div className='bg-slate-600 flex flex-col w-52 p-4'>
                <Link className='p-1 hover:underline' href='/accessibility'>Accessibility</Link>
                <Link className='p-1 hover:underline' href='/cookie-policy'>Cookie policy</Link>
                <Link className='p-1 hover:underline' href='/cookie-settings'>Cookie settings</Link>
                <Link className='p-1 hover:underline' href='/privacy-notice'>Privacy notice</Link>
                <Link className='p-1 hover:underline' href='/security-notification'>Security vulnerability notification</Link>
                <Link className='p-1 hover:underline' href='/speak-up'>SpeakUp</Link>
                <Link className='p-1 hover:underline' href='/terms-of-use'>Terms of use</Link>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='w-full h-20 bg-pink-400 flex justify-between items-center pl-8 pr-8'>
            <div>
                <p className='font-sans'>
                    All rights reserved by Capgemini. Copyright ©2024
                </p>
            </div>
            <div className='flex space-x-4'>
                <Link href={"/"}>
                    <Image src="/Linkedin.webp" alt="LinkedIn" width={36} height={24} />
                </Link>
                <Link href={"/"}>
                    <Image src="/X@1x.svg" alt="Twitter" width={36} height={24} />
                </Link>
                <Link href={"/"}>
                    <Image src="/Instagram.webp" alt="Instagram" width={36} height={24} />
                </Link>
                <Link href={"/"}>
                    <Image src="/Facebook.webp" alt="Facebook" width={36} height={24} />
                </Link>
                <Link href={"/"}>
                    <Image src="/YouTube.webp" alt="YouTube" width={36} height={24} />
                </Link>
                <Link href={"/"}>
                    <Image src="/Glassdoor.webp" alt="Glassdoor" width={36} height={24} />
                </Link>
            </div>
        </div>
    </div>
}

export default Footer