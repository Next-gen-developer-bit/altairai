// app/privacy/page.tsx
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-10">Back</Link>
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-10">Last updated: December 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <p>
            This Privacy Policy explains how <strong>Altair AI Solutions</strong> collects, uses, and protects your personal information when you access our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and usage data when you interact with our services.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Your information is used to improve our services, provide customer support, and communicate updates or relevant content.
          </p>

          <h2>3. Cookies and Tracking Technologies</h2>
          <p>
            We may use cookies and similar technologies to enhance user experience and analyze site performance.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement industry‑standard security measures to protect your personal data from unauthorized access or disclosure.
          </p>

          <h2>5. Sharing of Information</h2>
          <p>
            We do not sell your personal information. Data may be shared with trusted third‑party service providers who assist in service delivery.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data at any time by contacting us.
          </p>

          <h2>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Continued use of our services indicates acceptance of the updated policy.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please reach out:<br />
            <strong>Email:</strong> <a href="mailto:sociallabs101@gmail.com" className="text-purple-400 underline">sociallabs101@gmail.com</a><br />
            <strong>Postal Address:</strong> L-7, 1601, Amrapali Golf Homes, Near Gaur City Mall, Greater Noida, India – 201301
          </p>
        </div>
      </div>
    </div>
  );
}
