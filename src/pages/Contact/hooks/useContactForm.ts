import { useState } from 'react';

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const useContactForm = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subjectPrefix = formData.subject ? `[${formData.subject.toUpperCase()}] ` : '';
        const emailSubject = `${subjectPrefix}Inquiry from ${formData.firstName} ${formData.lastName}`;

        const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject Category: ${formData.subject}

Message:
${formData.message}`;

        const mailtoUrl = `mailto:anjuman@anjuman.edu.in?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    return {
        formData,
        handleInputChange,
        handleSubmit
    };
};
