import React from 'react';

export default function PrivacyPolicyPage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Turuke - Privacy Policy
                    </h1>
                    <p className="text-sm text-gray-500">
                        Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                </div>

                <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p>
                            Turuke ("we," "our," or "us") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Turuke mobile application (the "Service").
                        </p>
                        <p className="mt-2">
                            By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not use the Service.
                        </p>
                        <p className="mt-2 text-sm text-gray-600 italic">
                            Turuke operates in compliance with the Data Protection Act, 2019, of Kenya.
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                        <p>We collect several types of information from and about users of our Service, including:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>
                                <strong>Personal Information You Provide Directly:</strong>
                                <ul className="list-circle list-inside ml-5 mt-1">
                                    <li><strong>Account Registration:</strong> When you create an account, we may collect your name, email address, phone number, and password.</li>
                                    <li><strong>Support Communications:</strong> If you contact our support team, we collect the content of your communications and any contact information you provide.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Farm Operational Data You Input:</strong> This is the core data you manage within the Turuke app:
                                <ul className="list-circle list-inside ml-5 mt-1">
                                    <li><strong>Flock Data:</strong> Details about your poultry flocks (e.g., flock names, breeds, number of birds, acquisition dates).</li>
                                    <li><strong>Egg Production Data:</strong> Daily egg counts, production records, and associated notes.</li>
                                    <li><strong>Farm Performance Data:</strong> Any other data you input to track expenses, feed consumption, mortality, or other aspects of your farm's operation.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Automatically Collected Information (Usage Data):</strong> When you access and use the Service, we may automatically collect certain information:
                                <ul className="list-circle list-inside ml-5 mt-1">
                                    <li><strong>Device Information:</strong> Such as your mobile device ID, IP address, operating system, and browser type.</li>
                                    <li><strong>Usage Data:</strong> Information about how you interact with the app, including features used, screens viewed, and the time and date of your use.</li>
                                    <li><strong>Crash Reports:</strong> Information about crashes or errors in the app.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Location Information:</strong> We do NOT collect precise geographical location information from your device.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                        <p>We use the information we collect for various purposes, including to:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li><strong>Provide and Maintain the Service:</strong> To operate, maintain, and provide all features of the Service, including enabling you to track your poultry data and generate reports.</li>
                            <li><strong>Improve and Personalize the Service:</strong> To understand how you use the Service and to improve its functionality, performance, and user experience.</li>
                            <li><strong>Communicate with You:</strong> To send you technical notices, updates, security alerts, and support messages.</li>
                            <li><strong>Analyze Usage:</strong> To monitor and analyze trends, usage, and activities in connection with our Service.</li>
                            <li><strong>Ensure Security:</strong> To detect, prevent, and address technical issues, fraud, or other illegal activities.</li>
                            <li><strong>Comply with Legal Obligations:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                        </ul>
                        <p className="mt-2 font-semibold">
                            We do NOT sell your personal information or your farm operational data to third parties.
                        </p>
                    </section>

                    {/* How We Share Your Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
                        <p>We may share your information in the following limited circumstances:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf (e.g., hosting, analytics, customer support). These service providers are contractually obligated to protect your data and use it only for the purposes for which we disclose it to them.</li>
                            <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or government agency).</li>
                            <li><strong>To Protect Rights and Property:</strong> To enforce our Terms of Service, or to protect the rights, property, or safety of Turuke, our users, or others.</li>
                            <li><strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            <li><strong>With Your Consent:</strong> We may share your information with your explicit consent or at your direction.</li>
                            <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or de-identified information, which cannot reasonably be used to identify you, with third parties for various purposes, including analytics, research, or marketing.</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                        <p>
                            We implement reasonable security measures designed to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure socket layer technology. However, no internet or mobile transmission is ever entirely secure or error-free. We cannot guarantee the absolute security of your personal information.
                        </p>
                    </section>

                    {/* Data Retention */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                        <p>
                            We retain your personal information and farm operational data for as long as your account is active or as needed to provide you the Service. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Data Protection Rights</h2>
                        <p>In accordance with the Data Protection Act, 2019, of Kenya, you have the following rights regarding your personal data:</p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li><strong>The Right to be Informed:</strong> You have the right to be informed about the collection and use of your personal data.</li>
                            <li><strong>The Right to Access:</strong> You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                            <li><strong>The Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                            <li><strong>The Right to Erasure (to be Forgotten):</strong> You have the right to request that we erase your personal data, under certain conditions. Please refer to our <a href="/account-deletion" className="text-purple-600 hover:underline font-semibold">Account Deletion Page</a> for details on this process.</li>
                            <li><strong>The Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                            <li><strong>The Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                            <li><strong>The Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        </ul>
                        <p className="mt-2">
                            To exercise any of these rights, please contact us at <a href="mailto:support@turuke.co.ke" className="text-purple-600 hover:underline">support@turuke.co.ke</a>. We will respond to your request within one month.
                        </p>
                    </section>

                    {/* Offline Mode Data Handling */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Offline Mode Data Handling</h2>
                        <p>
                            Turuke offers an "Essential Offline Access" feature, allowing you to input data even without an internet connection. When you are offline, your data is stored locally on your device. Once your device reconnects to the internet, this locally stored data will automatically sync with our secure servers to ensure your records are up-to-date and accessible across devices (if multi-device access is supported). We take measures to ensure the integrity and security of your data during both offline storage and online synchronization.
                        </p>
                    </section>

                    {/* Third-Party Services */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
                        <p>
                            The Service may contain links to websites or services operated by third parties (e.g., Google Play Store for app download). This Privacy Policy does not apply to the practices of third parties that we do not own or control. We encourage you to review the privacy policies of any third-party services you access.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                        <p>
                            Our Service is not intended for use by individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
                        </p>
                    </section>

                    {/* Changes to This Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>By email: <a href="mailto:support@turuke.co.ke" className="text-purple-600 hover:underline">support@turuke.co.ke</a></li>
                        </ul>
                    </section>
                </div>

                <div className="mt-12 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Turuke. All rights reserved.</p>
                    <p className="mt-2 text-red-600 font-semibold">
                        THIS IS A DRAFT. CONSULT A LEGAL PROFESSIONAL FOR FINAL DOCUMENTATION AND COMPLIANCE WITH KENYAN DATA PROTECTION LAWS.
                    </p>
                </div>
            </div>
        </div>
    );
}