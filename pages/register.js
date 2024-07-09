import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";
import { CloudUploadIcon } from "lucide-react";

const registerSchema = yup.object({
  email: yup
    .string()
    .required("Valid email is required.")
    .email("Please enter a valid email address."),
  fullName: yup.string().required("Full name is required."),
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/^\d+$/, "Phone number is not valid"),
  profilePicture: yup.mixed().required("Profile picture is required."),
  password: yup.string().min(8, "Minimum 8 digits").required("Password is required."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required("Confirm password is required."),
});

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null); // State for storing the preview image URL
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      phoneNumber: '',
      profilePicture: null,
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      // Handle form submission, e.g., send data to an API
      router.push("/");
    },
  });

  const handleProfilePictureChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("profilePicture", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result); // Set the preview image URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex md:justify-center items-center ">
      <div className="w-full m-5 md:max-w-md p-6 bg-white">
        <div className="text-black">
          <div className="flex justify-center mb-8">
            <Image src="/assets/logo.svg" height={40000} width={40000} alt="logo" className="py-4 lg:p-0 w-16 lg:w-24" priority="" />
          </div>
          <div className="mb-8 ml-4 text-center">
            <h1 className="text-xl sm:text-3xl font-semibold">
              Create an account
            </h1>
            <p className="text-sm sm:text-md mt-2 sm:mt-3">
              Join us and start managing your tasks!
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="m-3">
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
              <div>
                <label className="block text-gray-700 text-sm mb-2 font-[500]">Full Name</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your full name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                </div>
                {formik.touched.fullName && formik.errors.fullName && (
                  <div className="text-sm text-red-500 m-2">{formik.errors.fullName}</div>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2 font-[500]">Phone Number</label>
                <div className="relative mt-1">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                </div>
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="text-sm text-red-500 m-2">{formik.errors.phoneNumber}</div>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2 font-[500]">Profile Picture</label>
                <div className="relative mt-1">
                  <div
                    className="shadow appearance-none border rounded-md w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex flex-col items-center cursor-pointer"
                    onClick={() => document.getElementById("profilePicture").click()}
                  >
                    {previewImage ? (
                      <img src={previewImage} alt="Profile Preview" className="h-24 w-24 object-cover rounded-full" />
                    ) : (
                      <CloudUploadIcon className="h-12 w-12 text-primary-500" />
                    )}
                    <p className="text-primary-500">{previewImage ? 'Change profile picture' : 'Click to upload profile picture'}</p>
                    <p className="text-gray-500">or drag and drop PNG or JPG (max. 800x400px)</p>
                  </div>
                  <input
                    type="file"
                    id="profilePicture"
                    name="profilePicture"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.profilePicture && formik.errors.profilePicture && (
                  <div className="text-sm text-red-500 m-2">{formik.errors.profilePicture}</div>
                )}
              </div>
              <div>
                <label className="m-2 font-semibold">Password</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
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
                {formik.touched.password && formik.errors.password && (
                  <div className="text-sm text-red-500 m-2">{formik.errors.password}</div>
                )}
              </div>
              <div>
                <label className="m-2 font-semibold">Confirm Password</label>
                <div className="relative mt-1">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
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
                {formik.touched.password && formik.errors.password && (
                  <div className="text-sm text-red-500 m-2">{formik.errors.password}</div>
                )}
              </div>
            
            </div>

            <button
              type="submit"
              className="text-white bg-primary-500 w-full py-2 rounded-lg font-[500] hover:bg-green-600 cursor-pointer duration-300 ease-in-out my-2"
            >
              Sign up
            </button>
          </form>

          <div className="mt-7 text-center">
            <h1 className="text-sm sm:text-md flex justify-center">
              Already have an account?{" "}
              <Link href="/">
                <p className="text-primary-500 font-semibold cursor-pointer ml-2">
                  Log in
                </p>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;