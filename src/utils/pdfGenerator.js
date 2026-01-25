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
    const { jsPDF } = await loadJsPDF();
    const doc = new jsPDF();
    
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

    // Page dimensions
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = 20;

    // Helper function to add text
    const addText = (text, x, y, options = {}) => {
      doc.setFontSize(options.fontSize || 12);
      doc.setFont(options.font || 'helvetica', options.style || 'normal');
      doc.text(text, x, y);
    };

    // Helper function to draw line
    const drawLine = (y) => {
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y, pageWidth - margin, y);
    };

    // ==================== HEADER ====================
    // Company Logo/Name
    doc.setFillColor(139, 92, 246); // Purple
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 25, 'F');
    
    doc.setTextColor(255, 255, 255);
    addText('GyanBridge', pageWidth / 2, yPosition + 6, {
      fontSize: 18,
      style: 'bold'
    });
    addText('Script Writing Masterclass', pageWidth / 2, yPosition + 14, {
      fontSize: 14,
      style: 'normal'
    });
    addText('Payment Receipt', pageWidth / 2, yPosition + 20, {
      fontSize: 12,
      style: 'normal'
    });
    doc.setTextColor(0, 0, 0);
    
    yPosition += 35;

    // Receipt Number and Date
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 20, 'F');
    
    addText(`Receipt #: ${orderId}`, margin + 5, yPosition + 8, { fontSize: 10 });
    addText(`Date: ${date}`, margin + 5, yPosition + 15, { fontSize: 10 });
    
    yPosition += 30;

    // ==================== CUSTOMER DETAILS ====================
    addText('CUSTOMER DETAILS', margin, yPosition, {
      fontSize: 14,
      style: 'bold'
    });
    yPosition += 8;
    drawLine(yPosition);
    yPosition += 10;

    addText(`Name: ${fullName}`, margin, yPosition);
    yPosition += 7;
    addText(`Email: ${email}`, margin, yPosition);
    yPosition += 7;
    addText(`Phone: ${countryCode} ${phone}`, margin, yPosition);
    yPosition += 15;

    // ==================== COURSE DETAILS ====================
    addText('COURSE DETAILS', margin, yPosition, {
      fontSize: 14,
      style: 'bold'
    });
    yPosition += 8;
    drawLine(yPosition);
    yPosition += 10;

    addText('Course Name:', margin, yPosition, { style: 'bold' });
    yPosition += 7;
    addText('GyanBridge - Christian Script Writing & Creative Ministry Class', margin, yPosition, {
      fontSize: 11
    });
    yPosition += 10;

    addText('Duration: Self-paced', margin, yPosition);
    yPosition += 7;
    addText('Access Period: 2 Years', margin, yPosition);
    yPosition += 7;
    addText('Live Sessions: 104 Sessions', margin, yPosition);
    yPosition += 15;

    // ==================== PAYMENT DETAILS ====================
    addText('PAYMENT DETAILS', margin, yPosition, {
      fontSize: 14,
      style: 'bold'
    });
    yPosition += 8;
    drawLine(yPosition);
    yPosition += 10;

    // Payment breakdown
    doc.setFillColor(240, 253, 244); // Light green
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 45, 'F');
    
    yPosition += 8;
    
    const labelX = margin + 5;
    const valueX = pageWidth - margin - 5;
    
    addText('Amount Paid:', labelX, yPosition);
    addText(`₹${amount}`, valueX, yPosition, {
      style: 'bold',
      fontSize: 14
    });
    yPosition += 10;
    
    addText('Payment Method:', labelX, yPosition);
    addText(paymentMethod, valueX, yPosition);
    yPosition += 10;
    
    addText('Transaction ID:', labelX, yPosition);
    addText(transactionId, valueX, yPosition, { fontSize: 10 });
    yPosition += 10;
    
    if (upgradeSelected) {
      addText('Package:', labelX, yPosition);
      addText('Premium Upgrade ✓', valueX, yPosition, {
        style: 'bold'
      });
      yPosition += 10;
    }
    
    yPosition += 10;

    // ==================== INCLUSIONS ====================
    addText('WHAT\'S INCLUDED', margin, yPosition, {
      fontSize: 14,
      style: 'bold'
    });
    yPosition += 8;
    drawLine(yPosition);
    yPosition += 10;

    const inclusions = [
      '✓ 104 Live Sessions with Instructor',
      '✓ 2 Year Course Validity',
      '✓ 7-Day Risk Free Refund Policy',
      '✓ Certificate of Completion',
      '✓ Community Access & Support',
      '✓ Lifetime Learning Resources'
    ];

    inclusions.forEach(inclusion => {
      addText(inclusion, margin + 5, yPosition, { fontSize: 11 });
      yPosition += 7;
    });

    yPosition += 15;

    // ==================== FOOTER ====================
    // Thank you message
    doc.setFillColor(245, 245, 245);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 25, 'F');
    
    doc.setTextColor(139, 92, 246); // Purple
    addText('Thank you for enrolling!', pageWidth / 2, yPosition + 10, {
      fontSize: 14,
      style: 'bold'
    });
    doc.setTextColor(0, 0, 0);
    
    addText('Welcome to the Script Writing Masterclass community', pageWidth / 2, yPosition + 18, {
      fontSize: 10
    });
    
    yPosition += 35;

    // Support information
    addText('Need help? Contact us:', margin, yPosition, { fontSize: 10 });
    yPosition += 6;
    doc.setTextColor(37, 99, 235); // Blue
    addText('support@GyanBridge.com', margin, yPosition, {
      fontSize: 10,
      style: 'bold'
    });
    doc.setTextColor(0, 0, 0);
    yPosition += 6;
    doc.setTextColor(37, 99, 235);
    addText('+91 91370 23462', margin, yPosition, {
      fontSize: 10,
      style: 'bold'
    });
    doc.setTextColor(0, 0, 0);

    // Footer line
    yPosition = doc.internal.pageSize.height - 20;
    drawLine(yPosition);
    yPosition += 6;
    addText('© 2025 GyanBridge. All rights reserved.', pageWidth / 2, yPosition, {
      fontSize: 8
    });

    // Save the PDF
    doc.save(`Receipt-${orderId}.pdf`);
    
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