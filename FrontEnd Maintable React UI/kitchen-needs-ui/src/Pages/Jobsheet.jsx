import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

function Jobsheet() {
    const location = useLocation();
    const navigate = useNavigate();
    const { username } = location.state || {}; 

    // Redirect if username doesn't exist in state
    if (!username) {
        navigate('/login'); // redirect to login page if username is not available
        return null;
    }

    const [formData, setFormData] = useState({
        fuelPrice: '',
        venueName: '',
        paymentStatus: '',
        paymentMode: '',
        milkDeliveredL: '',
        amountPaid: '',
        balance: '',
        commissionPerL: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const validateForm = () => {
        // Check if all required fields are filled and if numeric fields are valid
        const { fuelPrice, venueName, paymentStatus, paymentMode, milkDeliveredL, amountPaid, balance, commissionPerL } = formData;
        if (!fuelPrice || !venueName || !paymentStatus || !paymentMode || !milkDeliveredL || !amountPaid || !balance || !commissionPerL) {
            alert('Please fill out all fields.');
            return false;
        }
        if (isNaN(fuelPrice) || isNaN(milkDeliveredL) || isNaN(amountPaid) || isNaN(balance) || isNaN(commissionPerL)) {
            alert('Please enter valid numbers for the required fields.');
            return false;
        }
        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        // Parse only non-empty values
        const dataToPost = {
            fuelPrice: parseFloat(formData.fuelPrice),
            venueName: formData.venueName,
            paymentStatus: formData.paymentStatus,
            paymentMode: formData.paymentMode,
            milkDeliveredL: parseInt(formData.milkDeliveredL, 10),
            amountPaid: parseInt(formData.amountPaid, 10),
            balance: parseInt(formData.balance, 10),
            commissionPerL: parseInt(formData.commissionPerL, 10)
        };

        try {
            const response = await axios.post(`http://localhost:8080/api/${username}`, dataToPost);
            alert(`Response from server: ${JSON.stringify(response.data)}`);
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data. Please try again.');
        }
    };

    const resetForm = () => {
        setFormData({
            fuelPrice: '',
            venueName: '',
            paymentStatus: '',
            paymentMode: '',
            milkDeliveredL: '',
            amountPaid: '',
            balance: '',
            commissionPerL: ''
        });
    };

    return (
        <>
            <div className="min-h-screen w-full bg-MidNight text-Accent font-Poppins flex flex-col items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-3xl bg-MidNight p-8 rounded-lg shadow-md border-2 border-Accent">
                    <h1 className="text-2xl font-bold mb-4">JobSheet</h1>
                    <p>Welcome to Job Sheet, {username}!</p>
                    <div className="mb-6">
                        <div className="mt-4">
                            <label htmlFor="slNo" className="block mb-1">Employee User Id</label>
                            <input type="text" disabled className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="fuelPrice" className="block mb-1">Fuel Price</label>
                            <input type="text" id="fuelPrice" value={formData.fuelPrice} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="venueName" className="block mb-1">Name of the Hotel</label>
                            <input type="text" id="venueName" value={formData.venueName} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label htmlFor="amountPaid" className="block mb-1">Amount Paid in ₹</label>
                                <input type="number" id="amountPaid" value={formData.amountPaid} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                            </div>
                            <div>
                                <label htmlFor="balance" className="block mb-1">Balance in ₹</label>
                                <input type="number" id="balance" value={formData.balance} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                            </div>
                            <div>
                                <label htmlFor="commissionPerL" className="block mb-1">Commission Per Liter in ₹</label>
                                <input type="number" id="commissionPerL" value={formData.commissionPerL} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="milkDeliveredL" className="block mb-1">Milk Delivered in Liters</label>
                            <input type="number" id="milkDeliveredL" value={formData.milkDeliveredL} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="paymentStatus" className="block mb-1">Payment Status</label>
                            <select id="paymentStatus" value={formData.paymentStatus} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400">
                                <option value="">Select Payment Status</option>
                                <option value="Paid">Paid</option>
                                <option value="Partially Paid">Partially Paid</option>
                                <option value="Credit">Credit</option>
                            </select>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="paymentMode" className="block mb-1">Mode of Payment</label>
                            <select id="paymentMode" value={formData.paymentMode} onChange={handleInputChange} className="w-full rounded-lg border py-2 px-3 bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-400">
                                <option value="">Select Payment Mode</option>
                                <option value="UPI">UPI</option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-end gap-4">
                        <button onClick={handleSubmit} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-700">
                            Submit
                        </button>
                        <button onClick={resetForm} className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-700">
                            Reset
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Jobsheet;
