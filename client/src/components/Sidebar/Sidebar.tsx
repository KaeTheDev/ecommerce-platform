// interface SidebarProps {
//     activeTab: string;
//     setActiveTab: (tab: string) => void;
//     isOpen: boolean;
//     setIsOpen: (open: boolean) => void;
// }

// const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen}: SidebarProps) => {
// return (
//     <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform lg:static lg:translate-x-0 bg-white shadow-lg border-r flex flex-col h-full'} lg:translate-x-0`}>
//     <div className="p-6 border-b">
//         <p className="text-xl font-bold text-gray-900">Luxarist</p>
//         <p className="text-sm text-gray-600">Admin Dashboard</p>
//     </div>

//     <div className="flex-1 p-6 mt-7 space-y-2 overflow-auto">
//         {['dashboard', 'products', 'orders', 'reviews'].map(tab => (
//             <button
//             key={tab}
//             onClick={() =>{
//                 setActiveTab(tab);
//                 setIsOpen(false);
//             }}
//             className={`w-full text-left py-3 px-4 rounded-xl transition-all ${activeTab === tab ? "bg-blue-200 text-blue shadow-lg" : "text-gray-700 hover:bg-gray-50"}`}
//             >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//         ))}
//     </div>
// </div>
// )}
// export default Sidebar;

// interface SidebarProps {
//   activeTab: string;
//   setActiveTab: (tab: string) => void;
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
// }

// const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) => {
//   return (
//     <div className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform lg:static bg-white shadow-lg border-r flex flex-col h-full ${
//       isOpen ? 'translate-x-0' : '-translate-x-full'
//     } lg:translate-x-0`}>
//       <div className="p-6 border-b">
//         <p className="text-xl font-bold text-gray-900">Luxarist</p>
//         <p className="text-sm text-gray-600">Admin Dashboard</p>
//       </div>

//       <div className="flex-1 p-6 mt-7 space-y-2 overflow-auto">
//         {['dashboard', 'products', 'orders', 'reviews'].map(tab => (
//           <button
//             key={tab}
//             onClick={() => {
//               setActiveTab(tab);
//               setIsOpen(false);
//             }}
//             className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
//               activeTab === tab 
//                 ? "bg-blue-200 text-blue shadow-lg" 
//                 : "text-gray-700 hover:bg-gray-50"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
  }
  
  const Sidebar = ({ activeTab, setActiveTab, isOpen, setIsOpen }: SidebarProps) => {
    return (
      <div 
        className={`w-64 shrink-0 bg-white shadow-lg border-r flex flex-col h-full z-40 
          lg:static fixed inset-y-0 left-0 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b">
          <p className="text-xl font-bold text-gray-900">Luxarist</p>
          <p className="text-sm text-gray-600">Admin Dashboard</p>
        </div>
  
        <div className="flex-1 p-6 mt-7 space-y-2 overflow-auto">
          {['dashboard', 'products', 'orders', 'reviews'].map(tab => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsOpen(false);
              }}
              className={`w-full text-left py-3 px-4 rounded-xl transition-all ${
                activeTab === tab
                  ? "bg-blue-200 text-blue-800 shadow-lg" 
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;