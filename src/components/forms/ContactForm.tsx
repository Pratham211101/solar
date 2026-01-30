import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
    const initialFormData = {
        fullName: "",
        company: "",
        email: "",
        phone: "",
        addressLine: "",
        state: "",
        zipCode: "",
        country: "",
        selectedProducts: [] as string[],
        query: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleClose = () => {
        setFormData(initialFormData);
        onClose();
    };

    const handleProductChange = (product: string) => {
        setFormData(prev => {
            const products = prev.selectedProducts.includes(product)
                ? prev.selectedProducts.filter(p => p !== product)
                : [...prev.selectedProducts, product];
            return { ...prev, selectedProducts: products };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        handleClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (typeof document === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 overflow-y-auto"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-7xl my-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        {/* Form Content */}
                        <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">ASK US</h2>

                            <form onSubmit={handleSubmit}>
                                {/* Information Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-primary mb-6">Information</h3>

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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-slate-200 mb-8" />

                                {/* Address Section */}
                                <div className="mb-8">
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Address Line  */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Address Line  <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                name="addressLine"
                                                value={formData.addressLine}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-slate-900"
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
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer text-slate-900"
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

                                {/* Divider */}
                                <div className="h-px bg-slate-200 mb-8" />

                                {/* Product Details Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-primary mb-6">Product Details</h3>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Left Column - Checkboxes */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-4">
                                                What product you need help with?
                                            </label>
                                            <div className="space-y-3">
                                                {["C012", "Reagent kit", "OCEMS", "Varunaa"].map((product) => (
                                                    <label key={product} className="flex items-center space-x-3 cursor-pointer group">
                                                        <div className="relative flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                className="peer h-5 w-5 border-2 border-slate-300 rounded text-primary focus:ring-primary/50 transition-all checked:border-primary checked:bg-primary appearance-none cursor-pointer"
                                                                checked={formData.selectedProducts.includes(product)}
                                                                onChange={() => handleProductChange(product)}
                                                            />
                                                            <svg
                                                                className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-slate-600 group-hover:text-primary transition-colors select-none">
                                                            {product}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right Column - Query Text Area */}
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-4">
                                                Query
                                            </label>
                                            <textarea
                                                name="query"
                                                value={formData.query}
                                                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                                                placeholder="Write you query here..."
                                                rows={5}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-slate-900"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-start">
                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-12 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:bg-primary/90 transition-all uppercase tracking-widest shadow-lg"
                                    >
                                        Send to us
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ContactForm;
