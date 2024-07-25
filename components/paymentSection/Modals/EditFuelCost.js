import { successToaster } from "@/utils/toast";
import React from "react";
import { Dialog, DialogTitle } from "@mui/material";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";

const EditFuelCost = ({ isOpen, onClose, data }) => {
    const router = useRouter();

    // Form validation schema using Yup
    const validationSchema = Yup.object({
        engineCodes: Yup.array().of(
            Yup.object().shape({
              
                currentPrice: Yup.number().required("Current price per liter is required"),
            })
        ),
    });

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            engineCodes: [
                { engineType: "Diesel", currentPrice: "" },
                { engineType: "Petrol",  currentPrice: "" },
                { engineType: "Electric", currentPrice: "" },
                { engineType: "Hybrid",  currentPrice: "" },
            ],
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

    const handleEngineChange = (index, field, value) => {
        const updatedEngineCodes = [...formik.values.engineCodes];
        updatedEngineCodes[index][field] = value;
        formik.setFieldValue("engineCodes", updatedEngineCodes);
    };

    const handleClose = () => {
        formik.resetForm();
        onClose();
    };
    return (
        <>
            <Dialog open={isOpen} onClose={handleClose} fullWidth maxWidth="sm" className="rounded-lg">
                <DialogTitle>
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Edit Fuel Cost</h3>
                        <button onClick={handleClose}>
                            <svg className="h-6 w-6 cursor-pointer text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </DialogTitle>

                <div className="p-4 px-6">
                    <form onSubmit={formik.handleSubmit} className="mt-4">
                        <div className="grid grid-cols-2 gap-x-7 gap-y-4 w-full">
                            {formik.values.engineCodes.map((engine, index) => (
                                <React.Fragment key={index}>
                                    <div>
                                        <label htmlFor={`engineType-${index}`} className="block font-semibold">Engine Type :</label>
                                        <input
                                            type="text"
                                            id={`engineType-${index}`}
                                            name={`engineCodes[${index}].engineType`}
                                            value={engine.engineType}
                                            readOnly
                                            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm bg-gray-100"
                                        />
                                    </div>
                                  
                                    <div>
                                        <label htmlFor={`currentPrice-${index}`} className="block font-semibold">Current Price per Liter :</label>
                                        <input
                                            type="text"
                                            id={`currentPrice-${index}`}
                                            name={`engineCodes[${index}].currentPrice`}
                                            onChange={(e) => handleEngineChange(index, 'currentPrice', e.target.value)}
                                            value={engine.currentPrice}
                                            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        />
                                        {formik.touched.engineCodes && formik.errors.engineCodes && formik.errors.engineCodes[index] && formik.errors.engineCodes[index].currentPrice ? (
                                            <div className="text-red-600 text-sm mt-1">{formik.errors.engineCodes[index].currentPrice}</div>
                                        ) : null}
                                    </div>
                                </React.Fragment>
                            ))}
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

export default EditFuelCost;
