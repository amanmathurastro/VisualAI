"use client";

import React from "react";
import {
  Target,
  AlertOctagon,
  Database,
  FileText,
  Bell,
  Brain,
  BrainCircuit,
  Bot,
  Cog,
} from "lucide-react";

interface ReworkEngineerViewProps {
  stats: {
    totalParts: number;
    totalDefects: number;
    defectRate: number;
    reworkRate: number;
    uptime: number;
  };
}

const ReworkEngineerView: React.FC<ReworkEngineerViewProps> = ({ stats }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Dashboard */}
          <div className="bg-gray-900 rounded-xl border border-green-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-green-900/30 rounded">
                <Target className="text-green-500" size={20} />
              </div>
              <h3 className="font-semibold">Dashboard - Rework History</h3>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-gray-400">
                Number of parts for rework (filtered by shift, days, weeks)
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-500">Parts for Rework</p>
                  <p className="text-2xl font-bold">{stats.totalDefects}</p>
                  <p className="text-xs text-gray-400 mt-1">Today</p>
                </div>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-xs text-gray-500">Rework Rate</p>
                  <p className="text-2xl font-bold">{stats.reworkRate}%</p>
                  <p className="text-xs text-gray-400 mt-1">Completed</p>
                </div>
              </div>

              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">
                  Rework rate (filtered by defect/part type), most fixed defect,
                  how long does a part live in the system before it is reworked
                  and cleared
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Most Fixed Defect:</span>
                    <span className="font-medium">Weld Gap (45%)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Avg Time to Fix:</span>
                    <span className="font-medium">48 minutes</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Parts in Queue:</span>
                    <span className="font-medium text-yellow-400">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-gray-900 rounded-xl border border-blue-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-900/30 rounded">
                <AlertOctagon className="text-blue-500" size={20} />
              </div>
              <h3 className="font-semibold">Alerts</h3>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400 mb-2">
                - high rework rate (set threshold)
              </p>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm">Rework Rate Threshold</p>
                <div className="flex items-center space-x-2 mt-2">
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-20 px-2 py-1 bg-gray-700 rounded text-sm"
                  />
                  <span className="text-sm text-gray-400">%</span>
                </div>
                {stats.reworkRate > 10 && (
                  <p className="text-xs text-red-400 mt-2">
                    ⚠ Current rate exceeds threshold!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Data View */}
          <div className="bg-gray-900 rounded-xl border border-purple-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-purple-900/30 rounded">
                <Database className="text-purple-500" size={20} />
              </div>
              <h3 className="font-semibold">Data View</h3>
            </div>

            <div className="space-y-2">
              <button className="w-full px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm text-left">
                - defect list ({stats.totalDefects})
              </button>
              <button className="w-full px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm text-left">
                - defect list by type
              </button>
            </div>
          </div>

          {/* Reports */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gray-700 rounded">
                <FileText className="text-gray-400" size={20} />
              </div>
              <h3 className="font-semibold">Reports</h3>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                - Count & serial number of fixes done (filtered by part type,
                shift, time period, defect type, time to fix)
              </p>
              <button className="w-full px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-sm">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          {/* Audit */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gray-700 rounded">
                <FileText className="text-gray-400" size={20} />
              </div>
              <h3 className="font-semibold">Audit</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - Filter by defect type
                </p>
                <select className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm">
                  <option>All Defect Types</option>
                  <option>Weld Gap</option>
                  <option>Surface Scratch</option>
                  <option>Misalignment</option>
                </select>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - serial number of fixes
                </p>
                <input
                  type="text"
                  placeholder="Enter serial number..."
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          {/* Agent */}
          <div className="bg-gray-900 rounded-xl border border-blue-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-900/30 rounded">
                <Bot className="text-blue-500" size={20} />
              </div>
              <h3 className="font-semibold">Agent</h3>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-3">- Robotic rework</p>
              <button className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800 rounded-lg hover:bg-blue-900/50 text-sm">
                <Cog size={16} className="inline mr-2" />
                Activate Robotic Rework
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Notifications */}
          <div className="bg-gray-900 rounded-xl border border-red-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-red-900/30 rounded">
                <Bell className="text-red-500" size={20} />
              </div>
              <h3 className="font-semibold">Notifications</h3>
            </div>

            <p className="text-sm text-gray-400">No new notifications</p>
          </div>

          {/* Troubleshoot/Rework */}
          <div className="bg-gray-900 rounded-xl border border-orange-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-orange-900/30 rounded">
                <Brain className="text-orange-500" size={20} />
              </div>
              <h3 className="font-semibold">Troubleshoot/Rework</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">- Defect details</p>
                <div className="mt-2 p-3 bg-gray-800 rounded-lg text-xs">
                  Select a defect to view details
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  - Similar previous defects
                </p>
                <div className="mt-2 p-3 bg-gray-800 rounded-lg text-xs">
                  AI-powered defect matching
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400">- Feedback on defect</p>
                <button className="mt-2 w-full px-3 py-2 bg-orange-900/30 border border-orange-800 rounded-lg hover:bg-orange-900/50 text-sm">
                  Provide Feedback
                </button>
              </div>
            </div>
          </div>

          {/* Analytics */}
          <div className="bg-gray-900 rounded-xl border border-pink-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-pink-900/30 rounded">
                <BrainCircuit className="text-pink-500" size={20} />
              </div>
              <h3 className="font-semibold">Analytics</h3>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400 mb-2">- Anomalies</p>
                <div className="p-2 bg-gray-800 rounded text-xs space-y-1">
                  <p className="text-yellow-400">
                    ⚠ Unusual rework pattern detected
                  </p>
                  <p className="text-orange-400">
                    ⚠ High repeat failures on Part-A123
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - weld/part/defect trend analysis
                </p>
                <div className="grid grid-cols-3 gap-1 text-center mt-2">
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Weld</p>
                    <p className="font-bold">45%</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Part</p>
                    <p className="font-bold">32%</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Other</p>
                    <p className="font-bold">23%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReworkEngineerView;
