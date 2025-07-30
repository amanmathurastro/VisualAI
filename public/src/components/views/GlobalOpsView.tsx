"use client";

import React from "react";
import {
  Globe,
  Factory,
  Activity,
  Camera,
  Target,
  AlertOctagon,
  Database,
  FileText,
  Bell,
  Brain,
  BrainCircuit,
  Bot,
  GitBranch,
  FileSearch,
} from "lucide-react";
import type { OrganizationStructure } from "../Dashboard";

interface GlobalOpsViewProps {
  organizationStructure: OrganizationStructure;
}

const GlobalOpsView: React.FC<GlobalOpsViewProps> = ({
  organizationStructure,
}) => {
  return (
    <div className="p-4">
      {/* Global Overview Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-4 rounded-xl border border-blue-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-300">Total Regions</span>
            <Globe size={20} className="text-blue-400" />
          </div>
          <p className="text-3xl font-bold">
            {Object.keys(organizationStructure).length}
          </p>
          <p className="text-xs text-blue-400 mt-1">Global Coverage</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-4 rounded-xl border border-emerald-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-emerald-300">Total Plants</span>
            <Factory size={20} className="text-emerald-400" />
          </div>
          <p className="text-3xl font-bold">
            {Object.values(organizationStructure).flat().length}
          </p>
          <p className="text-xs text-emerald-400 mt-1">Worldwide</p>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-4 rounded-xl border border-purple-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-300">Total Lines</span>
            <Activity size={20} className="text-purple-400" />
          </div>
          <p className="text-3xl font-bold">
            {Object.values(organizationStructure)
              .flat()
              .reduce((sum, p) => sum + p.lines, 0)}
          </p>
          <p className="text-xs text-purple-400 mt-1">Production Lines</p>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-950 p-4 rounded-xl border border-orange-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-orange-300">Total Cameras</span>
            <Camera size={20} className="text-orange-400" />
          </div>
          <p className="text-3xl font-bold">
            {Object.values(organizationStructure)
              .flat()
              .reduce((sum, p) => sum + p.cameras, 0)}
          </p>
          <p className="text-xs text-orange-400 mt-1">AI Cameras</p>
        </div>
      </div>

      {/* Regional Performance Overview */}
      <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-4">
        <h3 className="font-semibold mb-4 flex items-center space-x-2">
          <Globe className="text-blue-500" size={20} />
          <span>Regional Performance Overview</span>
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(organizationStructure).map(([region, plants]) => {
            const avgHealth =
              plants.reduce((sum, p) => sum + p.health, 0) / plants.length;
            const totalLines = plants.reduce((sum, p) => sum + p.lines, 0);
            const totalCameras = plants.reduce((sum, p) => sum + p.cameras, 0);

            return (
              <div
                key={region}
                className="bg-gray-800 rounded-lg p-4 border border-gray-700"
              >
                <h4 className="font-semibold text-lg mb-3">{region}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Plants</span>
                    <span className="font-medium">{plants.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Production Lines</span>
                    <span className="font-medium">{totalLines}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cameras</span>
                    <span className="font-medium">{totalCameras}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Avg Health</span>
                    <span
                      className={`font-medium ${
                        avgHealth >= 90
                          ? "text-green-500"
                          : avgHealth >= 85
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {avgHealth.toFixed(1)}%
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-xs text-gray-500 mb-2">
                      Plants in {region}:
                    </p>
                    {plants.map((plant) => (
                      <div
                        key={plant.name}
                        className="flex justify-between text-xs py-1"
                      >
                        <span>{plant.name}</span>
                        <span
                          className={`${
                            plant.health >= 90
                              ? "text-green-500"
                              : plant.health >= 85
                              ? "text-yellow-500"
                              : "text-red-500"
                          }`}
                        >
                          {plant.health}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Dashboard */}
          <div className="bg-gray-900 rounded-xl border border-green-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-green-900/30 rounded">
                <Target className="text-green-500" size={20} />
              </div>
              <h3 className="font-semibold">
                Dashboard - Multi-site summary dashboard
              </h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Prefer all lines/cells in one dashboard
            </p>
            <button className="w-full px-3 py-2 bg-green-900/30 border border-green-800 rounded-lg text-sm">
              View Global Dashboard
            </button>
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
              <p className="text-sm text-gray-400">
                - Escalation management (auto-escalate)
              </p>
              <p className="text-sm text-gray-400">
                - Build and subscribe to alerts
              </p>
              <button className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800 rounded-lg text-sm mt-2">
                Configure Alerts
              </button>
            </div>
          </div>

          {/* Data View */}
          <div className="bg-gray-900 rounded-xl border border-purple-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-purple-900/30 rounded">
                <Database className="text-purple-500" size={20} />
              </div>
              <h3 className="font-semibold">Data View (across sites)</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">
                  defect rates across sites
                </p>
                <p className="text-xl font-bold">2.8%</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">per shift data</p>
                <p className="text-sm">Varies by region</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">per nest/cell</p>
                <p className="text-sm">180+ cells globally</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">production rate</p>
                <p className="text-xl font-bold">52.8K/day</p>
              </div>
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-xs text-gray-500">uptime/downtime</p>
                <p className="text-lg font-bold">91% avg</p>
              </div>
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
              <p className="text-sm text-gray-400">- defect counts, types</p>
              <p className="text-sm text-gray-400">
                - custom date ranges, custom filters
              </p>
              <p className="text-sm text-gray-400">
                - build your own dashboard
              </p>
              <button className="w-full px-3 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 text-sm mt-2">
                Create Custom Report
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
                <FileSearch className="text-gray-400" size={20} />
              </div>
              <h3 className="font-semibold">Audit</h3>
            </div>
            <p className="text-sm text-gray-400">- audit trail</p>
            <button className="w-full px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 text-sm mt-2">
              View Audit Trail
            </button>
          </div>

          {/* Agent */}
          <div className="bg-gray-900 rounded-xl border border-blue-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-900/30 rounded">
                <Bot className="text-blue-500" size={20} />
              </div>
              <h3 className="font-semibold">Agent</h3>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              - logistics aid/integrations
            </p>
            <button className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800 rounded-lg hover:bg-blue-900/50 text-sm">
              <GitBranch size={16} className="inline mr-2" />
              Configure Integrations
            </button>
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
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">
                  - brain upgrade on a production line or plant level
                </p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  AI Model v2.5 available for deployment
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">- license expiry</p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs text-yellow-400">
                  3 plants have licenses expiring within 60 days
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-gray-900 rounded-xl border border-orange-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-orange-900/30 rounded">
                <Brain className="text-orange-500" size={20} />
              </div>
              <h3 className="font-semibold">Troubleshooting</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">- Anomalies</p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  <p className="text-yellow-400">
                    Berlin Plant: Unusual defect pattern
                  </p>
                  <p className="text-orange-400 mt-1">
                    Shanghai: Production drop detected
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  - weld/part/defect trend analysis
                </p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  Cross-site comparison available
                </div>
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
              <p className="text-sm text-gray-400">
                - Intra-domain comparisons
              </p>
              <p className="text-sm text-gray-400">
                - defect rates & production rates across sites
              </p>
              <p className="text-sm text-gray-400">
                - rework time across sites
              </p>
              <p className="text-sm text-gray-400">- dollars saved</p>

              <div className="mt-3 p-3 bg-gray-800 rounded-lg">
                <div className="flex justify-between text-sm mb-2">
                  <span>NA vs EU Performance</span>
                  <span className="text-green-500">NA +3.2%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monthly Savings</span>
                  <span className="text-green-500">$142,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalOpsView;
