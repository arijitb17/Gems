'use client'
import { useState } from "react";
import Input from "../inputs/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from 'react-icons/ai';
import toast from "react-hot-toast";
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });
    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);

        try {
            await axios.post('/api/register', data);
            toast.success('Account created');
            
            const response = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (response?.ok) {
                router.push('/cart');
                router.refresh(); // Navigate to /cart
                toast.success("Logged In");
            } else if (response?.error) {
                toast.error(response.error);
            }
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex-shrink-0">
                <img className="block lg:hidden h-8 w-auto"
                    src="/images/JGJ.jpg"
                    alt="Logo" />
                <img
                    className="hidden lg:block h-8 w-auto"
                    src="/images/JGJ.jpg"
                    alt="Logo"
                />
            </div>
            <h1 className="font-extrabold">Create Your Account</h1>
            <h3>Please fill in details to get started</h3>
            <Button
                outline
                label="Sign up with Google"
                icon={AiOutlineGoogle}
                onClick={() => { /* Implement Google sign-in logic if needed */ }}
            />
            <hr className="bg-white w-full h-px" />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                type="password"
            />
            <Button
                label={isLoading ? 'Loading' : 'Sign Up'}
                onClick={handleSubmit(onSubmit)}
            />
            <p className="text-sm">Already have an account?
                <Link className="underline" href={'/login'}>
                    Sign In
                </Link>
            </p>
        </>
    );
}

export default RegisterForm;
