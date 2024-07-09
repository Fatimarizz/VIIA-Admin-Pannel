import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ResendDocumentsForm = ({ onClose }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        documentName: Yup.string().required("Required"),
        reason: Yup.string().required("Required"),
    });

    const onSubmit = (values, { setSubmitting }) => {
        console.log(values); // Handle form submission logic here
        setSubmitting(false);
        onClose(); // Close form after submission
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            documentName: "",
            reason: "",
        },
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    return (
        <form onSubmit={formik.handleSubmit} className="px-4">
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                    ) : null}
                </div>
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
            </div>
            <div>
                <div>
                    <label htmlFor="documentName" className="block text-sm font-medium text-gray-700">
                        Name of Document
                    </label>
                    <input
                        id="documentName"
                        name="documentName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.documentName}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    {formik.touched.documentName && formik.errors.documentName ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.documentName}</div>
                    ) : null}
                </div>
              
                <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mt-3">
                        Reason to Send Documents
                    </label>
                    <textarea
                        id="reason"
                        name="reason"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reason}
                        className="mt-1 block w-full  h-24 px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    />
                    {formik.touched.reason && formik.errors.reason ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.reason}</div>
                    ) : null}
                </div>
            </div>
            <div className="flex items-center justify-end space-x-4 mt-4">
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
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ResendDocumentsForm;
