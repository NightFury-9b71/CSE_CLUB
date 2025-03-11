import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Line, Pie, Bar, Cell} from 'recharts';
import { Download, Printer, Plus, Edit, Check, X, TrendingUp } from 'lucide-react';
import Chart from 'chart.js/auto';

// API service for data fetching (mock)
const TreasuryAPI = {
  async getDashboardStats() {
    // Mock API response
    return {
      currentBalance: 3478.25,
      balanceChange: 8.3,
      totalIncome: 2145.00,
      totalExpenses: 1287.75,
      pendingApprovals: 4
    };
  },

  async getTransactions() {
    return [
      { id: 1, date: '02/28/2025', description: 'Hackathon Sponsorship - Tech Co.', category: 'Sponsorship', amount: 500.00, type: 'income' },
      { id: 2, date: '02/25/2025', description: 'Workshop Materials', category: 'Events', amount: -85.23, type: 'expense' },
      { id: 3, date: '02/20/2025', description: 'Membership Fees (15 members)', category: 'Membership', amount: 225.00, type: 'income' },
      { id: 4, date: '02/15/2025', description: 'Pizza for Coding Night', category: 'Food & Refreshments', amount: -87.50, type: 'expense' },
      { id: 5, date: '02/10/2025', description: 'Cloud Credits - University Grant', category: 'Grants', amount: 300.00, type: 'income' },
      { id: 6, date: '02/05/2025', description: 'Competition Prizes', category: 'Events', amount: -150.00, type: 'expense' },
      { id: 7, date: '02/01/2025', description: 'T-shirt Order (25 shirts)', category: 'Merchandise', amount: -312.50, type: 'expense' }
    ];
  },

  async getFinanceData() {
    return {
      monthly: [
        { month: 'September', income: 350, expenses: 280 },
        { month: 'October', income: 420, expenses: 350 },
        { month: 'November', income: 580, expenses: 490 },
        { month: 'December', income: 320, expenses: 450 },
        { month: 'January', income: 480, expenses: 280 },
        { month: 'February', income: 645, expenses: 388 }
      ]
    };
  },

  async getExpenseCategories() {
    return [
      { name: 'Events', value: 30, color: '#3498db' },
      { name: 'Equipment', value: 25, color: '#2ecc71' },
      { name: 'Food', value: 20, color: '#e74c3c' },
      { name: 'Marketing', value: 10, color: '#f39c12' },
      { name: 'Merchandise', value: 15, color: '#9b59b6' }
    ];
  },

  async getIncomeSources() {
    return [
      { name: 'Membership', value: 40, color: '#2ecc71' },
      { name: 'Sponsorships', value: 30, color: '#3498db' },
      { name: 'University Grants', value: 20, color: '#9b59b6' },
      { name: 'Events', value: 10, color: '#f39c12' }
    ];
  },

  async getBudgetData() {
    return [
      { category: 'Events & Workshops', current: 500, total: 800 },
      { category: 'Equipment & Software', current: 350, total: 400 },
      { category: 'Food & Refreshments', current: 275, total: 300 },
      { category: 'Marketing & Promotion', current: 85, total: 200 },
      { category: 'Merchandise', current: 325, total: 400 }
    ];
  },

  async getHistoricalData() {
    return {
      chart: [
        { year: '2022-2023', income: 3800, expenses: 3650 },
        { year: '2023-2024', income: 4200, expenses: 3800 },
        { year: '2024-2025', income: 4500, expenses: 3250 }
      ],
      summary: [
        { year: '2024-2025', income: 4500, expenses: 3250, balance: 1250 },
        { year: '2023-2024', income: 4200, expenses: 3800, balance: 400 },
        { year: '2022-2023', income: 3800, expenses: 3650, balance: 150 }
      ]
    };
  },

  async getPendingReimbursements() {
    return [
      { id: 1, requestedBy: 'John Smith', date: '03/02/2025', description: 'Workshop Materials', amount: 42.99 },
      { id: 2, requestedBy: 'Sarah Johnson', date: '03/01/2025', description: 'Competition Prizes', amount: 75.00 },
      { id: 3, requestedBy: 'Michael Lee', date: '02/28/2025', description: 'Snacks for Meeting', amount: 28.50 },
      { id: 4, requestedBy: 'Emma Davis', date: '02/27/2025', description: 'Transportation', amount: 35.75 }
    ];
  }
};

// Sidebar component
const Sidebar = () => {
  const [active, setActive] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', name: 'Dashboard', icon: 'tachometer-alt' },
    { id: 'transactions', name: 'Transactions', icon: 'exchange-alt' },
    { id: 'income', name: 'Income', icon: 'arrow-circle-down' },
    { id: 'expenses', name: 'Expenses', icon: 'arrow-circle-up' },
    { id: 'reports', name: 'Reports', icon: 'chart-bar' },
    { id: 'budget', name: 'Budget Planning', icon: 'money-bill-wave' },
    { id: 'settings', name: 'Settings', icon: 'cog' }
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="text-center pt-6 pb-6">
        <h5 className="font-bold">CS Club Treasury</h5>
      </div>
      <ul className="nav flex-col">
        {navItems.map(item => (
          <li key={item.id} className="nav-item">
            <a 
              href={`#${item.id}`}
              className={`flex items-center px-4 py-3 hover:bg-gray-700 transition-colors ${active === item.id ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
              onClick={() => setActive(item.id)}
            >
              <i className={`fas fa-${item.icon} mr-2`}></i> {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <div className="flex justify-between flex-wrap pb-2 mb-3 border-b">
      <h1 className="text-2xl font-semibold">Treasury Dashboard</h1>
      <div className="flex items-center">
        <div className="mr-2 flex">
          <button className="btn flex items-center px-3 py-1 text-sm border rounded-md border-gray-300 mr-2">
            <Download size={16} className="mr-1" /> Export
          </button>
          <button className="btn flex items-center px-3 py-1 text-sm border rounded-md border-gray-300">
            <Printer size={16} className="mr-1" /> Print
          </button>
        </div>
        <button className="btn flex items-center px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
          <Plus size={16} className="mr-1" /> New Transaction
        </button>
      </div>
    </div>
  );
};

// Stats Card component
const StatsCard = ({ title, value, subtext, bgColor }) => {
  return (
    <div className={`card rounded-md shadow ${bgColor} text-white`}>
      <div className="card-body p-4">
        <h5 className="card-title">{title}</h5>
        <h2 className="mt-3 mb-3 text-2xl font-bold">{value}</h2>
        <p className="card-text text-sm">
          {subtext}
        </p>
      </div>
    </div>
  );
};

// Chart Card component
const ChartCard = ({ title, children, timeRange, showTimeRange, onTimeRangeChange }) => {
  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 flex justify-between items-center border-b">
        <h5 className="font-medium">{title}</h5>
        {showTimeRange && (
          <div className="dropdown relative">
            <button className="btn text-sm border rounded-md border-gray-300 px-2 py-1 flex items-center">
              {timeRange} <i className="fas fa-chevron-down ml-1"></i>
            </button>
          </div>
        )}
      </div>
      <div className="card-body p-4">
        <div className="h-64">
          {children}
        </div>
      </div>
    </div>
  );
};

// Transaction List component
const TransactionList = ({ transactions }) => {
  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 flex justify-between items-center border-b">
        <h5 className="font-medium">Recent Transactions</h5>
        <a href="#" className="text-sm text-blue-600">View All</a>
      </div>
      <div className="card-body p-4">
        <div className="transaction-list max-h-64 overflow-y-auto">
          <table className="table w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Date</th>
                <th className="pb-2">Description</th>
                <th className="pb-2">Category</th>
                <th className="pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="py-2">{transaction.date}</td>
                  <td className="py-2">{transaction.description}</td>
                  <td className="py-2">{transaction.category}</td>
                  <td className={`py-2 ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Income Sources component
const IncomeSources = ({ sources }) => {
  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 border-b">
        <h5 className="font-medium">Income Sources</h5>
      </div>
      <div className="card-body p-4">
        <div className="h-64">
          <Pie 
            data={sources} 
            nameKey="name" 
            dataKey="value" 
            cx="50%" 
            cy="50%" 
            outerRadius={80}
          />
        </div>
        <div className="mt-3">
          <h6 className="font-medium mb-2">Top Income Sources</h6>
          {sources.map((source) => (
            <div key={source.name} className="mb-2">
              <div className="flex justify-between mb-1">
                <div>{source.name}</div>
                <div>{source.value}%</div>
              </div>
              <div className="h-5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ width: `${source.value}%`, backgroundColor: source.color }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Budget component
const BudgetStatus = ({ budgetItems }) => {
  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 flex justify-between items-center border-b">
        <h5 className="font-medium">Current Budget</h5>
        <button className="btn flex items-center px-3 py-1 text-sm border rounded-md border-blue-600 text-blue-600">
          <Edit size={16} className="mr-1" /> Edit Budget
        </button>
      </div>
      <div className="card-body p-4">
        {budgetItems.map((item, index) => {
          const percentage = (item.current / item.total) * 100;
          let barColor = 'bg-green-500';
          
          if (percentage > 75 && percentage < 90) {
            barColor = 'bg-yellow-500';
          } else if (percentage >= 90) {
            barColor = 'bg-red-500';
          }
          
          return (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-center mb-1">
                <div>{item.category}</div>
                <div>${item.current} / ${item.total}</div>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${barColor}`} 
                  style={{ width: `${percentage}%` }}
                >
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Historical Data component
const HistoricalData = ({ chartData, summaryData }) => {
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  
  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 flex justify-between items-center border-b">
        <h5 className="font-medium">Historical Data</h5>
        <div className="dropdown relative">
          <button className="btn text-sm border rounded-md border-gray-300 px-2 py-1 flex items-center">
            {selectedYear} <i className="fas fa-chevron-down ml-1"></i>
          </button>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="h-64">
          <Bar
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {/* Bar chart would have more configuration in a real implementation */}
          </Bar>
        </div>
        <div className="mt-3">
          <table className="table w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="pb-2">Year</th>
                <th className="pb-2">Income</th>
                <th className="pb-2">Expenses</th>
                <th className="pb-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {summaryData.map((year) => (
                <tr key={year.year}>
                  <td className="py-2">{year.year}</td>
                  <td className="py-2 text-green-600">${year.income}</td>
                  <td className="py-2 text-red-600">${year.expenses}</td>
                  <td className="py-2">${year.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Pending Reimbursements component
const PendingReimbursements = ({ reimbursements }) => {
  const handleApprove = (id) => {
    console.log(`Approve reimbursement ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Reject reimbursement ${id}`);
  };

  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 border-b">
        <h5 className="font-medium">Pending Reimbursements</h5>
      </div>
      <div className="card-body p-4">
        <table className="table w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Requested By</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Description</th>
              <th className="pb-2">Amount</th>
              <th className="pb-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reimbursements.map((req) => (
              <tr key={req.id} className="border-b">
                <td className="py-2">{req.requestedBy}</td>
                <td className="py-2">{req.date}</td>
                <td className="py-2">{req.description}</td>
                <td className="py-2">${req.amount.toFixed(2)}</td>
                <td className="py-2">
                  <button 
                    className="btn bg-green-500 text-white p-1 rounded mr-1"
                    onClick={() => handleApprove(req.id)}
                  >
                    <Check size={16} />
                  </button>
                  <button 
                    className="btn bg-red-500 text-white p-1 rounded"
                    onClick={() => handleReject(req.id)}
                  >
                    <X size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



// Export & Reports component
const ExportReports = () => {
  const reports = [
    { id: 1, icon: 'file-excel', title: 'Export Transactions (Excel)' },
    { id: 2, icon: 'file-csv', title: 'Export Transactions (CSV)' },
    { id: 3, icon: 'file-pdf', title: 'Financial Summary Report' },
    { id: 4, icon: 'file-pdf', title: 'Budget Comparison Report' },
    { id: 5, icon: 'file-pdf', title: 'End of Semester Report' }
  ];

  return (
    <div className="card bg-white rounded-md shadow">
      <div className="card-header p-4 border-b">
        <h5 className="font-medium">Export & Reports</h5>
      </div>
      <div className="card-body p-4">
        <div className="list-group">
          {reports.map(report => (
            <a 
              key={report.id}
              href="#" 
              className="flex justify-between items-center p-3 border-b hover:bg-gray-50"
            >
              <div>
                <i className={`fas fa-${report.icon} mr-2`}></i>
                {report.title}
              </div>
              <i className="fas fa-download"></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const DonutChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60} // This is the crucial part for a donut chart
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

const IncomeExpense = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['September', 'October', 'November', 'December', 'January', 'February'],
          datasets: [
            {
              label: 'Income',
              data: [350, 420, 580, 320, 480, 645],
              borderColor: '#2ecc71',
              backgroundColor: 'rgba(46, 204, 113, 0.1)',
              tension: 0.3,
              fill: true
            },
            {
              label: 'Expenses',
              data: [280, 350, 490, 450, 280, 388],
              borderColor: '#e74c3c',
              backgroundColor: 'rgba(231, 76, 60, 0.1)',
              tension: 0.3,
              fill: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top'
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card transition-all hover:translate-y-1 hover:shadow-lg">
      <div className="card-header flex justify-between items-center p-4 bg-white border-b">
        <h5 className="mb-0 font-medium">Income & Expenses</h5>
        <div className="dropdown relative">
          <button 
            className="btn btn-sm btn-outline-secondary dropdown-toggle flex items-center px-3 py-1 text-sm border rounded"
            type="button" 
            id="timeRangeDropdown" 
          >
            Last 6 months
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="card-body p-4">
        <div className="chart-container h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

const ExpenseCategories = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Events', 'Equipment', 'Food', 'Marketing', 'Merchandise'],
          datasets: [{
            data: [30, 25, 20, 10, 15],
            backgroundColor: [
              '#3498db',
              '#2ecc71',
              '#e74c3c',
              '#f39c12',
              '#9b59b6'
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="card transition-all hover:translate-y-1 hover:shadow-lg">
      <div className="card-header p-4 bg-white border-b">
        <h5 className="mb-0 font-medium">Expense Categories</h5>
      </div>
      <div className="card-body p-4">
        <div className="chart-container h-64">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

const TreasuryPage = () => {
  const [stats, setStats] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [financeData, setFinanceData] = useState({ monthly: [] });
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [incomeSources, setIncomeSources] = useState([]);
  const [budgetData, setBudgetData] = useState([]);
  const [historicalData, setHistoricalData] = useState({ chart: [], summary: [] });
  const [pendingReimbursements, setPendingReimbursements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch all data in parallel
        const [
          statsData,
          transactionsData,
          financeData,
          expenseCategoriesData,
          incomeSourcesData,
          budgetData,
          historicalData,
          reimbursementsData
        ] = await Promise.all([
          TreasuryAPI.getDashboardStats(),
          TreasuryAPI.getTransactions(),
          TreasuryAPI.getFinanceData(),
          TreasuryAPI.getExpenseCategories(),
          TreasuryAPI.getIncomeSources(),
          TreasuryAPI.getBudgetData(),
          TreasuryAPI.getHistoricalData(),
          TreasuryAPI.getPendingReimbursements()
        ]);
        
        setStats(statsData);
        setTransactions(transactionsData);
        setFinanceData(financeData);
        setExpenseCategories(expenseCategoriesData);
        setIncomeSources(incomeSourcesData);
        setBudgetData(budgetData);
        setHistoricalData(historicalData);
        setPendingReimbursements(reimbursementsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading treasury data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 hidden md:block">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <Header />

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard 
            title="Current Balance" 
            value={`$${stats.currentBalance.toFixed(2)}`} 
            subtext={<><TrendingUp size={16} className="inline mr-1" /> {stats.balanceChange}% from last month</>}
            bgColor="bg-blue-600"
          />
          <StatsCard 
            title="Total Income" 
            value={`$${stats.totalIncome.toFixed(2)}`} 
            subtext="This semester"
            bgColor="bg-green-600"
          />
          <StatsCard 
            title="Total Expenses" 
            value={`$${stats.totalExpenses.toFixed(2)}`} 
            subtext="This semester"
            bgColor="bg-red-600"
          />
          <StatsCard 
            title="Pending Approvals" 
            value={stats.pendingApprovals} 
            subtext="Reimbursement requests"
            bgColor="bg-cyan-600"
          />
        </div>

        {/* Main Finance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* <div className="lg:col-span-8">
            <ChartCard 
              title="Income & Expenses" 
              timeRange="Last 6 months" 
              showTimeRange={true}
            >
              <Line 
                data={financeData.monthly} 
                dataKey="month"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
              </Line>
            </ChartCard>
          </div>
          <div className="lg:col-span-4">
            <ChartCard title="Expense Categories">
              <DonutChart 
                data={expenseCategories} 
                nameKey="name" 
                dataKey="value" 
                cx="50%" 
                cy="50%" 
                innerRadius={60}
                outerRadius={80}
              />
            </ChartCard>
          </div> */}
          <IncomeExpense />
          <ExpenseCategories />
        </div>

        {/* Recent Transactions & Income Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-7">
            <TransactionList transactions={transactions} />
          </div>
          <div className="lg:col-span-5">
            <IncomeSources sources={incomeSources} />
          </div>
        </div>

        {/* Budget Planning & Historical Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <BudgetStatus budgetItems={budgetData} />
          <HistoricalData chartData={historicalData.chart} summaryData={historicalData.summary} />
        </div>

        {/* Pending Approvals & Export Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <PendingReimbursements reimbursements={pendingReimbursements} />
          <ExportReports />
        </div>

        {/* Footer */}
        <footer className="pt-4 mt-6 text-gray-600 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>© 2025 Computer Science Club Treasury System</p>
            <p>Current Treasurer: Alex Wilson | <a href="#" className="text-blue-600">Contact</a></p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TreasuryPage;