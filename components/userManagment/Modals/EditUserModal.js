
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CloudUploadIcon } from "lucide-react";
import { Dialog, DialogTitle } from "@mui/material";

const EditUserModal = ({ isOpen, onClose, data }) => {
    const [previewImage, setPreviewImage] = useState(null);

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phoneNumber: Yup.string().required("Required"),
        dateOfBirth: Yup.date().required("Required"),
        userType: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
        profilePhoto: Yup.mixed().required("Required"),
    });

    const handleProfilePictureChange = (event) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue("profilePhoto", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result); // Set the preview image URL
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values); // Handle form submission logic here
        setSubmitting(false);
        onClose(); // Close form after submission
    };

    const formik = useFormik({
        initialValues: {
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            email: data.Email || "",
            phoneNumber: data.PhoneNumber || "",
            dateOfBirth: data.dateOfBirth || "",
            userType: data.UserType || "",
            gender: data.Gender || "",
            password: "",
            profilePhoto: null,
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className="rounded-lg">
            <DialogTitle>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Edit data</h3>
                    <button onClick={onClose}>
                        <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </DialogTitle>

            <form onSubmit={formik.handleSubmit} className="px-4">
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            Last Name
                        </label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
                        ) : null}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>
                        ) : null}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-2">
                    <div>
                        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dateOfBirth}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                        />
                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.dateOfBirth}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                            data Type
                        </label>
                        <div className="mt-1">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Driver"
                                    onChange={formik.handleChange}
                                    checked={formik.values.userType === "Driver"}
                                    className="form-radio text-primary-600"
                                />
                                <span className="ml-2">Driver</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Passenger"
                                    onChange={formik.handleChange}
                                    checked={formik.values.userType === "Passenger"}
                                    className="form-radio text-primary-600"
                                />
                                <span className="ml-2">Passenger</span>
                            </label>
                        </div>
                        {formik.touched.userType && formik.errors.userType ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.userType}</div>
                        ) : null}
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                        Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.gender}</div>
                    ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    ) : null}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm mb-2 font-[500]">Profile Photo</label>
                    <div className="relative my-2">
                        <div
                            className="shadow appearance-none border rounded-md w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex flex-col items-center cursor-pointer"
                            onClick={() => document.getElementById("profilePhoto").click()}
                        >
                            {previewImage ? (
                                <img src={previewImage} alt="Profile Preview" className="h-20 w-20 object-cover rounded-full" />
                            ) : (
                                <CloudUploadIcon className="h-5 w-5 text-primary-500" />
                            )}
                            <p className="text-primary-500 text-sm">{previewImage ? 'Change profile picture' : 'Click to upload profile picture'}</p>
                            {!previewImage && <p className="text-gray-500">or drag and drop PNG or JPG (max. 800x400px)</p>}
                        </div>
                        <input
                            type="file"
                            id="profilePhoto"
                            name="profilePhoto"
                            className="hidden"
                            onChange={handleProfilePictureChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.profilePhoto && formik.errors.profilePhoto && (
                        <div className="text-sm text-red-500 m-2">{formik.errors.profilePhoto}</div>
                    )}
                </div>
                <div className="flex items-center justify-end space-x-4 my-4">
                    <button
                        type="button"
                        className="text-sm border border-gray-300 rounded-lg px-4 py-2 text-primary-500 hover:text-primary-600"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                        disabled={formik.isSubmitting}
                    >
                        Save Changes
                    </button>
                </div>
            </form>



        </Dialog>
    );
};

export default EditUserModal;
