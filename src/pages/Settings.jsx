import React, { useState } from 'react';
import { toast } from 'react-toastify';
import adminImage from '../assets/admin image.jpeg';

function Settings({ onResetSystemData }) {
  const [profile, setProfile] = useState({
    name: 'Om Tank',
    email: 'omtank@gmail.com',
    password: '••••••••••••'
  });

  const [sysConfig, setSysConfig] = useState({
    currency: 'INR',
    timezone: 'UTC+5:30',
    notifications: true,
    autoApprove: false
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    toast.success("Admin profile updated successfully!");
  };

  const handleSysSave = (e) => {
    e.preventDefault();
    toast.success("System configurations saved!");
  };

  return (
    <div className="container-fluid px-0">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">System Settings</h2>
        <p className="text-muted mb-0">Update admin profile credentials, system currency parameters, and adjust alert notifications.</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div className="glass-card h-100">
            <h5 className="fw-bold mb-4 pb-2 border-bottom border-secondary border-opacity-10">Admin Profile Settings</h5>
            
            <form onSubmit={handleProfileSave}>
              <div className="mb-3">
                <label className="form-label">Profile Image</label>
                <div className="d-flex align-items-center gap-3">
                  <img 
                    src={adminImage} 
                    alt="Admin Avatar"
                    className="rounded-circle"
                    style={{ width: '64px', height: '64px', objectFit: 'cover', border: '3px solid var(--secondary)' }}
                  />
                  <button type="button" className="btn btn-sm btn-outline-light border border-secondary border-opacity-20 text-muted" onClick={() => toast.info("Profile image uploader triggered (Mocked)")}>Change Avatar</button>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="adminName" className="form-label">Full Name</label>
                <input 
                  type="text" 
                  id="adminName"
                  className="form-control" 
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="adminEmail" className="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="adminEmail"
                  className="form-control" 
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="adminPass" className="form-label">Change Password</label>
                <input 
                  type="password" 
                  id="adminPass"
                  className="form-control" 
                  placeholder="Enter new password"
                  onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary px-4 py-2 w-100">Update Profile</button>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="glass-card h-100">
            <h5 className="fw-bold mb-4 pb-2 border-bottom border-secondary border-opacity-10">System Configurations</h5>
            
            <form onSubmit={handleSysSave}>
              <div className="mb-3">
                <label htmlFor="currencySelect" className="form-label">Default Currency Symbol</label>
                <select 
                  id="currencySelect"
                  className="form-select"
                  value={sysConfig.currency}
                  onChange={(e) => setSysConfig({ ...sysConfig, currency: e.target.value })}
                >
                  <option value="USD">USD ($) - United States Dollar</option>
                  <option value="INR">INR (₹) - Indian Rupee</option>
                  <option value="EUR">EUR (€) - Euro</option>
                  <option value="GBP">GBP (£) - British Pound</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="timezoneSelect" className="form-label">System Time Zone</label>
                <select 
                  id="timezoneSelect"
                  className="form-select"
                  value={sysConfig.timezone}
                  onChange={(e) => setSysConfig({ ...sysConfig, timezone: e.target.value })}
                >
                  <option value="UTC-5:00">UTC-5:00 - Eastern Standard Time</option>
                  <option value="UTC+0:00">UTC+0:00 - Coordinated Universal Time</option>
                  <option value="UTC+5:30">UTC+5:30 - Indian Standard Time</option>
                  <option value="UTC+8:00">UTC+8:00 - Singapore Standard Time</option>
                </select>
              </div>

              <div className="mb-3 form-check form-switch pt-2">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="notiSwitch" 
                  checked={sysConfig.notifications}
                  onChange={(e) => setSysConfig({ ...sysConfig, notifications: e.target.checked })}
                />
                <label className="form-check-label ms-2" htmlFor="notiSwitch">
                  Enable Email & Push Notifications
                </label>
              </div>

              <div className="mb-4 form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="approveSwitch" 
                  checked={sysConfig.autoApprove}
                  onChange={(e) => setSysConfig({ ...sysConfig, autoApprove: e.target.checked })}
                />
                <label className="form-check-label ms-2" htmlFor="approveSwitch">
                  Auto-Approve Booking Requests
                </label>
              </div>

              <button type="submit" className="btn btn-primary px-4 py-2 w-100">Save Configuration</button>
            </form>
          </div>

          <div className="glass-card mt-4" style={{ borderLeft: '4px solid #ef4444' }}>
            <h5 className="fw-bold text-danger mb-3">Danger Zone</h5>
            <p className="text-muted small">Resetting the system will clear all active bookings, new vehicles, and payments stored in local storage, reverting the application to its default demo state.</p>
            <button 
              type="button" 
              className="btn btn-outline-danger w-100 mt-2"
              onClick={() => {
                if (window.confirm("Are you absolutely sure you want to reset all local data? This action cannot be undone.")) {
                  onResetSystemData();
                }
              }}
            >
              Reset System Database
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
