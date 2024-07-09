import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

const newPasswordSchema = yup.object({
    oldPassword: yup.string().required("Old password is required."),
    newPassword: yup.string().min(8, "Password must be at least 8 characters").required("New password is required."),
    confirmNewPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('Confirm password is required'),
});

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordResetSuccess, setNewPassword] = useState(false)
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: newPasswordSchema,
        onSubmit: async (values) => {
            setNewPassword(true)
            // Handle submit logic here, e.g., API call
            //   router.push("/dashboard");
        },
    });

    return (
        <div className="min-h-screen bg-slate-50 flex md:justify-center items-center ">
            <div className=" w-full m-5 md:my-6 md:max-w-md p-6 bg-white rounded-2xl shadow-md">
                <div className=" text-black">
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


                    {!passwordResetSuccess ? ( // Conditionally render form if not success
                         <>
                        <div className="mb-8 ml-4 text-center">
                           
                                <h1 className="text-xl sm:text-3xl font-semibold">
                                    Set New Password
                                </h1>
                                <p className="text-sm sm:text-md mt-2 sm:mt-3 ">
                                    Please set your new password.
                                </p>
                            </div>
                            <form onSubmit={formik.handleSubmit} className="my-3">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 text-sm mb-2 font-[500]">Old Password</label>
                                        <div className="relative mt-1">
                                            <input
                                                type="password"
                                                id="oldPassword"
                                                name="oldPassword"
                                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter your old password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.oldPassword}
                                            />
                                        </div>
                                        {formik.touched.oldPassword && formik.errors.oldPassword && (
                                            <div className="text-sm text-red-500 m-2">{formik.errors.oldPassword}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label className="m-2 font-semibold">New Password</label>
                                        <div className="relative mt-1">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id="newPassword"
                                                name="newPassword"
                                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Enter your new password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.newPassword}
                                            />
                                            {showPassword ? (
                                                <EyeIcon
                                                    className="text-gray-400 h-6 w-6 absolute right-3 z-10 top-2 cursor-pointer"
                                                    onClick={() => setShowPassword(false)}
                                                />
                                            ) : (
                                                <EyeSlashIcon
                                                    className="text-gray-400 h-6 w-6 absolute right-3 z-10 top-2 cursor-pointer"
                                                    onClick={() => setShowPassword(true)}
                                                />
                                            )}
                                        </div>
                                        {formik.touched.newPassword && formik.errors.newPassword && (
                                            <div className="text-sm text-red-500 m-2">{formik.errors.newPassword}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label className="m-2 font-semibold">Confirm New Password</label>
                                        <div className="relative mt-1">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="confirmNewPassword"
                                                name="confirmNewPassword"
                                                className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                placeholder="Confirm your new password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.confirmNewPassword}
                                            />
                                            {showConfirmPassword ? (
                                                <EyeIcon
                                                    className="text-gray-400 h-6 w-6 absolute right-3 z-10 top-2 cursor-pointer"
                                                    onClick={() => setShowConfirmPassword(false)}
                                                />
                                            ) : (
                                                <EyeSlashIcon
                                                    className="text-gray-400 h-6 w-6 absolute right-3 z-10 top-2 cursor-pointer"
                                                    onClick={() => setShowConfirmPassword(true)}
                                                />
                                            )}
                                        </div>
                                        {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword && (
                                            <div className="text-sm text-red-500 m-2">{formik.errors.confirmNewPassword}</div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="text-white bg-primary-500 w-full py-2 rounded-lg font-[500] hover:bg-green-600 cursor-pointer duration-300 ease-in-out my-2"
                                >
                                    Set New Password
                                </button>
                            </form>
                        </>
                    ) : (
                        // If passwordResetSuccess is true, show success message and continue button
                        <div className="text-center">
                            <div className="mb-8 ml-4 text-center">
                           
                           <h1 className="text-xl sm:text-3xl font-semibold">
                           Password reset
                           </h1>
                           <p className="text-sm sm:text-md mt-2 sm:mt-3 ">
                           Your password has been successfully reset. Click below to Login automatically.
                           </p>
                       </div>
                            <button
                                className="text-white bg-primary-500 py-2 px-4 w-full rounded-lg font-[500] hover:bg-green-600 cursor-pointer duration-300 ease-in-out"
                                onClick={() => router.push("/dashboard")} // Redirect to dashboard on continue
                            >
                                Continue
                            </button>
                        </div>
                    )}

                  
                        <div className="mt-7 text-center">
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

export default NewPassword;
