import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Payments({ paymentsList = [] }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPayments = paymentsList.filter(pay => 
    pay.invoiceId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pay.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'status-badge confirmed';
      case 'pending':
        return 'status-badge pending';
      case 'refunded':
        return 'status-badge cancelled';
      default:
        return 'status-badge';
    }
  };

  // Dynamic calculations
  const netEarnings = paymentsList
    .filter(pay => pay.status.toLowerCase() === 'completed')
    .reduce((sum, pay) => sum + pay.amount, 0);

  const pendingPayments = paymentsList
    .filter(pay => pay.status.toLowerCase() === 'pending')
    .reduce((sum, pay) => sum + pay.amount, 0);

  const refundedPayments = paymentsList
    .filter(pay => pay.status.toLowerCase() === 'refunded')
    .reduce((sum, pay) => sum + pay.amount, 0);

  const netEarningsCount = paymentsList.filter(pay => pay.status.toLowerCase() === 'completed').length;
  const pendingPaymentsCount = paymentsList.filter(pay => pay.status.toLowerCase() === 'pending').length;
  const refundedPaymentsCount = paymentsList.filter(pay => pay.status.toLowerCase() === 'refunded').length;

  return (
    <div className="container-fluid px-0">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Financial Transactions</h2>
        <p className="text-muted mb-0">Monitor billing records, payment gateway methods, status tracking, and download invoices.</p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-12 col-md-4">
          <div className="glass-card" style={{ borderLeft: '4px solid #10b981' }}>
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>NET EARNINGS</span>
            <h3 className="fw-extrabold mb-1 mt-2 text-success">₹{netEarnings.toLocaleString()}</h3>
            <small className="text-muted">From {netEarningsCount} bookings</small>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="glass-card" style={{ borderLeft: '4px solid #f59e0b' }}>
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>PENDING PAYMENTS</span>
            <h3 className="fw-extrabold mb-1 mt-2 text-warning">₹{pendingPayments.toLocaleString()}</h3>
            <small className="text-muted">{pendingPaymentsCount} approvals required</small>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="glass-card" style={{ borderLeft: '4px solid #ef4444' }}>
            <span className="text-muted fw-semibold" style={{ fontSize: '0.8rem' }}>REFUNDED TRANSACTIONS</span>
            <h3 className="fw-extrabold mb-1 mt-2 text-danger">₹{refundedPayments.toLocaleString()}</h3>
            <small className="text-muted">{refundedPaymentsCount} refund complete</small>
          </div>
        </div>
      </div>

      <div className="glass-card mb-4">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="nav-search-bar w-100">
              <i className="fas fa-search"></i>
              <input 
                type="text" 
                placeholder="Search Invoice ID, Customer..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ height: '42px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card">
        <div className="custom-table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Customer Name</th>
                <th>Amount Billed</th>
                <th>Due / Paid Date</th>
                <th>Method</th>
                <th>Status</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayments.length > 0 ? (
                filteredPayments.map((pay) => (
                  <tr key={pay.id}>
                    <td className="fw-semibold text-primary">{pay.invoiceId}</td>
                    <td className="fw-semibold">{pay.customerName}</td>
                    <td className="fw-bold">₹{pay.amount.toLocaleString()}</td>
                    <td>{pay.date}</td>
                    <td>
                      <span className="d-flex align-items-center gap-2">
                        <i className={pay.method === 'PayPal' ? 'fab fa-paypal text-primary' : pay.method === 'Credit Card' ? 'fas fa-credit-card text-success' : 'fas fa-university text-info'}></i>
                        {pay.method}
                      </span>
                    </td>
                    <td>
                      <span className={getStatusBadge(pay.status)}>
                        {pay.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-sm btn-outline-light border border-secondary border-opacity-20 p-2"
                        title="Download PDF Invoice"
                        style={{ color: 'var(--text-main)', borderRadius: '8px' }}
                        onClick={() => toast.success(`Downloading invoice PDF for ${pay.invoiceId}...`)}
                      >
                        <i className="fas fa-download"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">No payments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payments;
