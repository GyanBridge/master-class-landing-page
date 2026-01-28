// utils/pdfGenerator.js
// PDF Receipt Generation Utility using jsPDF

/**
 * Load jsPDF library dynamically
 * @returns {Promise} Promise that resolves when library is loaded
 */
export const loadJsPDF = () => {
  return new Promise((resolve, reject) => {
    if (window.jspdf) {
      resolve(window.jspdf);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.onload = () => resolve(window.jspdf);
    script.onerror = () => reject(new Error('Failed to load jsPDF'));
    document.body.appendChild(script);
  });
};

/**
 * Generate and download payment receipt PDF
 * @param {Object} receiptData - Receipt information
 * @returns {Promise} Promise that resolves when PDF is generated
 */
export const generateReceiptPDF = async (receiptData) => {
  try {
    // Try to load jsPDF
    let jsPDF;
    if (window.jspdf) {
      jsPDF = window.jspdf.jsPDF;
    } else {
      // Load jsPDF dynamically
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      document.head.appendChild(script);
      
      await new Promise((resolve, reject) => {
        script.onload = () => {
          if (window.jspdf) {
            jsPDF = window.jspdf.jsPDF;
            resolve();
          } else {
            reject(new Error('jsPDF not loaded'));
          }
        };
        script.onerror = () => reject(new Error('Failed to load jsPDF'));
      });
    }

    if (!jsPDF) {
      throw new Error('jsPDF library not available');
    }

    const doc = new jsPDF();
    
    const {
      orderId = 'N/A',
      transactionId = 'N/A',
      fullName = 'N/A',
      email = 'N/A',
      phone = 'N/A',
      countryCode = '+91',
      amount = '99',
      upgradeSelected = false,
      date = new Date().toLocaleString(),
      paymentMethod = 'Razorpay'
    } = receiptData;

    // Simple PDF layout
    let y = 20;
    
    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('GyanBridge', 105, y, { align: 'center' });
    y += 10;
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Payment Receipt', 105, y, { align: 'center' });
    y += 20;
    
    // Receipt details
    doc.setFontSize(12);
    doc.text(`Receipt #: ${orderId}`, 20, y);
    doc.text(`Date: ${date}`, 150, y);
    y += 20;
    
    // Customer details
    doc.setFont('helvetica', 'bold');
    doc.text('Customer Details:', 20, y);
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${fullName}`, 20, y);
    y += 7;
    doc.text(`Email: ${email}`, 20, y);
    y += 7;
    doc.text(`Phone: ${countryCode} ${phone}`, 20, y);
    y += 20;
    
    // Course details
    doc.setFont('helvetica', 'bold');
    doc.text('Course Details:', 20, y);
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text('Course: GyanBridge - Script Writing Masterclass', 20, y);
    y += 7;
    doc.text('Access Period: 2 Years', 20, y);
    y += 7;
    doc.text('Duration: 8 Weeks', 20, y);
    y += 20;
    
    // Payment details
    doc.setFont('helvetica', 'bold');
    doc.text('Payment Details:', 20, y);
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text(`Amount Paid: ₹${amount}`, 20, y);
    y += 7;
    doc.text(`Payment Method: ${paymentMethod}`, 20, y);
    y += 7;
    doc.text(`Transaction ID: ${transactionId}`, 20, y);
    y += 20;
    
    // Inclusions
    doc.setFont('helvetica', 'bold');
    doc.text('What\'s Included:', 20, y);
    y += 10;
    doc.setFont('helvetica', 'normal');
    const inclusions = [
      '✓ Complete Course Materials',
      '✓ 2 Year Access',
      '✓ 7-Day Refund Policy',
      '✓ Certificate of Completion'
    ];
    
    inclusions.forEach(item => {
      doc.text(item, 20, y);
      y += 7;
    });
    
    y += 20;
    
    // Footer
    doc.setFont('helvetica', 'bold');
    doc.text('Thank you for enrolling!', 105, y, { align: 'center' });
    y += 10;
    doc.setFont('helvetica', 'normal');
    doc.text('Support: support@GyanBridge.in | +91 91370 23462', 105, y, { align: 'center' });
    
    // Save the PDF
    doc.save(`GyanBridge-Receipt-${orderId}.pdf`);
    
    return {
      success: true,
      message: 'Receipt downloaded successfully'
    };
    
  } catch (error) {
    console.error('PDF generation error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

/**
 * Generate receipt as HTML string (for email or display)
 * @param {Object} receiptData - Receipt information
 * @returns {string} HTML formatted receipt
 */
export const generateReceiptHTML = (receiptData) => {
  const {
    orderId,
    transactionId,
    fullName,
    email,
    phone,
    countryCode,
    amount,
    upgradeSelected,
    date,
    paymentMethod
  } = receiptData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%); color: white; padding: 30px; text-align: center; border-radius: 10px; }
        .section { margin: 20px 0; padding: 20px; background: #f9fafb; border-radius: 8px; }
        .section-title { font-size: 18px; font-weight: bold; color: #1f2937; margin-bottom: 15px; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
        .detail-row { display: flex; justify-content: space-between; padding: 8px 0; }
        .label { color: #6b7280; }
        .value { font-weight: 600; color: #111827; }
        .highlight { background: #dcfce7; padding: 20px; border-radius: 8px; }
        .amount { font-size: 24px; color: #059669; font-weight: bold; }
        .inclusion { padding: 5px 0; color: #374151; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Script Writing Masterclass</h1>
        <p>Payment Receipt</p>
      </div>
      
      <div style="background: #f3f4f6; padding: 15px; margin: 20px 0; border-radius: 8px;">
        <div style="display: flex; justify-content: space-between;">
          <span><strong>Receipt #:</strong> ${orderId}</span>
          <span><strong>Date:</strong> ${date}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Customer Details</div>
        <div class="detail-row">
          <span class="label">Name:</span>
          <span class="value">${fullName}</span>
        </div>
        <div class="detail-row">
          <span class="label">Email:</span>
          <span class="value">${email}</span>
        </div>
        <div class="detail-row">
          <span class="label">Phone:</span>
          <span class="value">${countryCode} ${phone}</span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Course Details</div>
        <div class="detail-row">
          <span class="label">Course Name:</span>
          <span class="value">Christian Script Writing & Creative Ministry Class</span>
        </div>
        <div class="detail-row">
          <span class="label">Access Period:</span>
          <span class="value">2 Years</span>
        </div>
        <div class="detail-row">
          <span class="label">Live Sessions:</span>
          <span class="value">104 Sessions</span>
        </div>
      </div>

      <div class="highlight">
        <div class="section-title">Payment Details</div>
        <div class="detail-row">
          <span class="label">Amount Paid:</span>
          <span class="amount">₹${amount}</span>
        </div>
        <div class="detail-row">
          <span class="label">Payment Method:</span>
          <span class="value">${paymentMethod}</span>
        </div>
        <div class="detail-row">
          <span class="label">Transaction ID:</span>
          <span class="value">${transactionId}</span>
        </div>
        ${upgradeSelected ? `
        <div class="detail-row">
          <span class="label">Package:</span>
          <span class="value" style="color: #059669;">Premium Upgrade ✓</span>
        </div>
        ` : ''}
      </div>

      <div class="section">
        <div class="section-title">What's Included</div>
        <div class="inclusion">✓ 104 Live Sessions with Instructor</div>
        <div class="inclusion">✓ 2 Year Course Validity</div>
        <div class="inclusion">✓ 7-Day Risk Free Refund Policy</div>
        <div class="inclusion">✓ Certificate of Completion</div>
        <div class="inclusion">✓ Community Access & Support</div>
        <div class="inclusion">✓ Lifetime Learning Resources</div>
      </div>

      <div style="background: #f3f4f6; padding: 20px; text-align: center; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #8B5CF6; margin: 0 0 10px 0;">Thank you for enrolling!</h3>
        <p style="margin: 0; color: #6b7280;">Welcome to the Script Writing Masterclass community</p>
      </div>

      <div class="footer">
        <p>Need help? Contact us at <strong style="color: #2563eb;">support@christianmasterclass.com</strong></p>
        <p style="font-size: 12px;">© 2025 Script Writing Masterclass. All rights reserved.</p>
      </div>
    </body>
    </html>
  `;
};

/**
 * Print receipt directly
 * @param {Object} receiptData - Receipt information
 */
export const printReceipt = (receiptData) => {
  const htmlContent = generateReceiptHTML(receiptData);
  const printWindow = window.open('', '_blank');
  printWindow.document.write(htmlContent);
  printWindow.document.close();
  printWindow.print();
};

/**
 * Send receipt via email (template function)
 * In production, this should make an API call to your backend
 * @param {Object} receiptData - Receipt information
 * @returns {Promise} Promise resolving to send status
 */
export const emailReceipt = async (receiptData) => {
  try {
    const htmlContent = generateReceiptHTML(receiptData);
    
    // In production, send this to your backend email service
    // const response = await fetch('/api/send-receipt', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     to: receiptData.email,
    //     subject: `Payment Receipt - ${receiptData.orderId}`,
    //     html: htmlContent
    //   })
    // });
    // return await response.json();
    
    console.log('Email receipt to:', receiptData.email);
    return {
      success: true,
      message: 'Receipt sent successfully'
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const generatePDFReceipt = generateReceiptPDF;

// Export all functions
export default {
  generateReceiptPDF,
  generateReceiptHTML,
  printReceipt,
  emailReceipt,
  loadJsPDF
};