import { FileText, Users, CreditCard, Calendar, CheckCircle, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Read Instructions",
    icon: <FileText className="w-8 h-8 text-blue-900" />,
    description: "Read the Rules & Regulations carefully before seeking admission and strictly adhere to them. Ensure eligibility and required documents are ready."
  },
  {
    title: "Apply Online",
    icon: <Users className="w-8 h-8 text-blue-900" />,
    description: "Candidates seeking admission for B.A, B.Sc., and B.Com 1st semester must apply online at www.dce.kar.nic.in and follow detailed instructions."
  },
  {
    title: "Application Fee & Form",
    icon: <CreditCard className="w-8 h-8 text-blue-900" />,
    description: "Application form and prospectus will be issued on payment of Rs. 150. Complete the form with necessary certificates and submit to the college office."
  },
  {
    title: "Attend Interview",
    icon: <Calendar className="w-8 h-8 text-blue-900" />,
    description: "Students must attend an interview along with a parent/guardian above 40 years on the specified date. Admission is confirmed after verification by the Principal."
  },
  {
    title: "Submit Required Documents",
    icon: <FileCheck className="w-8 h-8 text-blue-900" />,
    description: `Submit hard copy of online application acknowledgement, Mark Cards, Caste & Income Certificates, Transfer Certificate, Character Certificate, and other required documents.`
  },
  {
    title: "Admission Confirmation",
    icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
    description: "Once all documents are verified and rules are satisfied, the Principal will confirm admission. Names of admitted students will be notified on the notice board."
  }
];

const HowToApply = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mt-8 mb-4">How to Apply</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow these steps carefully to ensure a smooth admission process at Anjuman Arts, Science & Commerce College, Bhatkal.
          </p>
        </div>

        {/* Steps / Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-shrink-0 mr-4">
                <div className="bg-blue-100 p-4 rounded-full">{step.icon}</div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-blue-900 mb-2">{step.title}</h2>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="mt-12 bg-blue-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Notes</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Admission is subject to compliance with college rules and regulations.</li>
            <li>All admissions are provisional and require Principal & College Board approval.</li>
            <li>Students must pay the prescribed fee at the time of admission.</li>
            <li>SC/ST/OBC/Minority students are advised to apply for scholarships and freeships.</li>
            <li>Late payments may result in cancellation of admission.</li>
            <li>Ensure submission of accurate documents for verification at the time of admission.</li>
          </ul>
        </div>

        {/* Academic Calendar Example */}
        <div className="mt-12 bg-yellow-50 p-6 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Academic Term & Vacation</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Last Date for Admission without Penal Fee: 10-07-2019</li>
            <li>1st, 3rd, 5th Semester Reopening Date: 18-06-2019</li>
            <li>Last Date with Penal Fee ₹610: 18-07-2019</li>
            <li>Last Working Day of 1st Term: 14-10-2019</li>
            <li>Mid-Term Vacation: 15-10-2019 to 15-12-2019</li>
            <li>Reopening of 2nd Term: 16-12-2019</li>
            <li>Last Working Day of 2nd Term: 10-04-2020</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
