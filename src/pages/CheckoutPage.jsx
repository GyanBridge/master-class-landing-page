import { initiateRazorpayPayment } from '../utils/razorpay';
import React, { useState, } from 'react';
import { 
   ArrowRight, Check
} from 'lucide-react';

// Checkout Page Component
// const CheckoutPage = ({ onBack, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     countryCode: '+91'
//   });
//   const [upgradeSelected, setUpgradeSelected] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isProcessing, setIsProcessing] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone is required';
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = 'Phone must be 10 digits';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsProcessing(true);
    
//     // Simulate payment processing
//     setTimeout(() => {
//       const paymentData = {
//         ...formData,
//         orderId: 'ORD' + Date.now(),
//         transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
//         amount: upgradeSelected ? 999 : 2999,
//         upgradeSelected,
//         date: new Date().toLocaleString(),
//         paymentMethod: 'Razorpay'
//       };
      
//       onSuccess(paymentData);
//       setIsProcessing(false);
//     }, 2000);
//   };

//   const basePrice = 2999;
//   const upgradePrice = 999;
//   const finalPrice = upgradeSelected ? upgradePrice : basePrice;

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Christian Script Writing Masterclass</h1>
//             <p className="text-gray-600">Complete your enrollment</p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Form Section */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl shadow-lg p-8">
//                 <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Information</h2>
                
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Full name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({...formData, fullName: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
//                       placeholder="Enter your full name"
//                     />
//                     {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({...formData, email: e.target.value})}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
//                       placeholder="your@email.com"
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone <span className="text-red-500">*</span>
//                     </label>
//                     <div className="flex gap-2">
//                       <select
//                         value={formData.countryCode}
//                         onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
//                         className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
//                       >
//                         <option value="+91">🇮🇳 +91</option>
//                         <option value="+1">🇺🇸 +1</option>
//                         <option value="+44">🇬🇧 +44</option>
//                       </select>
//                       <input
//                         type="tel"
//                         value={formData.phone}
//                         onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                         className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
//                         placeholder="1234567890"
//                       />
//                     </div>
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isProcessing}
//                     className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
//                   >
//                     {isProcessing ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                         Processing...
//                       </>
//                     ) : (
//                       <>
//                         Continue to Payment
//                         <ArrowRight className="w-5 h-5" />
//                       </>
//                     )}
//                   </button>
//                 </form>

//                 <button
//                   onClick={onBack}
//                   className="w-full mt-4 text-red-500 hover:text-red-600 font-medium transition-colors"
//                 >
//                   « Go Back to Info
//                 </button>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
//                 <h3 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h3>
                
//                 <div className="space-y-4 mb-6">
//                   <div className="flex justify-between text-gray-700">
//                     <span>Christian Script Writing Masterclass</span>
//                     <span className="font-semibold">₹{basePrice}</span>
//                   </div>
                  
//                   <div className="border-t pt-4">
//                     <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
//                       <div className="flex items-start gap-3 mb-3">
//                         <input
//                           type="checkbox"
//                           id="upgrade"
//                           checked={upgradeSelected}
//                           onChange={(e) => setUpgradeSelected(e.target.checked)}
//                           className="mt-1 w-5 h-5 text-red-500 rounded focus:ring-red-500"
//                         />
//                         <label htmlFor="upgrade" className="flex-1 cursor-pointer">
//                           <span className="font-semibold text-green-700 block mb-2">
//                             ✓ Yes! Upgrade my access
//                           </span>
//                           <p className="text-sm text-gray-700">Exclusive benefits included:</p>
//                         </label>
//                       </div>
                      
//                       <ul className="space-y-2 text-sm text-gray-700 ml-8">
//                         <li className="flex items-start gap-2">
//                           <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span>Get 2 Year Course Validity</span>
//                         </li>
//                         <li className="flex items-start gap-2">
//                           <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span>Get 104 Live Sessions</span>
//                         </li>
//                         <li className="flex items-start gap-2">
//                           <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
//                           <span>7-day Risk Free Refund Policy</span>
//                         </li>
//                       </ul>
                      
//                       <div className="mt-3 pt-3 border-t border-blue-200 flex justify-between items-center">
//                         <span className="text-sm font-medium text-gray-700">Upgrade price:</span>
//                         <div className="flex items-center gap-2">
//                           <span className="text-gray-400 line-through text-sm">₹{basePrice}</span>
//                           <span className="text-lg font-bold text-green-700">₹{upgradePrice}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t pt-4 mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="text-gray-900">₹{finalPrice}</span>
//                   </div>
//                   {upgradeSelected && (
//                     <div className="flex justify-between items-center mb-2 text-green-600">
//                       <span>Discount</span>
//                       <span>-₹{basePrice - upgradePrice}</span>
//                     </div>
//                   )}
//                   <div className="flex justify-between items-center text-xl font-bold text-gray-900 mt-4">
//                     <span>Total</span>
//                     <span>₹{finalPrice}</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
//                   <svg className="w-12 h-8" viewBox="0 0 80 30" fill="none">
//                     <rect width="80" height="30" fill="#3395FF" rx="4"/>
//                     <text x="40" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Razorpay</text>
//                   </svg>
//                   <span>Secure payment by Razorpay</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// Checkout Page Component
const CheckoutPage = ({ onBack, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+91'
  });
  const [upgradeSelected, setUpgradeSelected] = useState(false);
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: '', title: '' });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showErrorModal = (title, message) => {
    setErrorModal({ show: true, title, message });
  };

  const closeErrorModal = () => {
    setErrorModal({ show: false, message: '', title: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    try {
      await initiateRazorpayPayment({
        amount: 99,
        customerData: formData,
        onSuccess: (paymentData) => {
          const completePaymentData = {
            ...paymentData,
            orderId: 'ORD' + Date.now(),
            date: new Date().toLocaleString(),
            paymentMethod: 'Razorpay'
          };
          onSuccess(completePaymentData);
          setIsProcessing(false);
        },
        onFailure: (error) => {
          setIsProcessing(false);
          showErrorModal('Payment Failed', error.message || 'Payment failed');
        }
      });
    } catch (error) {
      setIsProcessing(false);
      showErrorModal('Payment Error', 'Unable to initialize payment');
    }
  };

  const basePrice = 99;
  const finalPrice = basePrice;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              GyanBridge - Christian Script Writing <span className="text-red-500">Masterclass</span>
            </h1>
            <p className="text-gray-600">Complete your enrollment</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Customer Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                        className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </select>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                        placeholder="1234567890"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Continue to Payment
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>

                <button
                  onClick={onBack}
                  className="w-full mt-4 text-red-500 hover:text-red-600 font-medium transition-colors"
                >
                  « Go Back to Info
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>GyanBridge - Script Writing Masterclass</span>
                    <span className="font-semibold">₹{basePrice}</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold text-gray-900 mt-4">
                    <span>Total</span>
                    <span>₹{finalPrice}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  <svg className="w-12 h-8" viewBox="0 0 80 30" fill="none">
                    <rect width="80" height="30" fill="#3395FF" rx="4"/>
                    <text x="40" y="20" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Razorpay</text>
                  </svg>
                  <span>Secure payment by Razorpay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Error Modal */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            <div className="bg-red-500 px-6 py-4">
              <h3 className="text-white font-bold text-lg">{errorModal.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">{errorModal.message}</p>
              <div className="flex gap-3">
                <button
                  onClick={closeErrorModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    closeErrorModal();
                    // Retry payment by calling handleSubmit again
                    const form = document.querySelector('form');
                    if (form) {
                      const event = new Event('submit', { bubbles: true, cancelable: true });
                      form.dispatchEvent(event);
                    }
                  }}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;