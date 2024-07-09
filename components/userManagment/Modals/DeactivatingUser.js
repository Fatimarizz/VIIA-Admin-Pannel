import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { InfoIcon } from "lucide-react";

const DeactivateUserModal = ({ isOpen, onClose, data }) => {
    // Formik form validation schema using Yup
    const validationSchema = Yup.object().shape({
        reason: Yup.string().required("Required"),
    });

    console.log("Data", data)
    // Formik form submit function
    const onSubmit = (values, { setSubmitting }) => {
        console.log(values); // Handle form submission logic here
        setSubmitting(false);
        onClose(); // Close modal after form submission
    };

    // Initialize Formik form
    const formik = useFormik({
        initialValues: {
            reason: "",
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    const handleCloseModal = () => {
        onClose(); // Call the onClose function passed from parent to close the modal
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
                    <div className="flex items-center justify-center">
                        <div className="bg-white max-w-lg rounded-lg p-5 overflow-y-scroll">
                            <div className="flex justify-end items-center ">

                                <button onClick={handleCloseModal}>
                                    <XMarkIcon className="h-6 w-6 cursor-pointer text-black" />
                                </button>
                            </div>
                            <div className="flex justify-center -mt-4 mb-3">
                                <div className="rounded-full bg-red-100 p-1.5">
                                    <div className="rounded-full bg-red-200 p-1.5">
                                        <InfoIcon className="h-5 w-5 text-red-500" />
                                    </div>
                                </div>
                            </div>
                            <div className="px-3 flex flex-col justify-center items-center my-4">
                            <h3 className="text-lg text-red-700 text-center font-semibold leading-6">
                                Deactivate User
                            </h3>
                            <p className="text-center text-sm mt-2">
                                You are about to deactivate this user account
                                <span className="font-semibold"> ({data.fullName})</span>
                                <br />
                                click on <span className="font-semibold"> Cancel</span> to go back and  <span className="font-semibold"> Deactivate </span>to proceed.
                            </p>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="mb-4">
                                    <p className="text-sm font-medium text-gray-700">
                                        Number of Flagged:
                                    </p>
                                    <span className="text-red-500 text-base font-semibold"> 5 Times</span>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="reason"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Reason for Deactivation
                                    </label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.reason}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                                        rows="4"
                                    ></textarea>
                                    {formik.touched.reason && formik.errors.reason ? (
                                        <div className="text-red-500 text-sm mt-1">
                                            {formik.errors.reason}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-8">
                                    <button
                                        type="button"
                                        className="text-sm text-gray-700 px-3 py-2 bg-white border border-gray-300 rounded-md"
                                        onClick={handleCloseModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
                                        disabled={formik.isSubmitting}
                                    >
                                        Deactivate User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeactivateUserModal;
