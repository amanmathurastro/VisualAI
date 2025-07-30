// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Camera,
//   AlertTriangle,
//   CheckCircle,
//   TrendingUp,
//   TrendingDown,
//   Factory,
//   Globe,
//   Activity,
//   Wrench,
//   Eye,
//   Bell,
//   Clock,
//   AlertCircle,
//   Settings,
//   User,
//   Menu,
//   X,
//   Gauge,
//   Play,
//   Pause,
//   ChevronLeft,
//   ChevronRight,
//   Box,
//   Target,
//   FileText,
//   Brain,
//   AlertOctagon,
//   MessageSquare,
//   Image,
//   Database,
//   FileSearch,
//   Bot,
//   MonitorDown,
//   MonitorUp,
//   BrainCircuit,
//   Replace,
//   Cog,
//   GitBranch,
//   Upload,
//   Wifi,
//   WifiOff,
//   Search,
//   Cpu,
// } from "lucide-react";

// // Import sub-components
// import FloorManagerView from "./views/FloorManagerView";
// import ReworkEngineerView from "./views/ReworkEngineerView";
// import GlobalOpsView from "./views/GlobalOpsView";

// // Types
// export interface Cell {
//   id: string;
//   name: string;
//   plant: string;
//   line: number;
//   status: "online" | "offline";
//   uptime: number;
//   defectRate: number;
// }

// export interface Plant {
//   name: string;
//   lines: number;
//   cells: number;
//   cameras: number;
//   health: number;
// }

// export interface OrganizationStructure {
//   [key: string]: Plant[];
// }

// const Dashboard = () => {
//   const [userRole, setUserRole] = useState<
//     "floor-manager" | "rework-engineer" | "global-ops"
//   >("floor-manager");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [isLiveMode, setIsLiveMode] = useState(true);
//   const [selectedRegion, setSelectedRegion] = useState("North America");
//   const [selectedPlant, setSelectedPlant] = useState("Detroit Plant");
//   const [stats] = useState({
//     totalParts: 15420,
//     totalDefects: 354,
//     defectRate: 2.3,
//     reworkRate: 85.5,
//     uptime: 94.2,
//   });

//   // Organization structure with regions and plants
//   const organizationStructure: OrganizationStructure = {
//     "North America": [
//       { name: "Detroit Plant", lines: 5, cells: 15, cameras: 45, health: 94 },
//       { name: "Chicago Plant", lines: 4, cells: 12, cameras: 36, health: 91 },
//       { name: "Toronto Plant", lines: 3, cells: 9, cameras: 27, health: 88 },
//     ],
//     Europe: [
//       { name: "Berlin Plant", lines: 3, cells: 9, cameras: 27, health: 87 },
//       { name: "Milan Plant", lines: 4, cells: 12, cameras: 36, health: 92 },
//       { name: "Barcelona Plant", lines: 3, cells: 9, cameras: 27, health: 89 },
//     ],
//     Asia: [
//       { name: "Shanghai Plant", lines: 7, cells: 21, cameras: 63, health: 91 },
//       { name: "Tokyo Plant", lines: 5, cells: 15, cameras: 45, health: 93 },
//       { name: "Seoul Plant", lines: 4, cells: 12, cameras: 36, health: 90 },
//     ],
//   };

//   const currentPlantData =
//     organizationStructure[selectedRegion]?.find(
//       (p) => p.name === selectedPlant
//     ) || organizationStructure["North America"][0];

//   // Generate mock cells data
//   const cells: Cell[] = Array.from(
//     { length: currentPlantData.cells },
//     (_, i) => ({
//       id: `CELL-${Math.floor(i / 3) + 1}${String.fromCharCode(65 + (i % 3))}`,
//       name: `Cell ${Math.floor(i / 3) + 1}${String.fromCharCode(65 + (i % 3))}`,
//       plant: selectedPlant,
//       line: Math.floor(i / 3) + 1,
//       status: Math.random() > 0.1 ? "online" : "offline",
//       uptime: 85 + Math.random() * 15,
//       defectRate: Math.random() * 5 + 0.5,
//     })
//   );

//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       <div className="flex h-screen overflow-hidden">
//         {/* Sidebar - Now simpler without role buttons */}
//         <div
//           className={`${
//             sidebarOpen ? "w-64" : "w-16"
//           } bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col flex-shrink-0`}
//         >
//           <div className="p-4 border-b border-gray-800">
//             <div className="flex items-center justify-between">
//               <div
//                 className={`flex items-center space-x-3 ${
//                   !sidebarOpen && "justify-center"
//                 }`}
//               >
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
//                   <Eye className="w-6 h-6 text-white" />
//                 </div>
//                 {sidebarOpen && (
//                   <div>
//                     <h1 className="text-xl font-bold">VisioTrack AI</h1>
//                     <p className="text-xs text-gray-500">Smart Vision System</p>
//                   </div>
//                 )}
//               </div>
//               <button
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 {sidebarOpen ? (
//                   <ChevronLeft size={20} />
//                 ) : (
//                   <ChevronRight size={20} />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Sidebar content - can be used for navigation or quick actions */}
//           <div className="flex-1 px-4 py-6">
//             {sidebarOpen && (
//               <>
//                 <div className="mb-6">
//                   <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
//                     Quick Stats
//                   </h3>
//                   <div className="space-y-3">
//                     <div className="bg-gray-800 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="text-xs text-gray-400">
//                           Active Alerts
//                         </span>
//                         <AlertCircle size={14} className="text-yellow-500" />
//                       </div>
//                       <p className="text-xl font-bold">4</p>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="text-xs text-gray-400">
//                           System Health
//                         </span>
//                         <Activity size={14} className="text-green-500" />
//                       </div>
//                       <p className="text-xl font-bold">94%</p>
//                     </div>
//                     <div className="bg-gray-800 rounded-lg p-3">
//                       <div className="flex items-center justify-between mb-1">
//                         <span className="text-xs text-gray-400">
//                           Defect Rate
//                         </span>
//                         <TrendingUp size={14} className="text-red-500" />
//                       </div>
//                       <p className="text-xl font-bold">{stats.defectRate}%</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-800 pt-6">
//                   <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
//                     System Status
//                   </h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-400">AI Model</span>
//                       <span className="text-green-500">v2.4.1</span>
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-400">License</span>
//                       <span className="text-green-500">Active</span>
//                     </div>
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-gray-400">PLC Status</span>
//                       <span className="text-green-500">Connected</span>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* User Profile - moved to bottom */}
//           {sidebarOpen && (
//             <div className="p-4 border-t border-gray-800">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
//                   <User size={18} />
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium">John Anderson</p>
//                   <p className="text-xs text-gray-500">System User</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Enhanced Header with Role Selector */}
//           <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex-shrink-0">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-6">
//                 {/* Role Selector Dropdown */}
//                 <div className="flex items-center space-x-4">
//                   <div className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-2">
//                     <User size={16} className="text-gray-400" />
//                     <select
//                       value={userRole}
//                       onChange={(e) => setUserRole(e.target.value as any)}
//                       className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
//                     >
//                       <option value="floor-manager">Floor Manager</option>
//                       <option value="rework-engineer">Rework Engineer</option>
//                       <option value="global-ops">Global Ops Head</option>
//                     </select>
//                   </div>

//                   {/* Role-specific icon and color indicator */}
//                   <div
//                     className={`p-2 rounded-lg ${
//                       userRole === "floor-manager"
//                         ? "bg-pink-900/30"
//                         : userRole === "rework-engineer"
//                         ? "bg-purple-900/30"
//                         : "bg-blue-900/30"
//                     }`}
//                   >
//                     {userRole === "floor-manager" && (
//                       <Activity className="text-pink-500" size={20} />
//                     )}
//                     {userRole === "rework-engineer" && (
//                       <Wrench className="text-purple-500" size={20} />
//                     )}
//                     {userRole === "global-ops" && (
//                       <Globe className="text-blue-500" size={20} />
//                     )}
//                   </div>
//                 </div>

//                 {/* Title and Info */}
//                 <div>
//                   <h1 className="text-2xl font-bold">
//                     {userRole === "floor-manager" && "Floor Manager Dashboard"}
//                     {userRole === "rework-engineer" &&
//                       "Rework Engineer Dashboard"}
//                     {userRole === "global-ops" &&
//                       "Global Operations Command Center"}
//                   </h1>
//                   <p className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
//                     <Clock size={14} />
//                     <span>{new Date().toLocaleString()}</span>
//                     {isLiveMode && (
//                       <>
//                         <span className="text-gray-600">•</span>
//                         <span className="flex items-center text-green-500">
//                           <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
//                           Live
//                         </span>
//                       </>
//                     )}
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 {/* Plant Selector - Visible for Floor Manager and Rework Engineer */}
//                 {userRole !== "global-ops" && (
//                   <div className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-2">
//                     <Factory size={16} className="text-gray-400" />
//                     <select
//                       value={selectedRegion}
//                       onChange={(e) => {
//                         setSelectedRegion(e.target.value);
//                         setSelectedPlant(
//                           organizationStructure[e.target.value][0].name
//                         );
//                       }}
//                       className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
//                     >
//                       {Object.keys(organizationStructure).map((region) => (
//                         <option key={region} value={region}>
//                           {region}
//                         </option>
//                       ))}
//                     </select>
//                     <span className="text-gray-600">›</span>
//                     <select
//                       value={selectedPlant}
//                       onChange={(e) => setSelectedPlant(e.target.value)}
//                       className="bg-transparent text-sm focus:outline-none cursor-pointer"
//                     >
//                       {organizationStructure[selectedRegion].map((plant) => (
//                         <option key={plant.name} value={plant.name}>
//                           {plant.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 )}

//                 {/* Notifications */}
//                 <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
//                   <Bell size={20} />
//                   <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
//                 </button>

//                 {/* Settings */}
//                 <button className="p-2 text-gray-400 hover:text-white transition-colors">
//                   <Settings size={20} />
//                 </button>

//                 {/* Live/Pause Toggle */}
//                 <button
//                   onClick={() => setIsLiveMode(!isLiveMode)}
//                   className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
//                     isLiveMode
//                       ? "bg-green-600 text-white"
//                       : "bg-gray-700 text-gray-300"
//                   }`}
//                 >
//                   {isLiveMode ? <Play size={16} /> : <Pause size={16} />}
//                   <span className="text-sm font-medium">
//                     {isLiveMode ? "Live" : "Paused"}
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </header>

//           {/* Dashboard Content - Now scrollable */}
//           <div className="flex-1 overflow-y-auto">
//             {userRole === "floor-manager" && (
//               <FloorManagerView
//                 cells={cells}
//                 stats={stats}
//                 selectedRegion={selectedRegion}
//                 selectedPlant={selectedPlant}
//                 currentPlantData={currentPlantData}
//               />
//             )}

//             {userRole === "rework-engineer" && (
//               <ReworkEngineerView stats={stats} />
//             )}

//             {userRole === "global-ops" && (
//               <GlobalOpsView organizationStructure={organizationStructure} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";

import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Factory,
  Globe,
  Activity,
  Wrench,
  Eye,
  Bell,
  Clock,
  AlertCircle,
  Settings,
  User,
  X,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  AlertOctagon,
} from "lucide-react";

// Import sub-components
import FloorManagerView from "./views/FloorManagerView";
import ReworkEngineerView from "./views/ReworkEngineerView";
import GlobalOpsView from "./views/GlobalOpsView";

// Helper function to format time ago
const formatTimeAgo = (date: Date): string => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
};

// Types
export interface Cell {
  id: string;
  name: string;
  plant: string;
  line: number;
  status: "online" | "offline";
  uptime: number;
  defectRate: number;
}

export interface Plant {
  name: string;
  lines: number;
  cells: number;
  cameras: number;
  health: number;
}

export interface OrganizationStructure {
  [key: string]: Plant[];
}

const Dashboard = () => {
  const [userRole, setUserRole] = useState<
    "floor-manager" | "rework-engineer" | "global-ops"
  >("floor-manager");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("North America");
  const [selectedPlant, setSelectedPlant] = useState("Detroit Plant");
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<
    Array<{
      id: number;
      type: "error" | "warning" | "info" | "success";
      title: string;
      message: string;
      timestamp: Date;
      read: boolean;
    }>
  >([]);
  const [stats] = useState({
    totalParts: 15420,
    totalDefects: 354,
    defectRate: 2.3,
    reworkRate: 85.5,
    uptime: 94.2,
  });

  // Notification templates for random generation
  const notificationTemplates = [
    {
      type: "error" as const,
      title: "Camera Malfunction",
      messages: [
        "CAM-2 in Cell 3A has stopped responding",
        "CAM-1 image quality degraded - cleaning required",
        "CAM-3 offline - connection timeout",
        "Camera calibration failed on Line 2",
      ],
    },
    {
      type: "warning" as const,
      title: "System Alert",
      messages: [
        "High defect rate detected on Line 4 (8.2%)",
        "PLC communication lag detected - 250ms delay",
        "Temperature anomaly in inspection zone",
        "Lighting conditions suboptimal in Cell 2B",
        "Memory usage high on AI processing unit (87%)",
      ],
    },
    {
      type: "error" as const,
      title: "Critical Issue",
      messages: [
        "Emergency stop activated on Line 3",
        "Inspection system down - Cell 1A",
        "Network connectivity lost to Plant Server",
        "AI Model inference timeout - multiple parts queued",
      ],
    },
    {
      type: "info" as const,
      title: "System Update",
      messages: [
        "AI Model v2.4.2 ready for deployment",
        "Scheduled maintenance reminder - Tomorrow 2 AM",
        "New defect pattern detected and catalogued",
        "Backup completed successfully",
      ],
    },
    {
      type: "success" as const,
      title: "Resolution Update",
      messages: [
        "CAM-2 back online after maintenance",
        "Defect rate normalized on Line 4",
        "System performance optimized - 15% faster",
        "All cameras calibrated successfully",
      ],
    },
  ];

  // Generate random notifications
  useEffect(() => {
    if (!isLiveMode) return;

    const generateRandomNotification = () => {
      const template =
        notificationTemplates[
          Math.floor(Math.random() * notificationTemplates.length)
        ];
      const message =
        template.messages[Math.floor(Math.random() * template.messages.length)];

      const newNotification = {
        id: Date.now(),
        type: template.type,
        title: template.title,
        message: message,
        timestamp: new Date(),
        read: false,
      };

      setNotifications((prev) => [newNotification, ...prev].slice(0, 20)); // Keep last 20 notifications
    };

    // Generate initial notification
    setTimeout(generateRandomNotification, 3000);

    // Generate notifications at random intervals (between 15-45 seconds)
    const interval = setInterval(() => {
      generateRandomNotification();
    }, Math.random() * 30000 + 15000);

    return () => clearInterval(interval);
  }, [isLiveMode]);

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
    setShowNotifications(false);
  };

  // Get unread count
  const unreadCount = notifications.filter((n) => !n.read).length;

  // Organization structure with regions and plants
  const organizationStructure: OrganizationStructure = {
    "North America": [
      { name: "Detroit Plant", lines: 5, cells: 15, cameras: 45, health: 94 },
      { name: "Chicago Plant", lines: 4, cells: 12, cameras: 36, health: 91 },
      { name: "Toronto Plant", lines: 3, cells: 9, cameras: 27, health: 88 },
    ],
    Europe: [
      { name: "Berlin Plant", lines: 3, cells: 9, cameras: 27, health: 87 },
      { name: "Milan Plant", lines: 4, cells: 12, cameras: 36, health: 92 },
      { name: "Barcelona Plant", lines: 3, cells: 9, cameras: 27, health: 89 },
    ],
    Asia: [
      { name: "Shanghai Plant", lines: 7, cells: 21, cameras: 63, health: 91 },
      { name: "Tokyo Plant", lines: 5, cells: 15, cameras: 45, health: 93 },
      { name: "Seoul Plant", lines: 4, cells: 12, cameras: 36, health: 90 },
    ],
  };

  const currentPlantData =
    organizationStructure[selectedRegion]?.find(
      (p) => p.name === selectedPlant
    ) || organizationStructure["North America"][0];

  // Generate mock cells data
  const cells: Cell[] = Array.from(
    { length: currentPlantData.cells },
    (_, i) => ({
      id: `CELL-${Math.floor(i / 3) + 1}${String.fromCharCode(65 + (i % 3))}`,
      name: `Cell ${Math.floor(i / 3) + 1}${String.fromCharCode(65 + (i % 3))}`,
      plant: selectedPlant,
      line: Math.floor(i / 3) + 1,
      status: Math.random() > 0.1 ? "online" : "offline",
      uptime: 85 + Math.random() * 15,
      defectRate: Math.random() * 5 + 0.5,
    })
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - Now simpler without role buttons */}
        <div
          className={`${
            sidebarOpen ? "w-64" : "w-16"
          } bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col flex-shrink-0`}
        >
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center space-x-3 ${
                  !sidebarOpen && "justify-center"
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                {sidebarOpen && (
                  <div>
                    <h1 className="text-xl font-bold">VisioTrack AI</h1>
                    <p className="text-xs text-gray-500">Smart Vision System</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-400 hover:text-white"
              >
                {sidebarOpen ? (
                  <ChevronLeft size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Sidebar content - can be used for navigation or quick actions */}
          <div className="flex-1 px-4 py-6">
            {sidebarOpen && (
              <>
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Quick Stats
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">
                          Active Alerts
                        </span>
                        <AlertCircle size={14} className="text-yellow-500" />
                      </div>
                      <p className="text-xl font-bold">
                        {
                          notifications.filter(
                            (n) => n.type === "error" || n.type === "warning"
                          ).length
                        }
                      </p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">
                          System Health
                        </span>
                        <Activity size={14} className="text-green-500" />
                      </div>
                      <p className="text-xl font-bold">94%</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-400">
                          Defect Rate
                        </span>
                        <TrendingUp size={14} className="text-red-500" />
                      </div>
                      <p className="text-xl font-bold">{stats.defectRate}%</p>
                    </div>
                  </div>
                </div>

                {/* Recent Alerts */}
                {notifications
                  .filter((n) => n.type === "error" || n.type === "warning")
                  .slice(0, 3).length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Recent Alerts
                    </h3>
                    <div className="space-y-2">
                      {notifications
                        .filter(
                          (n) => n.type === "error" || n.type === "warning"
                        )
                        .slice(0, 3)
                        .map((alert) => (
                          <div
                            key={alert.id}
                            className={`p-2 rounded-lg text-xs ${
                              alert.type === "error"
                                ? "bg-red-950/30 border border-red-900"
                                : "bg-yellow-950/30 border border-yellow-900"
                            }`}
                          >
                            <p
                              className={`font-medium ${
                                alert.type === "error"
                                  ? "text-red-400"
                                  : "text-yellow-400"
                              }`}
                            >
                              {alert.title}
                            </p>
                            <p className="text-gray-400 mt-1 text-xs truncate">
                              {alert.message}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-800 pt-6">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    System Status
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">AI Model</span>
                      <span className="text-green-500">v2.4.1</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">License</span>
                      <span className="text-green-500">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">PLC Status</span>
                      <span className="text-green-500">Connected</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* User Profile - moved to bottom */}
          {sidebarOpen && (
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <User size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">John Anderson</p>
                  <p className="text-xs text-gray-500">System User</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Enhanced Header with Role Selector */}
          <header className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Role Selector Dropdown */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-2">
                    <User size={16} className="text-gray-400" />
                    <select
                      value={userRole}
                      // @typescript-eslint/no-explicit-any
                      onChange={(e) => setUserRole(e.target.value as any)}
                      className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
                    >
                      <option value="floor-manager">Floor Manager</option>
                      <option value="rework-engineer">Rework Engineer</option>
                      <option value="global-ops">Global Ops Head</option>
                    </select>
                  </div>

                  {/* Role-specific icon and color indicator */}
                  <div
                    className={`p-2 rounded-lg ${
                      userRole === "floor-manager"
                        ? "bg-pink-900/30"
                        : userRole === "rework-engineer"
                        ? "bg-purple-900/30"
                        : "bg-blue-900/30"
                    }`}
                  >
                    {userRole === "floor-manager" && (
                      <Activity className="text-pink-500" size={20} />
                    )}
                    {userRole === "rework-engineer" && (
                      <Wrench className="text-purple-500" size={20} />
                    )}
                    {userRole === "global-ops" && (
                      <Globe className="text-blue-500" size={20} />
                    )}
                  </div>
                </div>

                {/* Title and Info */}
                <div>
                  <h1 className="text-2xl font-bold">
                    {userRole === "floor-manager" && "Floor Manager Dashboard"}
                    {userRole === "rework-engineer" &&
                      "Rework Engineer Dashboard"}
                    {userRole === "global-ops" &&
                      "Global Operations Command Center"}
                  </h1>
                  <p className="text-sm text-gray-500 mt-1 flex items-center space-x-2">
                    <Clock size={14} />
                    <span>{new Date().toLocaleString()}</span>
                    {isLiveMode && (
                      <>
                        <span className="text-gray-600">•</span>
                        <span className="flex items-center text-green-500">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></span>
                          Live
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Plant Selector - Visible for Floor Manager and Rework Engineer */}
                {userRole !== "global-ops" && (
                  <div className="flex items-center space-x-3 bg-gray-800 rounded-lg px-4 py-2">
                    <Factory size={16} className="text-gray-400" />
                    <select
                      value={selectedRegion}
                      onChange={(e) => {
                        setSelectedRegion(e.target.value);
                        setSelectedPlant(
                          organizationStructure[e.target.value][0].name
                        );
                      }}
                      className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
                    >
                      {Object.keys(organizationStructure).map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                    <span className="text-gray-600">›</span>
                    <select
                      value={selectedPlant}
                      onChange={(e) => setSelectedPlant(e.target.value)}
                      className="bg-transparent text-sm focus:outline-none cursor-pointer"
                    >
                      {organizationStructure[selectedRegion].map((plant) => (
                        <option key={plant.name} value={plant.name}>
                          {plant.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Notifications */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                        {unreadCount > 9 ? "9+" : unreadCount}
                      </span>
                    )}
                  </button>

                  {/* Notifications Panel */}
                  {showNotifications && (
                    <div className="absolute right-0 top-12 w-96 max-h-[600px] bg-gray-900 border border-gray-800 rounded-xl shadow-2xl z-50 flex flex-col">
                      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                        <h3 className="font-semibold">Notifications</h3>
                        <div className="flex items-center space-x-2">
                          {notifications.length > 0 && (
                            <button
                              onClick={clearAllNotifications}
                              className="text-xs text-gray-400 hover:text-white"
                            >
                              Clear all
                            </button>
                          )}
                          <button
                            onClick={() => setShowNotifications(false)}
                            className="text-gray-400 hover:text-white"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <div className="p-8 text-center text-gray-500">
                            <Bell
                              size={32}
                              className="mx-auto mb-3 opacity-50"
                            />
                            <p className="text-sm">No notifications yet</p>
                          </div>
                        ) : (
                          <div className="divide-y divide-gray-800">
                            {notifications.map((notification) => (
                              <div
                                key={notification.id}
                                className={`p-4 hover:bg-gray-800/50 transition-colors cursor-pointer ${
                                  !notification.read ? "bg-gray-800/30" : ""
                                }`}
                                onClick={() => markAsRead(notification.id)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div
                                    className={`mt-1 ${
                                      notification.type === "error"
                                        ? "text-red-500"
                                        : notification.type === "warning"
                                        ? "text-yellow-500"
                                        : notification.type === "success"
                                        ? "text-green-500"
                                        : "text-blue-500"
                                    }`}
                                  >
                                    {notification.type === "error" && (
                                      <AlertOctagon size={18} />
                                    )}
                                    {notification.type === "warning" && (
                                      <AlertTriangle size={18} />
                                    )}
                                    {notification.type === "success" && (
                                      <CheckCircle size={18} />
                                    )}
                                    {notification.type === "info" && (
                                      <AlertCircle size={18} />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-start justify-between">
                                      <h4
                                        className={`text-sm font-medium ${
                                          !notification.read
                                            ? "text-white"
                                            : "text-gray-300"
                                        }`}
                                      >
                                        {notification.title}
                                      </h4>
                                      <span className="text-xs text-gray-500">
                                        {formatTimeAgo(notification.timestamp)}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mt-1">
                                      {notification.message}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Settings */}
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Settings size={20} />
                </button>

                {/* Live/Pause Toggle */}
                <button
                  onClick={() => setIsLiveMode(!isLiveMode)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isLiveMode
                      ? "bg-green-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {isLiveMode ? <Play size={16} /> : <Pause size={16} />}
                  <span className="text-sm font-medium">
                    {isLiveMode ? "Live" : "Paused"}
                  </span>
                </button>
              </div>
            </div>
          </header>

          {/* Dashboard Content - Now scrollable */}
          <div className="flex-1 overflow-y-auto">
            {userRole === "floor-manager" && (
              <FloorManagerView
                cells={cells}
                stats={stats}
                selectedRegion={selectedRegion}
                selectedPlant={selectedPlant}
                currentPlantData={currentPlantData}
              />
            )}

            {userRole === "rework-engineer" && (
              <ReworkEngineerView stats={stats} />
            )}

            {userRole === "global-ops" && (
              <GlobalOpsView organizationStructure={organizationStructure} />
            )}
          </div>
        </div>
      </div>

      {/* Toast Notification - Now at top-right */}
      {notifications.length > 0 && !notifications[0].read && (
        <div className="fixed top-20 right-4 z-50 animate-fadeIn">
          <div
            className={`bg-gray-900 border rounded-lg shadow-2xl p-4 max-w-sm ${
              notifications[0].type === "error"
                ? "border-red-800"
                : notifications[0].type === "warning"
                ? "border-yellow-800"
                : notifications[0].type === "success"
                ? "border-green-800"
                : "border-blue-800"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`mt-1 ${
                  notifications[0].type === "error"
                    ? "text-red-500"
                    : notifications[0].type === "warning"
                    ? "text-yellow-500"
                    : notifications[0].type === "success"
                    ? "text-green-500"
                    : "text-blue-500"
                }`}
              >
                {notifications[0].type === "error" && (
                  <AlertOctagon size={18} />
                )}
                {notifications[0].type === "warning" && (
                  <AlertTriangle size={18} />
                )}
                {notifications[0].type === "success" && (
                  <CheckCircle size={18} />
                )}
                {notifications[0].type === "info" && <AlertCircle size={18} />}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-medium">
                  {notifications[0].title}
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  {notifications[0].message}
                </p>
              </div>
              <button
                onClick={() => markAsRead(notifications[0].id)}
                className="text-gray-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
