import React from 'react';
import { Mail, Trash2, ShieldOff } from 'lucide-react'; // Importing relevant icons

export default function AccountDeletionPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-3xl w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <Trash2 className="mx-auto h-12 w-12 text-purple-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Account Deletion
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We understand you may wish to delete your Turuke account. Please read the information below carefully.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {/* How to Delete */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <Mail className="h-6 w-6 text-purple-600 mr-3" />
              How to Delete Your Account
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To initiate the account deletion process, please send an email to our support team at:
              <br />
              <a
                href="mailto:support@turuke.co.ke"
                className="font-semibold text-purple-600 hover:text-purple-700 underline"
              >
                support@turuke.co.ke
              </a>
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              In your email, please include your registered email address or username associated with your Turuke account to help us verify your identity.
            </p>
          </div>

          {/* What Data Will Be Deleted */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <ShieldOff className="h-6 w-6 text-purple-600 mr-3" />
              What Data Will Be Deleted?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Upon successful verification of your deletion request, the following data associated with your Turuke account will be permanently removed from our active databases:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><strong>User Profile Information:</strong> This includes your name, contact details, and any other personal information provided during registration.</li>
              <li><strong>Flock Management Data:</strong> All records related to your poultry flocks, including flock names, breeds, and numbers.</li>
              <li><strong>Egg Production Records:</strong> Daily egg counts, production trends, and historical data.</li>
              <li><strong>Farm Performance Insights:</strong> Any generated reports, analytics, or aggregated data specific to your farm&apos;s performance within the app.</li>
              <li><strong>Login Credentials:</strong> Your username and hashed password.</li>
            </ul>
          </div>

          {/* How Data Will Be Handled */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <Trash2 className="h-6 w-6 text-purple-600 mr-3" />
              How Your Data Will Be Handled
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Once your deletion request is received and verified, we will initiate the process of permanently deleting your data. Please note the following:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
              <li><strong>Permanent Deletion:</strong> Your data will be permanently deleted from our primary systems within 30 days of a confirmed request.</li>
              <li><strong>Backup Systems:</strong> Residual copies of your data may remain in our backup systems for a limited period (up to 90 days) before being purged, in accordance with our data retention policies and for disaster recovery purposes. These backups are secured and not actively used.</li>
              <li><strong>Anonymized Data:</strong> We may retain anonymized and aggregated data (data that cannot be linked back to you personally) for statistical analysis and service improvement, but this will not contain any personally identifiable information.</li>
              <li><strong>No Recovery:</strong> Once your account and data are deleted, they cannot be recovered. We recommend backing up any information you wish to keep before submitting a deletion request.</li>
            </ul>
          </div>

          {/* Final Note */}
          <div className="mt-10 text-center p-6 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-lg font-semibold text-purple-800">
              If you have any questions or require further assistance, please do not hesitate to contact us at <a href="mailto:support@turuke.co.ke" className="text-purple-700 hover:underline">support@turuke.co.ke</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}