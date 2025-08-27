'use client';

import { useState } from 'react';

interface DashboardContentProps {
  activePage: string;
}

const pageConfigs = {
  dashboard: {
    title: 'Dashboard Overview',
    tabs: [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-3xl text-center shadow-lg">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-xl font-semibold mb-2">Total Users</h3>
                <p className="text-4xl font-bold mb-2">1,234</p>
                <p className="text-blue-100 text-sm">+12% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-3xl text-center shadow-lg">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="text-xl font-semibold mb-2">Revenue</h3>
                <p className="text-4xl font-bold mb-2">$45,678</p>
                <p className="text-green-100 text-sm">+8% from last month</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-3xl text-center shadow-lg">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="text-xl font-semibold mb-2">Orders</h3>
                <p className="text-4xl font-bold mb-2">567</p>
                <p className="text-purple-100 text-sm">+15% from last month</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-2xl hover:bg-blue-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  ➕ Add New User
                </button>
                <button className="bg-green-500 text-white px-8 py-4 rounded-2xl hover:bg-green-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  📊 Generate Report
                </button>
                <button className="bg-purple-500 text-white px-8 py-4 rounded-2xl hover:bg-purple-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  📈 View Analytics
                </button>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'stats',
        label: 'Statistics',
        content: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-6">Monthly Growth</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Users</span>
                    <span className="font-bold text-green-600 text-xl">+12%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Revenue</span>
                    <span className="font-bold text-green-600 text-xl">+8%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Orders</span>
                    <span className="font-bold text-green-600 text-xl">+15%</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-6">Top Categories</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Electronics</span>
                    <span className="font-bold text-xl">45%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Clothing</span>
                    <span className="font-bold text-xl">30%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600 text-lg">Books</span>
                    <span className="font-bold text-xl">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'activity',
        label: 'Recent Activity',
        content: (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-lg">New user registered</p>
                    <p className="text-gray-600">John Doe joined the platform</p>
                  </div>
                  <span className="text-gray-500">2 minutes ago</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-lg">Order completed</p>
                    <p className="text-gray-600">Order #12345 has been delivered</p>
                  </div>
                  <span className="text-gray-500">1 hour ago</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-medium text-lg">Payment received</p>
                    <p className="text-gray-600">Payment of $299.99 received</p>
                  </div>
                  <span className="text-gray-500">3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  users: {
    title: 'User Management',
    tabs: [
      {
        id: 'list',
        label: 'User List',
        content: (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">All Users</h3>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ➕ Add User
              </button>
            </div>
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">John Doe</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">john@example.com</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Admin</td>
                    <td className="px-8 py-6 whitespace-nowrap"><span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 rounded-full">Active</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Jane Smith</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">jane@example.com</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">User</td>
                    <td className="px-8 py-6 whitespace-nowrap"><span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 rounded-full">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: 'roles',
        label: 'User Roles',
        content: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👑</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Admin</h3>
                <p className="text-gray-600 mb-6">Full system access and control</p>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• User management</li>
                  <li>• System settings</li>
                  <li>• Analytics access</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">Manager</h3>
                <p className="text-gray-600 mb-6">Team and project management</p>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• Team oversight</li>
                  <li>• Project access</li>
                  <li>• Limited admin</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl">👤</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">User</h3>
                <p className="text-gray-600 mb-6">Basic platform access</p>
                <ul className="text-gray-600 space-y-2 text-left">
                  <li>• View data</li>
                  <li>• Basic operations</li>
                  <li>• Profile management</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'activity',
        label: 'User Activity',
        content: (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Activity Log</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-lg">John Doe logged in</span>
                  <span className="text-gray-500">2 minutes ago</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-lg">Jane Smith updated profile</span>
                  <span className="text-gray-500">1 hour ago</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-lg">New user registration</span>
                  <span className="text-gray-500">3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  analytics: {
    title: 'Analytics & Insights',
    tabs: [
      {
        id: 'charts',
        label: 'Charts',
        content: (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-6">Revenue Chart</h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-500 text-lg">Chart visualization would go here</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                <h3 className="text-2xl font-semibold mb-6">User Growth</h3>
                <div className="h-64 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <p className="text-gray-500 text-lg">Chart visualization would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'metrics',
        label: 'Key Metrics',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600 text-lg">Uptime</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">2.3s</h3>
              <p className="text-gray-600 text-lg">Avg Response Time</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">15K</h3>
              <p className="text-gray-600 text-lg">Daily Requests</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">99.9%</h3>
              <p className="text-gray-600 text-lg">Success Rate</p>
            </div>
          </div>
        ),
      },
      {
        id: 'trends',
        label: 'Trends',
        content: (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Trending Metrics</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-gray-600 text-lg">Mobile Usage</span>
                  <span className="text-green-600 font-bold text-xl">↗️ +25%</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl">
                  <span className="text-gray-600 text-lg">Desktop Usage</span>
                  <span className="text-red-600 font-bold text-xl">↘️ -5%</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-gray-600 text-lg">API Calls</span>
                  <span className="text-blue-600 font-bold text-xl">↗️ +40%</span>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  settings: {
    title: 'System Settings',
    tabs: [
      {
        id: 'general',
        label: 'General',
        content: (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">General Settings</h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Site Name</label>
                  <input type="text" className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" defaultValue="My Dashboard" />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Language</label>
                  <select className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Timezone</label>
                  <select className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'security',
        label: 'Security',
        content: (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Security Settings</h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">Two-Factor Authentication</span>
                  <button className="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-lg">Enabled</button>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">Password Policy</span>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow-lg">Configure</button>
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">Session Timeout</span>
                  <select className="px-6 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>4 hours</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'notifications',
        label: 'Notifications',
        content: (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Notification Preferences</h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">Email Notifications</span>
                  <input type="checkbox" className="w-6 h-6 text-blue-600 rounded-lg" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">Push Notifications</span>
                  <input type="checkbox" className="w-6 h-6 text-green-600 rounded-lg" />
                </div>
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-gray-700 text-lg">SMS Notifications</span>
                  <input type="checkbox" className="w-6 h-6 text-purple-600 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  reports: {
    title: 'Reports & Documents',
    tabs: [
      {
        id: 'generated',
        label: 'Generated Reports',
        content: (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Recent Reports</h3>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                📊 Generate New Report
              </button>
            </div>
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Generated</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Monthly Sales Report</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Dec 1, 2024</td>
                    <td className="px-8 py-6 whitespace-nowrap"><span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 rounded-full">Completed</span></td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 text-lg font-medium">Download</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">User Activity Report</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Nov 30, 2024</td>
                    <td className="px-8 py-6 whitespace-nowrap"><span className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800 rounded-full">Completed</span></td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button className="text-blue-600 hover:text-blue-800 text-lg font-medium">Download</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        id: 'templates',
        label: 'Report Templates',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Sales Report</h3>
              <p className="text-gray-600 mb-6">Monthly sales performance template</p>
              <button className="w-full bg-blue-500 text-white px-6 py-4 rounded-2xl hover:bg-blue-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Use Template
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">User Analytics</h3>
              <p className="text-gray-600 mb-6">User behavior and engagement template</p>
              <button className="w-full bg-green-500 text-white px-6 py-4 rounded-2xl hover:bg-green-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Use Template
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Financial Summary</h3>
              <p className="text-gray-600 mb-6">Revenue and expense summary template</p>
              <button className="w-full bg-purple-500 text-white px-6 py-4 rounded-2xl hover:bg-purple-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Use Template
              </button>
            </div>
          </div>
        ),
      },
      {
        id: 'scheduled',
        label: 'Scheduled Reports',
        content: (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Scheduled Reports</h3>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                ⏰ Schedule New Report
              </button>
            </div>
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Next Run</th>
                    <th className="px-8 py-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Weekly Sales Summary</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Every Monday</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Dec 9, 2024</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-800 text-lg font-medium">Disable</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Monthly User Report</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">1st of month</td>
                    <td className="px-8 py-6 whitespace-nowrap text-lg">Jan 1, 2025</td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <button className="text-red-600 hover:text-red-800 text-lg font-medium">Disable</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
    ],
  },
  help: {
    title: 'Help & Support',
    tabs: [
      {
        id: 'faq',
        label: 'FAQ',
        content: (
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-medium text-gray-900 text-xl mb-3">How do I reset my password?</h4>
                  <p className="text-gray-600 text-lg">Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-medium text-gray-900 text-xl mb-3">How can I export data?</h4>
                  <p className="text-gray-600 text-lg">Navigate to the Reports section and use the export functionality available for each report type.</p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h4 className="font-medium text-gray-900 text-xl mb-3">What are the system requirements?</h4>
                  <p className="text-gray-600 text-lg">The dashboard works on all modern browsers including Chrome, Firefox, Safari, and Edge.</p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'guides',
        label: 'User Guides',
        content: (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-6">Learn the basics of using the dashboard</p>
              <button className="w-full bg-blue-500 text-white px-6 py-4 rounded-2xl hover:bg-blue-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Guide
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Advanced Features</h3>
              <p className="text-gray-600 mb-6">Master advanced dashboard features</p>
              <button className="w-full bg-green-500 text-white px-6 py-4 rounded-2xl hover:bg-green-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Guide
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🔌</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">API Documentation</h3>
              <p className="text-gray-600 mb-6">Integrate with our APIs</p>
              <button className="w-full bg-purple-500 text-white px-6 py-4 rounded-2xl hover:bg-purple-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Guide
              </button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Troubleshooting</h3>
              <p className="text-gray-600 mb-6">Common issues and solutions</p>
              <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-2xl hover:bg-orange-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Read Guide
              </button>
            </div>
          </div>
        ),
      },
      {
        id: 'contact',
        label: 'Contact Support',
        content: (
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Contact Information</h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl">
                  <span className="text-3xl">📧</span>
                  <span className="text-lg font-medium">support@dashboard.com</span>
                </div>
                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl">
                  <span className="text-3xl">📞</span>
                  <span className="text-lg font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl">
                  <span className="text-3xl">💬</span>
                  <span className="text-lg font-medium">Live chat available 24/7</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center">Submit a Ticket</h3>
              <div className="space-y-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Subject</label>
                  <input type="text" className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-3">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg" placeholder="Detailed description of your issue"></textarea>
                </div>
                <button className="w-full bg-blue-500 text-white px-6 py-4 rounded-2xl hover:bg-blue-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};

export default function DashboardContent({ activePage }: DashboardContentProps) {
  const [activeTab, setActiveTab] = useState('overview');
  
  const currentPage = pageConfigs[activePage as keyof typeof pageConfigs] || pageConfigs.dashboard;

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {currentPage.title}
          </h1>
          <p className="text-gray-600 text-lg">
            Welcome to the {currentPage.title.toLowerCase()} page
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-3xl shadow-sm p-2 mb-8">
          <nav className="flex justify-center space-x-2">
            {currentPage.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {currentPage.tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
}
