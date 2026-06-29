import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2 } from "lucide-react";
import GlowButton from "../ui/GlowButton";

interface ApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ isOpen, onClose, jobTitle }) => {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        whysolar: "",
        resume: null as File | null,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Submitted:", formData);
        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset and close after success message
        setTimeout(() => {
            onClose();
            setIsSuccess(false);
            setFormData({ fullName: "", email: "", whysolar: "", resume: null });
        }, 2000);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl md:rounded-[32px] p-6 md:p-8 shadow-2xl font-gilroy light-theme"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted transition-colors group"
                        >
                            <X className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                        </button>

                        {isSuccess ? (
                            <div className="py-12 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-primary" />
                                </div>
                                <h2 className="text-3xl font-bold text-foreground mb-2">Application Sent!</h2>
                                <p className="text-muted-foreground">Thank you for applying to Sunbot. We'll be in touch soon.</p>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-foreground mb-1">Apply for Position</h2>
                                    <p className="text-primary font-semibold text-lg">{jobTitle}</p>
                                </div>

                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider ml-1">Full Name</label>
                                        <input
                                            required
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-all font-gilroy text-foreground placeholder:text-muted-foreground/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-all font-gilroy text-foreground placeholder:text-muted-foreground/50"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider ml-1">Why Sunbot?</label>
                                        <textarea
                                            required
                                            name="whysolar"
                                            value={formData.whysolar}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Tell us what excites you about joining our team..."
                                            className="w-full bg-muted/30 border border-border rounded-2xl px-5 py-3.5 outline-none focus:border-primary transition-all font-gilroy text-foreground placeholder:text-muted-foreground/50 resize-none"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider ml-1">Resume / CV</label>
                                        <div className="relative group flex items-center gap-4 p-4 border border-border rounded-2xl bg-muted/10 hover:border-primary/50 transition-colors cursor-pointer">
                                            <input
                                                required
                                                type="file"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                                                <Upload className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-foreground font-medium truncate">
                                                    {formData.resume ? formData.resume.name : "Choose File"}
                                                </p>
                                                <p className="text-xs text-muted-foreground uppercase tracking-tight">PDF, DOC, DOCX (Max 10MB)</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <GlowButton
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full"
                                        >
                                            {isSubmitting ? "Submitting..." : "Submit Application"}
                                        </GlowButton>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ApplicationForm;
