"use client";

import { CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react";

export function AttendanceTable({ records }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "present":
        return {
          icon: CheckCircle,
          color: "text-green-600",
          bg: "bg-green-50" ,
        };
      case "absent":
        return { icon: XCircle, color: "text-red-600", bg: "bg-red-50" };
      case "late":
        return {
          icon: AlertCircle,
          color: "text-yellow-600",
          bg: "bg-yellow-50",
        };
      case "half-day":
        return { icon: Clock, color: "text-blue-600", bg: "bg-blue-50" };
      default:
        return { icon: CheckCircle, color: "text-gray-600", bg: "bg-gray-50" };
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#FFCDC9] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr
              className="border-b border-[#FDACAC]"
              style={{
                background: "linear-gradient(to right, #FEEAC9, #FFCDC9)",
              }}
            >
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Employee
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Employee ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Check In
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Check Out
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {records?.length > 0 ? (
              records.map((record, index) => {
                const {
                  icon: StatusIcon,
                  color,
                  bg,
                } = getStatusIcon(record.status);

                return (
                  <tr
                    key={record.id}
                    className={`border-b border-[#FFCDC9] hover:bg-surface transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-[#FEFBF8]"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <p className="font-semibold text-text">
                        {record.employeeName}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-text-secondary font-mono text-sm">
                      {record.employeeId}
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      {record.date}
                    </td>
                    <td className="px-6 py-4 font-medium text-text">
                      {record.checkIn}
                    </td>
                    <td className="px-6 py-4 font-medium text-text">
                      {record.checkOut}
                    </td>
                    <td className="px-6 py-4">
                      <div
                        className={`flex items-center gap-2 w-fit px-3 py-2 rounded-full ${bg}`}
                      >
                        <StatusIcon size={16} className={color} />
                        <span
                          className={`text-xs font-semibold ${color} capitalize`}
                        >
                          {record.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-primary hover:underline font-medium text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-12 text-center text-text-secondary"
                >
                  No attendance records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
