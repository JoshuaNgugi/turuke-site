import React from 'react';

export default function TermsOfServicePage() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Turuke - Terms of Service
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
                            Welcome to Turuke, a mobile application designed to assist small-scale poultry farmers with managing their flocks, tracking egg production, and analyzing farm performance (the "Service"). These Terms of Service ("Terms") govern your access to and use of the Turuke mobile application and any related services provided by Turuke.
                        </p>
                        <p className="mt-2">
                            By accessing or using our Service, you agree to be bound by these Terms and our <a href="/privacy-policy" className="text-purple-600 hover:underline font-semibold">Privacy Policy</a>. If you do not agree to these Terms, please do not use our Service.
                        </p>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Account Creation:</strong> To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</li>
                            <li><strong>Account Security:</strong> You are responsible for safeguarding your password and for any activities or actions under your account. Turuke cannot and will not be liable for any loss or damage arising from your failure to maintain the security of your account and password.</li>
                            <li><strong>Account Use:</strong> You agree to use your account only for the purpose for which it is provided, i.e., managing your own poultry farm. Sharing account access with unauthorized third parties is prohibited.</li>
                        </ul>
                    </section>

                    {/* Use of Service */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Service</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Permitted Use:</strong> You may use the Service only for lawful purposes and in accordance with these Terms. The Service is intended for personal and non-commercial use by small-scale poultry farmers.</li>
                            <li><strong>Prohibited Conduct:</strong> You agree not to:
                                <ul className="list-circle list-inside ml-5 mt-1">
                                    <li>Use the Service for any illegal purpose or in violation of any local, national, or international law.</li>
                                    <li>Transmit any material that is defamatory, offensive, or otherwise objectionable.</li>
                                    <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service.</li>
                                    <li>Attempt to interfere with or compromise the system integrity or security or decipher any transmissions to or from the servers running the Service.</li>
                                    <li>Upload or transmit viruses or any other type of malicious code.</li>
                                    <li>Use the Service to generate false or misleading data.</li>
                                </ul>
                            </li>
                            <li><strong>Data Accuracy:</strong> You are solely responsible for the accuracy, quality, integrity, legality, reliability, and appropriateness of all data you input into the Service (e.g., flock numbers, egg production). Turuke is not responsible for any inaccuracies or issues arising from incorrect data entry.</li>
                            <li><strong>Not Veterinary Advice:</strong> The insights and reports provided by Turuke are for management and informational purposes only and are not a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of a qualified veterinarian for any questions you may have regarding your poultry's health.</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                        <p>
                            The Service and its original content, features, and functionality are and will remain the exclusive property of Turuke and its licensors. The Service is protected by copyright, trademark, and other laws of both Kenya and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Turuke.
                        </p>
                    </section>

                    {/* User Generated Content */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Generated Content</h2>
                        <p>
                            You retain ownership of any data, information, or materials you submit, post, or display on or through the Service ("User Content"). By submitting User Content, you grant Turuke a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, modify, adapt, publish, distribute, and display such User Content in connection with providing and improving the Service. This license terminates when you delete your User Content or your account, unless your User Content has been shared with others, and they have not deleted it.
                        </p>
                        <p className="mt-2">
                            You are responsible for your User Content and the consequences of submitting it. You agree that you will not submit material that is copyrighted, protected by trade secret, or otherwise subject to third-party proprietary rights, including privacy and publicity rights, unless you are the owner of such rights or have permission from their rightful owner to post the material and to grant Turuke all of the license rights granted herein.
                        </p>
                    </section>

                    {/* Privacy Policy */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy Policy</h2>
                        <p>
                            Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and disclose information about you. Please read our <a href="/privacy-policy" className="text-purple-600 hover:underline font-semibold">Privacy Policy</a> carefully.
                        </p>
                    </section>

                    {/* Disclaimers */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimers</h2>
                        <p>
                            THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TURUKE MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS AND NEGATES ALL OTHER WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT OF INTELLECTUAL PROPERTY OR OTHER VIOLATION OF RIGHTS. FURTHER, TURUKE DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS CONCERNING THE ACCURACY, LIKELY RESULTS, OR RELIABILITY OF THE USE OF THE MATERIALS ON ITS INTERNET WEBSITE OR OTHERWISE RELATING TO SUCH MATERIALS OR ON ANY SITES LINKED TO THIS SITE.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                        <p>
                            IN NO EVENT SHALL TURUKE OR ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF THE USE OR INABILITY TO USE THE MATERIALS ON TURUKE'S SERVICE, EVEN IF TURUKE OR A TURUKE AUTHORIZED REPRESENTATIVE HAS BEEN NOTIFIED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE. BECAUSE SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES, OR LIMITATIONS OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THESE LIMITATIONS MAY NOT APPLY TO YOU.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless Turuke, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your (or anyone using your account's) violation of these Terms.
                        </p>
                    </section>

                    {/* Modifications to Terms */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modifications to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                        </p>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may do so by following the instructions on our <a href="/account-deletion" className="text-purple-600 hover:underline font-semibold">Account Deletion</a> page or by contacting us.
                        </p>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    {/* Severability */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Severability</h2>
                        <p>
                            If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                        </p>
                    </section>

                    {/* Entire Agreement */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Entire Agreement</h2>
                        <p>
                            These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li>By email: <a href="mailto:support@turuke.co.ke" className="text-purple-600 hover:underline">support@turuke.co.ke</a></li>
                        </ul>
                    </section>
                </div>

            </div>
        </div>
    );
}