import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        addressLine2: "",
        state: "",
        zipCode: "",
        country: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl my-8 bg-white rounded-2xl shadow-2xl"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                >
                    <X className="w-6 h-6 text-slate-600" />
                </button>

                {/* Form Content */}
                <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0066A1] mb-8">ASK US</h2>

                    <form onSubmit={handleSubmit}>
                        {/* Information Section */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-[#0066A1] mb-6">Information</h3>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="First Name Last Name"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Company/Institution */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Company/Institution <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Name of Organisation"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Email Address */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="user@website.com"
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-slate-200 mb-8" />

                        {/* Address Section */}
                        <div className="mb-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                {/* Address Line 2 */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Address Line 2 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        value={formData.addressLine2}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Zip Code */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Zip Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="zipCode"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066A1] focus:border-transparent transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="">Select</option>
                                        <option value="india">India</option>
                                        <option value="usa">United States</option>
                                        <option value="uk">United Kingdom</option>
                                        <option value="canada">Canada</option>
                                        <option value="australia">Australia</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <p className="text-xs text-slate-400 mt-1 italic">Select your Country</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-start">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-4 bg-[#0066A1] text-white rounded-lg font-bold text-sm hover:bg-[#005581] transition-all uppercase tracking-widest shadow-lg"
                            >
                                Send to us
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactForm;
