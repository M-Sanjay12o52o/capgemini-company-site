"use client"

import Link from "next/link";
import Logo from "./ui/Logo";
import { SearchIcon } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

export default function Navbar() {
    const [testOptions, setTestOptions] = useState<boolean>(false)
    const [insightsOptions, setInsightsOptions] = useState<boolean>(false)
    const [industriesOptions, setIndustriesOptions] = useState<boolean>(false)
    const [servicesOptions, setServicesOptions] = useState<boolean>(false)
    const [careerOptions, setCareerOptions] = useState<boolean>(false)

    const showTest = () => {
        setTestOptions((prevState) => !prevState);
    }

    const showInsightsOptions = () => {
        console.log("Show options clicked")
        setInsightsOptions((prevState) => !prevState)
    }

    const showIndustriesOptons = () => {
        setIndustriesOptions((prevState) => !prevState)
    }

    const showServicesOptions = () => {
        setServicesOptions((prevState) => !prevState)
    }

    const showCareerOptions = () => {
        setCareerOptions((prevState) => !prevState)
    }

    return (
        <>
            {/* Top section for Contact, Investors, and Language switcher */}
            <div className="bg-gray-200 py-2 text-center">
                <div className="flex items-center justify-end space-x-4 mr-8">
                    <Link href="/jobboard" className="text-blue-500">Job board</Link>
                    <Link href="/contact-us" className="text-blue-500">Contact us</Link>
                    <Link href="/investors" className="text-blue-500">Investors</Link>
                    <span className="text-blue-500">Global | EN</span>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="sticky top-0 z-50 h-24 ml-10 mr-10 flex justify-between items-center px-4 py-2">
                <div className="flex items-center space-x-4 ">
                    <Link href="./" className="text-blue-500 pr-8">
                        <Logo />
                    </Link>
                    <button onClick={showInsightsOptions} className="text-blue-500 p-4 hover:underline">Insights</button>
                    {
                        insightsOptions && (
                            <Card className="absolute left-40 top-20">
                                <Link className="hover:underline" href={"/insights/generativeai"}>Generative AI</Link>
                                <br />
                                <Link className="hover:underline" href={"/insights/researchlibrary"}>Research Library</Link>
                            </Card>
                        )
                    }

                    <button onClick={showIndustriesOptons} className="text-blue-500 p-4 hover:underline">Industries</button>
                    {
                        industriesOptions && (
                            <Card className="absolute left-80 top-20">
                                <Link className="hover:underline" href={"/industries/aerospace"}>Aerospace</Link>
                                <br />
                                <Link className="hover:underline" href={"/industries/healthcare"}>Healthcare</Link>
                            </Card>
                        )
                    }

                    <button onClick={showServicesOptions} className="text-blue-500 p-4 hover:underline">Services</button>
                    {servicesOptions && (
                        <Card className="absolute left-96 top-20">
                            <Link className="hover:underline" href={"/services/cloud"}>Cloud</Link>
                            <br />
                            <Link className="hover:underline" href={"/services/cybersecurity"}>Cybersecurity</Link>
                        </Card>
                    )}

                    <button onClick={showCareerOptions} className="text-blue-500 p-4 hover:underline">Careers</button>
                    {
                        careerOptions && (
                            <Card className="absolute right-1/2 top-20">
                                <Link className="hover:underline" href={"/careers/whyjoin"}>Why Join</Link>
                            </Card>
                        )
                    }

                    <Link href="/news" className="text-blue-500 p-4 hover:underline">News</Link>

                    <Link href="/aboutus" className="text-blue-500 p-4 hover:underline">About us</Link>

                    <Link href="/login" className="text-blue-500 p-4 hover:underline">LogIn</Link>
                </div>
                <div className="flex items-center">
                    <Link href="" className="text-blue-500 flex items-center">
                        <SearchIcon className="mr-2" />
                        Search
                    </Link>
                </div>
            </nav >
        </>
    );
}
