"use client";

import { UserCheck, UserX, AlertCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "check-in",
    name: "John Doe",
    time: "09:00 AM",
    icon: UserCheck,
  },
  {
    id: 2,
    type: "check-out",
    name: "Sarah Smith",
    time: "06:15 PM",
    icon: UserX,
  },
  {
    id: 3,
    type: "late",
    name: "Mike Johnson",
    time: "10:30 AM",
    icon: AlertCircle,
  },
  {
    id: 4,
    type: "check-in",
    name: "Emma Davis",
    time: "08:55 AM",
    icon: UserCheck,
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-[#FFCDC9]">
      <h3 className="text-lg font-bold text-text mb-6">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Icon className="text-white" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-text text-sm">
                  {activity.name}
                </p>
                <p className="text-xs text-text-secondary">
                  {activity.type === "check-in"
                    ? "Checked in"
                    : activity.type === "check-out"
                    ? "Checked out"
                    : "Marked as late"}
                </p>
              </div>
              <p className="text-xs text-text-secondary font-medium">
                {activity.time}
              </p>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 px-4 py-2 text-primary font-semibold rounded-lg hover:bg-[#FEEAC9]/20 transition-all">
        View All
      </button>
    </div>
  );
}
