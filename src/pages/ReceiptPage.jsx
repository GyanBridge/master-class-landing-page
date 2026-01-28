import { generatePDFReceipt } from '../utils/pdfGenerator';
import React from 'react';
import { BookOpen, Sparkles, CheckCircle, Download, User, ArrowRight, Check} from 'lucide-react';

// Receipt Page Component
// const ReceiptPage = ({ data }) => {
//   const downloadReceipt = () => {
//     const receiptContent = `
//       PAYMENT RECEIPT
//       =====================================
      
//       Receipt #: ${data.orderId}
//       Date: ${data.date}
      
//       CUSTOMER DETAILS
//       Name: ${data.fullName}
//       Email: ${data.email}
//       Phone: ${data.countryCode} ${data.phone}
      
//       COURSE DETAILS
//       Christian Script Writing & Creative Ministry Masterclass
//       Duration: Self-paced
//       Access: 2 Years
      
//       PAYMENT DETAILS
//       Amount Paid: ₹${data.amount}
//       Payment Method: ${data.paymentMethod}
//       Transaction ID: ${data.transactionId}
      
//       INCLUSIONS
//       ${data.upgradeSelected ? '✓ Premium Upgrade' : '✓ Standard Access'}
//       ✓ 104 Live Sessions
//       ✓ 2 Year Course Validity
//       ✓ 7-Day Refund Policy
//       ✓ Certificate of Completion
      
//       Thank you for enrolling!
      
//       Support: support@christianmasterclass.com
//     `;
    
//     const blob = new Blob([receiptContent], { type: 'text/plain' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `Receipt-${data.orderId}.txt`;
//     a.click();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-3xl mx-auto">
//           {/* Success Animation */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 animate-bounce">
//               <CheckCircle className="w-12 h-12 text-white" />
//             </div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment Successful! 🎉</h1>
//             <p className="text-xl text-gray-600">Welcome to the Christian Script Writing Masterclass</p>
//           </div>

//           {/* Receipt Card */}
//           <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
//             <div className="border-b pb-6 mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Receipt</h2>
//               <div className="flex justify-between text-sm text-gray-600">
//                 <span>Receipt #: {data.orderId}</span>
//                 <span>{data.date}</span>
//               </div>
//             </div>

//             {/* Customer Details */}
//             <div className="mb-6">
//               <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                 <User className="w-5 h-5" />
//                 Customer Details
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Name:</span>
//                   <span className="font-medium text-gray-900">{data.fullName}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Email:</span>
//                   <span className="font-medium text-gray-900">{data.email}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Phone:</span>
//                   <span className="font-medium text-gray-900">{data.countryCode} {data.phone}</span>
//                 </div>
//               </div>
//             </div>

//             {/* Course Details */}
//             <div className="mb-6">
//               <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                 <BookOpen className="w-5 h-5" />
//                 Course Details
//               </h3>
//               <div className="bg-gray-50 rounded-lg p-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Course:</span>
//                   <span className="font-medium text-gray-900">Christian Script Writing Masterclass</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Access Period:</span>
//                   <span className="font-medium text-gray-900">2 Years</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Live Sessions:</span>
//                   <span className="font-medium text-gray-900">104 Sessions</span>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Details */}
//             <div className="mb-6">
//               <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
//                 <CheckCircle className="w-5 h-5" />
//                 Payment Details
//               </h3>
//               <div className="bg-green-50 rounded-lg p-4 space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Amount Paid:</span>
//                   <span className="font-bold text-green-700 text-xl">₹{data.amount}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Payment Method:</span>
//                   <span className="font-medium text-gray-900">{data.paymentMethod}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Transaction ID:</span>
//                   <span className="font-medium text-gray-900">{data.transactionId}</span>
//                 </div>
//                 {data.upgradeSelected && (
//                   <div className="pt-2 border-t border-green-200">
//                     <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//                       <Sparkles className="w-4 h-4" />
//                       Premium Upgrade Activated
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Inclusions */}
//             <div className="mb-6">
//               <h3 className="font-semibold text-gray-900 mb-3">What's Included</h3>
//               <div className="grid sm:grid-cols-2 gap-3">
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <Check className="w-5 h-5 text-green-600" />
//                   <span>104 Live Sessions</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <Check className="w-5 h-5 text-green-600" />
//                   <span>2 Year Access</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <Check className="w-5 h-5 text-green-600" />
//                   <span>7-Day Refund Policy</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-700">
//                   <Check className="w-5 h-5 text-green-600" />
//                   <span>Certificate</span>
//                 </div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button
//                 onClick={downloadReceipt}
//                 className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 <Download className="w-5 h-5" />
//                 Download Receipt
//               </button>
//               <button
//                 className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
//               >
//                 Access Course Now
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Support Info */}
//           <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
//             <p className="text-gray-700">
//               Need help? Contact us at{' '}
//               <a href="mailto:support@christianmasterclass.com" className="text-blue-600 font-semibold hover:underline">
//                 support@christianmasterclass.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Receipt Page Component
const ReceiptPage = ({ data }) => {
  const downloadReceipt = async () => {
    try {
      const result = await generatePDFReceipt({
        ...data,
        transactionId: data.razorpay_payment_id || data.transactionId || 'N/A',
        countryCode: data.countryCode || '+91'
      });
      
      if (!result.success) {
        alert('Failed to generate PDF: ' + result.error);
      }
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment Successful! 🎉</h1>
            <p className="text-xl text-gray-600">Welcome to GyanBridge - Script Writing Masterclass</p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Receipt</h2>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Receipt #: {data.orderId}</span>
                <span>{data.date}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Details
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-900">{data.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">{data.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium text-gray-900">{data.countryCode} {data.phone}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Course Details
              </h3>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course:</span>
                  <span className="font-medium text-gray-900">GyanBridge - Script Writing Masterclass</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Access Period:</span>
                  <span className="font-medium text-gray-900">2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium text-gray-900">8 Weeks</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Payment Details
              </h3>
              <div className="bg-green-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-green-700 text-xl">₹{data.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium text-gray-900">{data.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-medium text-gray-900">{data.transactionId}</span>
                </div>
                {data.upgradeSelected && (
                  <div className="pt-2 border-t border-green-200">
                    <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      Premium Upgrade Activated
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Complete Course Materials</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>2 Year Access</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>7-Day Refund Policy</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Certificate</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={downloadReceipt}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Receipt
              </button>
              <button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Access Course Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <p className="text-gray-700">
              Need help? Contact us at{' '}
              <a href="mailto:support@GyanBridge.in" className="text-blue-600 font-semibold hover:underline">
                support@GyanBridge.in
              </a>
              {' '}or call{' '}
              <a href="tel:+919137023462" className="text-blue-600 font-semibold hover:underline">
                +91 91370 23462
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;