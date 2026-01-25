// utils/razorpay.js
// Razorpay Payment Integration Utility

/**
 * Load Razorpay script dynamically
 * @returns {Promise} Promise that resolves when script is loaded
 */
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      console.log('Razorpay script loaded successfully');
      resolve(true);
    };
    script.onerror = () => {
      console.error('Failed to load Razorpay script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

/**
 * Initialize Razorpay payment
 * @param {Object} options - Payment configuration options
 * @param {number} options.amount - Amount in rupees
 * @param {Object} options.customerData - Customer information
 * @param {boolean} options.upgradeSelected - Whether upgrade is selected
 * @param {Function} options.onSuccess - Success callback
 * @param {Function} options.onFailure - Failure callback
 * @returns {Promise} Promise that resolves with payment result
 */
export const initiateRazorpayPayment = async ({
  amount,
  customerData,
  upgradeSelected = false,
  onSuccess,
  onFailure
}) => {
  try {
    // Direct script loading without promise wrapper
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      document.head.appendChild(script);
      
      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });
    }

    const options = {
      key: 'rzp_live_RGndhGFHHpiPEW',
      amount: amount * 100,
      currency: 'INR',
      name: 'GyanBridge',
      description: 'Christian Script Writing Masterclass',
      prefill: {
        name: customerData.fullName,
        email: customerData.email,
        contact: customerData.phone
      },
      theme: {
        color: '#EF4444'
      },
      handler: function(response) {
        onSuccess({
          razorpay_payment_id: response.razorpay_payment_id,
          ...customerData,
          amount,
          status: 'success'
        });
      },
      modal: {
        ondismiss: function() {
          onFailure({ message: 'Payment cancelled' });
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    
  } catch (error) {
    onFailure({ message: error.message || 'Payment initialization failed' });
  }
};

/**
 * Verify payment signature (Should be done on backend in production)
 * This is a client-side example for demonstration
 * @param {Object} paymentData - Payment response data
 * @returns {boolean} Whether signature is valid
 */
export const verifyPaymentSignature = (paymentData) => {
  // WARNING: In production, ALWAYS verify signature on backend using your key_secret
  // This is just for demonstration
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = paymentData;
  
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return false;
  }
  
  // In production, send these to backend for verification using crypto
  // Backend should use: crypto.createHmac('sha256', key_secret).update(order_id + "|" + payment_id).digest('hex')
  
  return true; // Placeholder - implement backend verification
};

/**
 * Create order on backend (Template function)
 * In production, this should make an API call to your backend
 * @param {Object} orderData - Order details
 * @returns {Promise} Promise resolving to order details
 */
export const createRazorpayOrder = async (orderData) => {
  try {
    // In production, replace this with actual API call to your backend
    // const response = await fetch('/api/create-order', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(orderData)
    // });
    // return await response.json();
    
    // Placeholder return for demo
    return {
      order_id: 'order_' + Date.now(),
      amount: orderData.amount,
      currency: 'INR',
      status: 'created'
    };
  } catch (error) {
    console.error('Order creation error:', error);
    throw error;
  }
};

/**
 * Format amount for display
 * @param {number} amount - Amount in rupees
 * @returns {string} Formatted amount string
 */
export const formatAmount = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Get payment status message
 * @param {string} status - Payment status
 * @returns {Object} Status message and color
 */
export const getPaymentStatusInfo = (status) => {
  const statusMap = {
    success: {
      message: 'Payment Successful',
      color: 'green',
      icon: '✓'
    },
    pending: {
      message: 'Payment Pending',
      color: 'yellow',
      icon: '⏳'
    },
    failed: {
      message: 'Payment Failed',
      color: 'red',
      icon: '✗'
    },
    cancelled: {
      message: 'Payment Cancelled',
      color: 'gray',
      icon: '⊗'
    }
  };
  
  return statusMap[status] || statusMap.pending;
};

/**
 * Store payment details locally (for demo purposes)
 * In production, store in database via backend API
 * @param {Object} paymentData - Payment details to store
 */
export const storePaymentDetails = (paymentData) => {
  try {
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    payments.push({
      ...paymentData,
      storedAt: new Date().toISOString()
    });
    localStorage.setItem('payments', JSON.stringify(payments));
    return true;
  } catch (error) {
    console.error('Error storing payment details:', error);
    return false;
  }
};

/**
 * Retrieve payment details by order ID
 * @param {string} orderId - Order ID to retrieve
 * @returns {Object|null} Payment details or null
 */
export const getPaymentDetails = (orderId) => {
  try {
    const payments = JSON.parse(localStorage.getItem('payments') || '[]');
    return payments.find(p => p.razorpay_order_id === orderId) || null;
  } catch (error) {
    console.error('Error retrieving payment details:', error);
    return null;
  }
};

// Export default configuration
export default {
  loadRazorpayScript,
  initiateRazorpayPayment,
  verifyPaymentSignature,
  createRazorpayOrder,
  formatAmount,
  getPaymentStatusInfo,
  storePaymentDetails,
  getPaymentDetails
};