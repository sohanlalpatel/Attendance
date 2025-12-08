import React from 'react';
import { BarChart3, Users, FileText, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Dashboard</h1>
        <p className="text-gray-500">Overview of your activities and stats</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex items-center gap-4">
            <Users className="w-10 h-10 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <p className="text-xl font-semibold text-gray-800">1,245</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex items-center gap-4">
            <FileText className="w-10 h-10 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Reports</p>
              <p className="text-xl font-semibold text-gray-800">320</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex items-center gap-4">
            <Calendar className="w-10 h-10 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500">Upcoming Events</p>
              <p className="text-xl font-semibold text-gray-800">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          <div className="flex items-center gap-4">
            <BarChart3 className="w-10 h-10 text-red-600" />
            <div>
              <p className="text-sm text-gray-500">Performance</p>
              <p className="text-xl font-semibold text-gray-800">87%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder for Recent Activity or Graphs */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6 h-64">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 h-64">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Performance Graph</h2>
          <p className="text-gray-500">Coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
