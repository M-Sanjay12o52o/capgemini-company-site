import SignUpForm from '@/components/SignUpForm';
import Logo from '@/components/ui/Logo';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full rounded-lg bg-blue-500 bg-opacity-50 p-3 md:h-36 items-center justify-center">
                    <div className="w-32 text-white md:w-36 flex justify-center">
                        <Logo />
                    </div>
                </div>
                {/* TODO */}
                <SignUpForm />
            </div>
        </main>
    );
}