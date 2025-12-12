// app/terms/page.tsx
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10">Back</Link>
        <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-10">Last updated: December 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">

          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Altair AI Solutions</strong>. These Terms of Service ("Terms") govern your access to and use of our website and services.
            By accessing or using the service, you agree to be bound by these Terms.
          </p>

          <h2>2. Services Provided</h2>
          <p>
            Altair AI Solutions provides AI strategy, Autonomous Agent Development, Enterprise Consulting, and Chatbot Development.
            These services are subject to the terms and conditions outlined in this document.
          </p>

          <h2>3. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the new Terms on this site.
            Continued use of the service after changes means you agree to the updated Terms.
          </p>

          <h2>4. Account Registration and Use</h2>
          <p>
            You may need to create an account to access certain features. You agree to provide accurate and complete information and to keep it updated.
          </p>

          <h2>5. Privacy Policy</h2>
          <p>
            Our Privacy Policy explains how personal data is handled and forms part of these Terms.
          </p>

          <h2>6. User Conduct</h2>
          <p>
            You agree to use the service only for lawful purposes and not for any illegal or unauthorized activity.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All intellectual property rights related to the service are owned by Altair AI Solutions or its licensors.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            Our service may include links to third-party websites. We are not responsible for their content or practices.
          </p>

          <h2>9. Termination</h2>
          <p>
            We may suspend or terminate access to our service without prior notice if you violate these Terms.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, without regard to conflict of law rules.
          </p>

          <h2>11. Changes to Service</h2>
          <p>
            We may modify or discontinue parts of the service at any time without prior notice.
          </p>

          <h2>12. Disclaimer and Limitation of Liability</h2>
          <p>
            The service is provided "as is" without warranties. Altair AI Solutions is not liable for indirect, incidental, or consequential damages,
            including loss of profits, data, or goodwill.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            For questions about these Terms, please contact us:<br />
            <strong>Email:</strong> <a href="mailto:sociallabs101@gmail.com" className="text-purple-400 underline">sociallabs101@gmail.com</a><br />
            <strong>Postal Address:</strong> L-7, 1601, Amrapali Golf Homes, Near Gaur City Mall, Greater Noida, India – 201301
          </p>
        </div>
      </div>
    </div>
  );
}
