import { XMarkIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dialog, DialogTitle } from "@mui/material";
import React from "react";
import { AlertOctagonIcon, AlertTriangle } from "lucide-react";

const FlagUserModal = ({ isOpen, onClose, data }) => {
    // Formik form validation schema using Yup
    const validationSchema = Yup.object().shape({
        reason: Yup.string().required("Required"),
    });

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

        <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="xs" className="rounded-lg">
            <DialogTitle>
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Flagging User</h3>
                    <button onClick={onClose}>
                        <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </DialogTitle>

            <div className="p-4">
                <div className="flex justify-center -mt-4 mb-3">
                    <div className="rounded-full bg-orange-100 p-1.5">
                        <div className="rounded-full bg-orange-200 p-1.5">
                            <AlertTriangle className="h-5 w-5 text-orange-500" />
                        </div>
                    </div>
                </div>
                <div className="px-3 flex flex-col justify-center items-center my-4">
                    <h3 className="text-lg text-orange-700 text-center font-semibold leading-6">
                        Flag Account
                    </h3>
                    <p className="text-center text-sm mt-2">
                        You are about to flag this user account
                        <span className="font-semibold"> ({data.FullName})</span>
                        <br />
                        click on <span className="font-semibold"> Cancel</span> to go back and  <span className="font-semibold"> Flag </span> to proceed.
                    </p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="reason"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Reason for Flagging
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
                            className="bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-700"
                            disabled={formik.isSubmitting}
                        >
                            Flag User
                        </button>
                    </div>
                </form>
            </div>


            </Dialog>

                );
};

                export default FlagUserModal;
