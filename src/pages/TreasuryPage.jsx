import React, { useState, useEffect } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, Calendar, PieChart as PieChartIcon } from 'lucide-react';

const TreasuryDashboard = () => {
  // Sample financial data
  const [financialData, setFinancialData] = useState({
    totalBudget: 15000,
    totalExpenses: 8750,
    totalIncome: 12500,
    balance: 3750,
    membershipFees: 5000,
    sponsorships: 4500,
    eventRevenue: 3000,
    categories: [
      { name: 'Events', value: 4200, color: '#3B82F6' },
      { name: 'Equipment', value: 1800, color: '#10B981' },
      { name: 'Software', value: 1200, color: '#6366F1' },
      { name: 'Workshops', value: 950, color: '#F59E0B' },
      { name: 'Miscellaneous', value: 600, color: '#8B5CF6' }
    ],
    monthlyTransactions: [
      { month: 'Jan', income: 1800, expenses: 1200 },
      { month: 'Feb', income: 1500, expenses: 1100 },
      { month: 'Mar', income: 2200, expenses: 1600 },
      { month: 'Apr', income: 1200, expenses: 1000 },
      { month: 'May', income: 1900, expenses: 1400 },
      { month: 'Jun', income: 1400, expenses: 1100 },
      { month: 'Jul', income: 1100, expenses: 800 },
      { month: 'Aug', income: 1400, expenses: 1550 }
    ],
    recentTransactions: [
      { id: 1, description: 'Workshop Materials', amount: -350, date: '2025-03-09', category: 'Workshops' },
      { id: 2, description: 'Membership Fees (15 members)', amount: 750, date: '2025-03-07', category: 'Income' },
      { id: 3, description: 'Tech Company Sponsorship', amount: 1500, date: '2025-03-05', category: 'Income' },
      { id: 4, description: 'Hackathon Prizes', amount: -600, date: '2025-03-02', category: 'Events' },
      { id: 5, description: 'Software Licenses', amount: -450, date: '2025-02-28', category: 'Software' }
    ]
  });

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <header className="relative overflow-hidden bg-[#2c3e50] text-white text-center py-8">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[rgba(44,62,80,0.9)] to-[rgba(52,152,219,0.8)] z-1"></div>
        <div className="relative z-2">
          <h1 className="text-xl font-bold">Treasury Dashboard</h1>
        </div>
      </header>  */}

      <main className="max-w-7xl mx-auto p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Current Balance</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(financialData.balance)}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign size={24} className="text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Income</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(financialData.totalIncome)}</p>
                <div className="flex items-center mt-2 text-green-600">
                  <ArrowUpRight size={16} />
                  <span className="text-xs ml-1">+23% from last year</span>
                </div>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <ArrowUpRight size={24} className="text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Total Expenses</p>
                <p className="text-2xl font-bold text-gray-800">{formatCurrency(financialData.totalExpenses)}</p>
                <div className="flex items-center mt-2 text-red-600">
                  <ArrowDownRight size={16} />
                  <span className="text-xs ml-1">+12% from last year</span>
                </div>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <ArrowDownRight size={24} className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 font-medium">Budget Utilized</p>
                <p className="text-2xl font-bold text-gray-800">{Math.round((financialData.totalExpenses / financialData.totalBudget) * 100)}%</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${(financialData.totalExpenses / financialData.totalBudget) * 100}%` }}></div>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <PieChartIcon size={24} className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Expense Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialData.categories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {financialData.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
              {financialData.categories.map((category) => (
                <div key={category.name} className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: category.color }}></div>
                  <span className="text-sm text-gray-600">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold mb-4">Monthly Income & Expenses</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={financialData.monthlyTransactions}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend />
                  <Bar dataKey="income" fill="#10B981" name="Income" />
                  <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Income Sources and Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 lg:col-span-1">
            <h2 className="text-lg font-bold mb-4">Income Sources</h2>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Membership Fees</span>
                  <span className="font-bold">{formatCurrency(financialData.membershipFees)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${(financialData.membershipFees / financialData.totalIncome) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sponsorships</span>
                  <span className="font-bold">{formatCurrency(financialData.sponsorships)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-600 h-2.5 rounded-full" 
                    style={{ width: `${(financialData.sponsorships / financialData.totalIncome) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="border-b pb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Event Revenue</span>
                  <span className="font-bold">{formatCurrency(financialData.eventRevenue)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-green-600 h-2.5 rounded-full" 
                    style={{ width: `${(financialData.eventRevenue / financialData.totalIncome) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Recent Transactions</h2>
              <button className="text-blue-600 text-sm hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {financialData.recentTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{transaction.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(transaction.date)}</td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount > 0 ? '+' : ''}{formatCurrency(transaction.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Computer Science Club | Last updated: Mar 11, 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default TreasuryDashboard;