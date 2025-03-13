// AccountSettingsPage.jsx
import React, { useState } from 'react';

// Single Responsibility Principle: Each component has one job
// Open/Closed Principle: Components are extendable without modification
// Liskov Substitution Principle: Components are interchangeable with subtypes
// Interface Segregation Principle: Small, focused interfaces
// Dependency Inversion: High-level modules don't depend on low-level modules

// Main container component
const AccountSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        {activeTab === 'profile' && <ProfileSettings />}
        {activeTab === 'security' && <SecuritySettings />}
        {activeTab === 'notifications' && <NotificationSettings />}
        {activeTab === 'billing' && <BillingSettings />}
        {activeTab === 'integrations' && <IntegrationSettings />}
      </div>
    </div>
  );
};

// Component for tabs - SRP: only handles tab selection
const SettingsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'security', label: 'Security' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' },
    { id: 'integrations', label: 'Integrations' }
  ];
  
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-2 font-medium ${
            activeTab === tab.id 
              ? 'text-blue-600 border-b-2 border-blue-600' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Form field component - reusable across different settings sections
const FormField = ({ label, children, htmlFor }) => (
  <div className="mb-4">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);

// Button component - SRP: handles only button styling and behavior
const Button = ({ type = 'button', variant = 'primary', children, onClick }) => {
  const baseClasses = "px-4 py-2 rounded font-medium focus:outline-none";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  
  return (
    <button 
      type={type} 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// SRP: Profile settings component only handles profile data
const ProfileSettings = () => {
  return (
    <form>
      <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
      
      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <FormField label="First Name" htmlFor="firstName">
            <input 
              id="firstName" 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              defaultValue="John"
            />
          </FormField>
        </div>
        <div className="flex-1">
          <FormField label="Last Name" htmlFor="lastName">
            <input 
              id="lastName" 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded" 
              defaultValue="Doe"
            />
          </FormField>
        </div>
      </div>
      
      <FormField label="Email Address" htmlFor="email">
        <input 
          id="email" 
          type="email" 
          className="w-full px-3 py-2 border border-gray-300 rounded" 
          defaultValue="john.doe@example.com"
        />
      </FormField>
      
      <FormField label="Bio" htmlFor="bio">
        <textarea 
          id="bio" 
          rows="4" 
          className="w-full px-3 py-2 border border-gray-300 rounded" 
          defaultValue="Computer science enthusiast and developer."
        />
      </FormField>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </form>
  );
};

// SRP: Security settings component only handles security features
const SecuritySettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
      
      <FormField label="Current Password" htmlFor="currentPassword">
        <input 
          id="currentPassword" 
          type="password" 
          className="w-full px-3 py-2 border border-gray-300 rounded" 
        />
      </FormField>
      
      <FormField label="New Password" htmlFor="newPassword">
        <input 
          id="newPassword" 
          type="password" 
          className="w-full px-3 py-2 border border-gray-300 rounded" 
        />
      </FormField>
      
      <FormField label="Confirm New Password" htmlFor="confirmPassword">
        <input 
          id="confirmPassword" 
          type="password" 
          className="w-full px-3 py-2 border border-gray-300 rounded" 
        />
      </FormField>
      
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
        <div className="flex items-center">
          <input 
            id="twoFactorToggle" 
            type="checkbox" 
            className="w-4 h-4 text-blue-600" 
          />
          <label htmlFor="twoFactorToggle" className="ml-2 text-sm text-gray-700">
            Enable two-factor authentication
          </label>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end space-x-3">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Update Security</Button>
      </div>
    </div>
  );
};

// SRP: Notification settings component
const NotificationSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
      
      <div className="space-y-4">
        <NotificationOption 
          id="emailNotifications" 
          title="Email Notifications" 
          description="Receive notifications about account activity via email"
        />
        
        <NotificationOption 
          id="pushNotifications" 
          title="Push Notifications" 
          description="Receive push notifications in your browser"
        />
        
        <NotificationOption 
          id="marketingEmails" 
          title="Marketing Emails" 
          description="Receive updates about new features and promotions"
        />
        
        <NotificationOption 
          id="securityAlerts" 
          title="Security Alerts" 
          description="Get notified about important security-related activities"
          defaultChecked={true}
        />
      </div>
      
      <div className="mt-6 flex justify-end">
        <Button variant="primary">Save Preferences</Button>
      </div>
    </div>
  );
};

// SRP: Notification option component handles a single notification setting
const NotificationOption = ({ id, title, description, defaultChecked = false }) => {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          defaultChecked={defaultChecked}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">{title}</label>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

// SRP: Billing settings component
const BillingSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Current Plan</h3>
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Pro Plan</p>
              <p className="text-sm text-gray-500">$15.00 / month</p>
            </div>
            <Button variant="secondary">Change Plan</Button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Payment Method</h3>
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-6 bg-blue-600 rounded mr-3"></div>
              <div>
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 06/2026</p>
              </div>
            </div>
            <Button variant="secondary">Update</Button>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-3">Billing History</h3>
        <div className="border rounded overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <BillingHistoryRow 
                date="Mar 01, 2025" 
                amount="$15.00" 
                status="Paid" 
              />
              <BillingHistoryRow 
                date="Feb 01, 2025" 
                amount="$15.00" 
                status="Paid" 
              />
              <BillingHistoryRow 
                date="Jan 01, 2025" 
                amount="$15.00" 
                status="Paid" 
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// SRP: Billing history row component
const BillingHistoryRow = ({ date, amount, status }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{date}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{amount}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-blue-600 hover:text-blue-900">Download</a>
      </td>
    </tr>
  );
};

// SRP: Integration settings component
const IntegrationSettings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Connected Applications</h2>
      
      <p className="text-gray-600 mb-4">
        Manage third-party applications that have access to your account.
      </p>
      
      <div className="space-y-4">
        <IntegrationItem 
          name="GitHub" 
          description="Access your code repositories" 
          isConnected={true} 
        />
        
        <IntegrationItem 
          name="Google Drive" 
          description="Sync your documents" 
          isConnected={true} 
        />
        
        <IntegrationItem 
          name="Slack" 
          description="Connect for notifications" 
          isConnected={false} 
        />
        
        <IntegrationItem 
          name="Dropbox" 
          description="Sync your files" 
          isConnected={false} 
        />
      </div>
    </div>
  );
};

// SRP: Integration item component
const IntegrationItem = ({ name, description, isConnected }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          <span className="text-xs font-bold">{name.substring(0, 2)}</span>
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
      <Button variant={isConnected ? "danger" : "primary"}>
        {isConnected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};

export default AccountSettingsPage;