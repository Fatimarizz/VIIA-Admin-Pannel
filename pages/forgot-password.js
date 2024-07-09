import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from 'next/link';
import { useRouter } from "next/router";
import Image from 'next/image';

const forgotPasswordSchema = yup.object({
    email: yup
        .string()
        .required("Valid email is required.")
        .email("Please enter a valid email address."),
});

const ForgotPassword = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: forgotPasswordSchema,
        onSubmit: async (values) => {
            // Handle submit logic here
            router.push("/new-password")
        },
    });

    return (
        <div className="min-h-screen bg-slate-50 flex md:justify-center items-center ">
            <div className=" w-full m-5 md:m-0 md:max-w-md p-6 bg-white rounded-2xl shadow-md">
                <div className="md:my-6 text-black">
                    <div className="flex justify-center mb-9">
                        <Image src="/assets/logo.svg" height={40000} width={40000} alt="logo" className="py-4 lg:p-0 w-20" priority="" />
                    </div>
                    <div className="flex justify-center mb-3">
                        <div className="rounded-full bg-[#E0FDE1] p-2">
                            <div className="rounded-full bg-[#C1FCC3] p-2">
                                <img className="" src="/assets/key.png" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-8 ml-4 text-center">
                        <h1 className="text-xl sm:text-3xl font-semibold">
                            Forgot Password
                        </h1>
                        <p className=" text-sm sm:text-md mt-2 sm:mt-3">
                            No worries, we’ll send you reset instructions
                        </p>
                    </div>

                    <form onSubmit={formik.handleSubmit} className="m-3 ">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 text-sm mb-2 font-[500]">Email</label>
                                <div className="relative mt-1">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                </div>
                                {formik.touched.email && formik.errors.email && (
                                    <div className="text-sm text-red-500 m-2">{formik.errors.email}</div>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-primary-500 w-full py-2 rounded-lg font-[500] hover:bg-green-600 cursor-pointer duration-300 ease-in-out my-2"
                        >
                            Reset Password
                        </button>
                    </form>

                    <div>
                        <Link href={'/'} className="flex items-center gap-1 mt-8 text-gray-600 cursor-pointer justify-center font-semibold">
                            <span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39698 14.6022 1.66602 9.99984 1.66602C5.39746 1.66602 1.6665 5.39698 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327Z"
                                        stroke="#475467"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M11.05 12.9419L8.1167 10.0003L11.05 7.05859"
                                        stroke="#475467"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </span>
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
