import { successToaster } from "@/utils/toast";
import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { getPaymentLogo } from "@/components/ui/contants";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditPaymentGatewayModal = ({ isOpen, onClose, data }) => {
    const router = useRouter();

    // Form validation schema using Yup
    const validationSchema = Yup.object({
        configurationLink: Yup.string().required("Configuration link is required"),
        configurationDetails: Yup.string().required("Configuration details are required"),
    });

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            configurationLink: data.ConfigurationLink || "",
            configurationDetails: data.ConfigurationDetail || "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // Handle form submission
            console.log(values);
            // Perform any necessary actions with form values
            successToaster("Payment gateway updated successfully");
            onClose();
        },
    });

   

    return (
        <>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className="rounded-lg">
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Edit payment gateway</h3>
                        <button onClick={onClose}>
                            <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </DialogTitle>

                <div className="p-4 px-6">


                    <form onSubmit={formik.handleSubmit} className="mt-4">
                        <div className="grid grid-cols-2 gap-x-7 gap-y-4 w-full">
                            <div>
                                <p className="font-semibold">Payment Method:</p>
                                <p className="flex items-center space-x-2">
                                    {getPaymentLogo(data.PaymentMethod)}
                                    {data.PaymentMethod}
                                </p>
                            </div>
                            <div>
                                <label htmlFor="configurationLink" className="block font-semibold">Configuration Link:</label>
                                <input
                                    type="text"
                                    id="configurationLink"
                                    name="configurationLink"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.configurationLink}
                                    className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                {formik.touched.configurationLink && formik.errors.configurationLink ? (
                                    <div className="text-red-600 text-sm mt-1">{formik.errors.configurationLink}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="configurationDetails" className="block font-semibold">Configuration Details:</label>
                                <input
                                    type="text"
                                    id="configurationDetails"
                                    name="configurationDetails"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.configurationDetails}
                                    className="mt-1 block w-full border rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                {formik.touched.configurationDetails && formik.errors.configurationDetails ? (
                                    <div className="text-red-600 text-sm mt-1">{formik.errors.configurationDetails}</div>
                                ) : null}
                            </div>

                            <div>
                                <p className="font-semibold">Status:</p>
                                <p className="rounded-full w-24 pl-2" style={{
                                    backgroundColor: data.Status === "Successful" ? "#ECFDF3" : data.Status === "Declined" ? "#FEF3F2" : "#EFF8FF",
                                    color: data.Status === "Successful" ? "#027A48" : data.Status === "Declined" ? "#B42318" : "#175CD3",
                                }}>{data.Status}</p>
                            </div>


                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </Dialog>
        </>
    );
};

export default EditPaymentGatewayModal;
