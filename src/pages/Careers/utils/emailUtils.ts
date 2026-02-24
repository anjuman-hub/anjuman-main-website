export const generateApplyNowEmail = (positionTitle: string) => {
    const subject = encodeURIComponent(`Application for ${positionTitle}`);
    const body = encodeURIComponent(
        `Dear Hiring Manager,

I am writing to express my interest in the position of ${positionTitle} at Anjuman Group of Institutions.

I believe my qualifications and experience align well with the requirements for this role. I have attached my resume/CV for your review.

I would welcome the opportunity to discuss how my skills and experience can contribute to your team.

Thank you for considering my application.

Best regards,
[Your Name]`
    );
    return `mailto:anjuman@anjuman.edu.in?subject=${subject}&body=${body}`;
};
