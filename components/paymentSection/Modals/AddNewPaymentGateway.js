import { successToaster } from "@/utils/toast";
import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { getPaymentLogo } from "@/components/ui/contants";
import { useFormik } from "formik";
import * as Yup from "yup";

const paymentMethods = [
    { name: "PayPal", key: "paypal" },
    { name: "MasterCard", key: "mastercard" },
    { name: "Visa", key: "visa" },
    { name: "Stripe", key: "stripe" },
];

const NewPaymentGatewayModal = ({ isOpen, onClose, data }) => {
    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            paypal:  "",
            mastercard:  "",
            visa:  "",
            stripe:  "",
        },
        validationSchema: Yup.object().shape({
            paypal: Yup.string().required("PayPal configuration link is required"),
            mastercard: Yup.string().required("MasterCard configuration link is required"),
            visa: Yup.string().required("Visa configuration link is required"),
            stripe: Yup.string().required("Stripe configuration link is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
            successToaster("Payment gateway updated successfully");
            onClose();
        },
    });

    return (
        <>
            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm" className="rounded-lg">
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Edit Payment Gateway</h3>
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
                            <div className="space-y-9">
                                {paymentMethods.map((method) => (
                                    <div key={method.key}>
                                        <p className="font-semibold">Payment Method:</p>
                                        <p className="flex items-center space-x-2">
                                            {getPaymentLogo(method.name)}
                                            {method.name}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <div key={method.key}>
                                        <label htmlFor={method.key} className="block font-semibold">
                                            {method.name} Configuration Link:
                                        </label>
                                        <input
                                            type="text"
                                            id={method.key}
                                            name={method.key}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values[method.key]}
                                            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        {formik.touched[method.key] && formik.errors[method.key] && (
                                            <div className="text-red-600 text-sm mt-1">{formik.errors[method.key]}</div>
                                        )}
                                    </div>
                                ))}
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

export default NewPaymentGatewayModal;
