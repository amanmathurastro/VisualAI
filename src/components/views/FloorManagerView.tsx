"use client";

import React from "react";
import {
  AlertOctagon,
  MonitorDown,
  Camera,
  Cpu,
  AlertTriangle,
  Database,
  TrendingUp,
  FileText,
  Bell,
  Brain,
  BrainCircuit,
  FileSearch,
  Search,
  Bot,
  Target,
} from "lucide-react";
import type { Cell, Plant } from "../Dashboard";

interface FloorManagerViewProps {
  cells: Cell[];
  stats: {
    totalParts: number;
    totalDefects: number;
    defectRate: number;
    reworkRate: number;
    uptime: number;
  };
  selectedRegion: string;
  selectedPlant: string;
  currentPlantData: Plant;
}

const FloorManagerView: React.FC<FloorManagerViewProps> = ({
  cells,
  stats,
  selectedRegion,
  selectedPlant,
  currentPlantData,
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Cell Summary Dashboard - Every 7am */}
      <div className="border-b border-gray-800 p-4 bg-gradient-to-r from-gray-900 to-gray-950">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-900/30 rounded-lg">
              <Target className="text-green-500" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">
                Dashboard - Cell Summary Dashboard Every 7am
              </h2>
              <p className="text-sm text-gray-400">
                See all lines/cells in one dashboard
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              {selectedRegion} • {selectedPlant}
            </span>
            <span className="text-xs bg-green-900/30 text-green-400 px-3 py-1 rounded-full">
              Last Update: 7:00 AM
            </span>
          </div>
        </div>

        {/* Production Cell Flash Lights Grid */}
        <div>
          <p className="text-sm text-gray-400 mb-3">
            Production cell flash lights (uptime/downtime)
          </p>
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: currentPlantData.cells }, (_, i) => {
              const cell = cells[i];
              if (!cell) return null;

              const isDown = cell.uptime < 90;
              const hasHighDefects = cell.defectRate > 5;

              return (
                <div
                  key={cell.id}
                  className={`relative p-3 rounded-lg border-2 transition-all ${
                    isDown
                      ? "bg-red-950/50 border-red-500 animate-pulse"
                      : hasHighDefects
                      ? "bg-yellow-950/50 border-yellow-500"
                      : "bg-green-950/50 border-green-500"
                  }`}
                >
                  {/* Flash Light Indicator */}
                  <div
                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${
                      isDown
                        ? "bg-red-500 animate-pulse shadow-lg shadow-red-500/50"
                        : hasHighDefects
                        ? "bg-yellow-500 animate-pulse shadow-lg shadow-yellow-500/50"
                        : "bg-green-500 shadow-lg shadow-green-500/50"
                    }`}
                  />

                  <div className="text-center">
                    <p className="font-semibold text-sm">{cell.name}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Line {cell.line}
                    </p>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Up:</span>
                        <span
                          className={
                            isDown ? "text-red-400 font-bold" : "text-green-400"
                          }
                        >
                          {cell.uptime.toFixed(0)}%
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Def:</span>
                        <span
                          className={
                            hasHighDefects
                              ? "text-yellow-400 font-bold"
                              : "text-gray-300"
                          }
                        >
                          {cell.defectRate.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="flex-1 grid grid-cols-3 gap-4 p-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Alerts Section */}
          <div className="bg-gray-900 rounded-xl border border-blue-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-900/30 rounded">
                <AlertOctagon className="text-blue-500" size={20} />
              </div>
              <h3 className="font-semibold">Alerts</h3>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full ml-auto">
                4
              </span>
            </div>

            <div className="space-y-2">
              {/* Comms Down */}
              <div className="p-3 bg-red-950/20 border border-red-900 rounded-lg flex items-start space-x-2">
                <MonitorDown size={16} className="text-red-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-400">Comms down</p>
                  <p className="text-xs text-red-300">
                    (box/inspection system is down)
                  </p>
                </div>
              </div>

              {/* Camera Out of Place */}
              <div className="p-3 bg-orange-950/20 border border-orange-900 rounded-lg flex items-start space-x-2">
                <Camera size={16} className="text-orange-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-orange-400">
                    Camera out of place
                  </p>
                </div>
              </div>

              {/* PLC Disconnected */}
              <div className="p-3 bg-yellow-950/20 border border-yellow-900 rounded-lg flex items-start space-x-2">
                <Cpu size={16} className="text-yellow-500 mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-yellow-400">
                    PLC disconnected
                  </p>
                </div>
              </div>

              {/* High Defect Rate */}
              <div className="p-3 bg-red-950/20 border border-red-900 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle size={16} className="text-red-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-red-400">
                      High defect rate
                    </p>
                    <p className="text-xs text-red-300">
                      (able to set own thresholds)
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs text-gray-400">Threshold:</span>
                      <input
                        type="number"
                        defaultValue="3.0"
                        className="w-16 px-2 py-1 bg-gray-800 border border-gray-700 rounded text-xs"
                      />
                      <span className="text-xs text-gray-400">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data View Section */}
          <div className="bg-gray-900 rounded-xl border border-purple-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-purple-900/30 rounded">
                <Database className="text-purple-500" size={20} />
              </div>
              <h3 className="font-semibold">Data View</h3>
            </div>

            <div className="space-y-3">
              {/* Defect Rates */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">defect rates</p>
                <p className="text-2xl font-bold">{stats.defectRate}%</p>
                <div className="flex items-center space-x-1 text-xs text-red-500">
                  <TrendingUp size={12} />
                  <span>+0.3% from last hour</span>
                </div>
              </div>

              {/* Per Shift Data */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">per shift data</p>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Morning Shift</span>
                    <span className="font-medium">2.1%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Afternoon Shift</span>
                    <span className="font-medium">2.3%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Night Shift</span>
                    <span className="font-medium text-yellow-500">2.8%</span>
                  </div>
                </div>
              </div>

              {/* Per Cell Data */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">per cell data</p>
                <div className="space-y-1 max-h-20 overflow-y-auto">
                  {cells.slice(0, 5).map((cell) => (
                    <div key={cell.id} className="flex justify-between text-xs">
                      <span>{cell.name}</span>
                      <span
                        className={
                          cell.defectRate > 3
                            ? "text-red-400"
                            : "text-green-400"
                        }
                      >
                        {cell.defectRate.toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Rate */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">production rate</p>
                <p className="text-xl font-bold">847 parts/hr</p>
              </div>

              {/* Uptime/Downtime */}
              <div className="p-3 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400 mb-2">uptime/downtime</p>
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${stats.uptime}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-xs font-medium">{stats.uptime}%</span>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-green-500">Uptime</span>
                  <span className="text-red-500">
                    Downtime: {(100 - stats.uptime).toFixed(1)}%
                  </span>
                </div>
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
            <button className="w-full px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              Generate Report
            </button>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          {/* Audit Section */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-gray-700 rounded">
                <FileSearch className="text-gray-400" size={20} />
              </div>
              <h3 className="font-semibold">Audit</h3>
            </div>

            <div className="space-y-3">
              {/* Filter by Defect Type */}
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - Filter by defect type
                </p>
                <select className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm">
                  <option>All Defects</option>
                  <option>Weld Gap</option>
                  <option>Surface Scratch</option>
                  <option>Misalignment</option>
                  <option>Color Variance</option>
                </select>
              </div>

              {/* Image Search */}
              <div>
                <p className="text-sm text-gray-400 mb-2">- image search</p>
                <button className="w-full px-3 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-sm flex items-center justify-center space-x-2">
                  <Search size={14} />
                  <span>Search Images</span>
                </button>
              </div>

              {/* Timebound Search */}
              <div>
                <p className="text-sm text-gray-400 mb-2">- Timebound search</p>
                <input
                  type="datetime-local"
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          {/* Agent Section */}
          <div className="bg-gray-900 rounded-xl border border-blue-800 p-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="p-1.5 bg-blue-900/30 rounded">
                <Bot className="text-blue-500" size={20} />
              </div>
              <h3 className="font-semibold">Agent</h3>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-3">
                - Replace floor manager
              </p>
              <button className="w-full px-3 py-2 bg-blue-900/30 border border-blue-800 rounded-lg hover:bg-blue-900/50 transition-colors text-sm">
                Activate AI Agent
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

            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">
                  - production line software upgrade
                </p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs">
                  Version 2.4.5 available
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">- license expiry</p>
                <div className="mt-2 p-2 bg-gray-800 rounded text-xs text-yellow-400">
                  Expires in 30 days
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
                <p className="text-sm text-gray-400">
                  - Feedback loop (annotate images and upload)
                </p>
                <button className="mt-2 w-full px-3 py-2 bg-orange-900/30 border border-orange-800 rounded-lg hover:bg-orange-900/50 transition-colors text-sm">
                  Open Feedback Tool
                </button>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  - Image analysis/comparison (search previous similar images)
                </p>
                <button className="mt-2 w-full px-3 py-2 bg-orange-900/30 border border-orange-800 rounded-lg hover:bg-orange-900/50 transition-colors text-sm">
                  Analyze Images
                </button>
              </div>

              <div>
                <p className="text-sm text-gray-400">- troubleshooting tips</p>
                <div className="mt-2 p-3 bg-gray-800 rounded-lg">
                  <ul className="text-xs space-y-1">
                    <li>• Check camera calibration</li>
                    <li>• Verify lighting conditions</li>
                    <li>• Clean camera lenses</li>
                    <li>• Restart inspection system</li>
                  </ul>
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
              <div>
                <p className="text-sm text-gray-400 mb-2">- Anomalies</p>
                <div className="p-2 bg-gray-800 rounded text-xs space-y-1">
                  <p className="text-yellow-400">
                    ⚠ Pattern detected in Cell 3A
                  </p>
                  <p className="text-orange-400">⚠ Camera drift on CAM-2</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - Camera trend analysis
                </p>
                <div className="space-y-1">
                  {["CAM-1", "CAM-2", "CAM-3"].map((cam, idx) => (
                    <div key={cam} className="flex justify-between text-xs p-1">
                      <span>{cam}</span>
                      <span
                        className={
                          idx === 0 ? "text-green-400" : "text-red-400"
                        }
                      >
                        {idx === 0 ? "↑" : "↓"} {Math.abs(3 - idx)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-2">
                  - weld/part/defect trend analysis
                </p>
                <div className="grid grid-cols-3 gap-1 text-center">
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Weld</p>
                    <p className="font-bold">↑12%</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Part</p>
                    <p className="font-bold text-green-400">↓5%</p>
                  </div>
                  <div className="p-2 bg-gray-800 rounded">
                    <p className="text-xs text-gray-500">Defect</p>
                    <p className="font-bold text-yellow-400">↑3%</p>
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

export default FloorManagerView;
