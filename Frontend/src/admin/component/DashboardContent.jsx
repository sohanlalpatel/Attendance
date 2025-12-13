"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  AlertCircle,
} from "lucide-react";

import { StatCard } from "./StatCard";
import { AttendanceChart } from "./AttendenceChart";
import { RecentActivity } from "./RecentlyActivity";

export function DashboardContent() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    presentToday: 0,
    absentToday: 0,
    attendanceRate: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setStats({
        totalEmployees: 156,
        presentToday: 142,
        absentToday: 8,
        attendanceRate: 91,
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-primary animate-pulse" />
          <p className="text-text-secondary">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeInUp">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text mb-2">Dashboard</h1>
        <p className="text-text-secondary">
          Welcome back! Here's your attendance overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatCard
          icon={Users}
          title="Total Employees"
          value={stats.totalEmployees}
          gradientColor={{ from: "#FD7979", to: "#FDACAC" }}
          trend={+2.5}
        />
        <StatCard
          icon={Clock}
          title="Present Today"
          value={stats.presentToday}
          gradientColor={{ from: "#10B981", to: "#6EE7B7" }}
          trend={+5.2}
        />
        <StatCard
          icon={AlertCircle}
          title="Absent Today"
          value={stats.absentToday}
          gradientColor={{ from: "#F59E0B", to: "#FBBF24" }}
          trend={-1.2}
        />
        <StatCard
          icon={TrendingUp}
          title="Attendance Rate"
          value={`${stats.attendanceRate}%`}
          gradientColor={{ from: "#8B5CF6", to: "#C4B5FD" }}
          trend={+3.1}
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <RecentActivity />
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 border border-[#FFCDC9]">
        <h3 className="text-lg font-bold text-text mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg border border-[#FFCDC9] hover:border-primary hover:bg-[#FEEAC9]/20 transition-all text-center">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-text text-sm">Mark Attendance</p>
          </button>
          <button className="p-4 rounded-lg border border-[#FFCDC9] hover:border-primary hover:bg-[#FEEAC9]/20 transition-all text-center">
            <BarChart3 className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-text text-sm">Generate Report</p>
          </button>
          <button className="p-4 rounded-lg border border-[#FFCDC9] hover:border-primary hover:bg-[#FEEAC9]/20 transition-all text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="font-semibold text-text text-sm">Manage Employees</p>
          </button>
        </div>
      </div>
    </div>
  );
}
