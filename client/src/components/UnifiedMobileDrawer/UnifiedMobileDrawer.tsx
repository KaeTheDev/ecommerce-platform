// import { Link, useLocation } from "react-router-dom";
// import { useLogout } from "../../contexts/LogoutContext";
// import { useState, useEffect } from "react";

// interface UnifiedMobileDrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function UnifiedMobileDrawer({
//   isOpen,
//   onClose
// }: UnifiedMobileDrawerProps) {
//   const { requestLogout } = useLogout();
//   const location = useLocation();
//   const [shopOpen, setShopOpen] = useState(false);

//   // Role detection
//   const isAdmin = location.pathname.startsWith("/panel");

//   const shopCategories = [
//     ["Watches", "watches"],
//     ["Bracelets", "bracelets"],
//     ["Necklaces", "necklaces"],
//     ["Rings", "rings"],
//     ["Earrings", "earrings"]
//   ];

//   useEffect(() => {
//     setShopOpen(false);
//   }, [location.pathname]);

//   return (
//     <>
//       {/* Backdrop */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Drawer */}
//       <aside
//         className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 lg:hidden ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">

//           {/* Header */}
//           <div className="p-6 border-b flex items-center justify-between">
//             <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
//             <button
//               onClick={onClose}
//               className="text-gray-600 hover:text-gray-900"
//             >
//               ✕
//             </button>
//           </div>

//           {/* Scrollable content */}
//           <div className="flex-1 overflow-y-auto">

//             {/* SITE */}
//             <section className="py-4 border-b">
//               <h3 className="px-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">
//                 Site
//               </h3>
//               <ul className="mt-2 px-4 space-y-1">
//                 <li>
//                   <Link to="/" onClick={onClose} className={`block px-4 py-3 rounded-xl text-sm transition ${
//                     location.pathname === "/" ? "bg-gray-200 font-medium" : "text-gray-700 hover:bg-gray-100"
//                   }`}>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/collections" onClick={onClose} className={`block px-4 py-3 rounded-xl text-sm transition ${
//                     location.pathname === "/collections" ? "bg-gray-200 font-medium" : "text-gray-700 hover:bg-gray-100"
//                   }`}>
//                     Collections
//                   </Link>
//                 </li>
//                 {/* Shop dropdown */}
//                 <li>
//                   <button
//                     onClick={() => setShopOpen(prev => !prev)}
//                     className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition"
//                   >
//                     <span className="flex items-center">
//                       Shop
//                       <svg className={`w-3 h-3 ml-2 transition-transform ${shopOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                       </svg>
//                     </span>
//                   </button>
//                   {shopOpen && (
//                     <ul className="mt-1 ml-4 space-y-1">
//                       {shopCategories.map(([name, slug]) => (
//                         <li key={slug}>
//                           <Link to={`/collections/${slug}`} onClick={onClose} className={`block px-4 py-2 rounded-lg text-sm transition ${
//                             location.pathname === `/collections/${slug}` ? "bg-gray-200 font-medium" : "hover:bg-gray-100 text-gray-700"
//                           }`}>
//                             {name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               </ul>
//             </section>

//             {/* DASHBOARD */}
//             <section className="py-4">
//               <h3 className="px-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">
//                 {isAdmin ? "Admin Dashboard" : "Profile"}
//               </h3>
//               <ul className="mt-2 px-4 space-y-1">
//                 {/* Admin tabs */}
//                 {isAdmin
//                   ? ["overview", "products", "orders", "reviews", "admin settings"].map(tab => (
//                       <li key={tab}>
//                         <Link
//                           to={`/panel?tab=${tab}`}
//                           onClick={onClose}
//                           className={`block px-4 py-3 rounded-xl text-sm transition ${
//                             location.search.includes(`tab=${tab}`) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
//                           }`}
//                         >
//                           {tab === "admin settings" ? "Admin Settings" : tab.charAt(0).toUpperCase() + tab.slice(1)}
//                         </Link>
//                       </li>
//                     ))
//                   : [
//                       { label: "My Profile", value: "My Profile" },
//                       { label: "My Orders", value: "My Orders" },
//                       { label: "My Reviews", value: "My Reviews" },
//                       { label: "Account Settings", value: "Account Settings" }
//                     ].map(({ label, value }) => (
//                       <li key={value}>
//                         <Link
//                           to={`/userProfile?tab=${encodeURIComponent(value)}`}
//                           onClick={onClose}
//                           className={`block px-4 py-3 rounded-xl text-sm transition ${
//                             location.search.includes(`tab=${encodeURIComponent(value)}`) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
//                           }`}
//                         >
//                           {label}
//                         </Link>
//                       </li>
//                     ))}
//               </ul>
//             </section>
//           </div>

//           {/* Logout */}
//           <div className="p-4 border-t">
//             <button
//               onClick={() => {
//                 requestLogout();
//                 onClose();
//               }}
//               className="w-full text-left px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-red-100 transition"
//             >
//               Log Out
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }

import { Link, useLocation } from "react-router-dom";
import { useLogout } from "../../contexts/LogoutContext";
import { useState, useEffect } from "react";

interface UnifiedMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnifiedMobileDrawer({
  isOpen,
  onClose
}: UnifiedMobileDrawerProps) {
  const { requestLogout } = useLogout();
  const location = useLocation();
  const [shopOpen, setShopOpen] = useState(false);

  // Role detection
  const isAdmin = location.pathname.startsWith("/panel");
  
  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("token");

  const shopCategories = [
    ["Watches", "watches"],
    ["Bracelets", "bracelets"],
    ["Necklaces", "necklaces"],
    ["Rings", "rings"],
    ["Earrings", "earrings"]
  ];

  useEffect(() => {
    setShopOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="p-6 border-b flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              ✕
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">

            {/* SITE */}
            <section className="py-4 border-b">
              <h3 className="px-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                Site
              </h3>
              <ul className="mt-2 px-4 space-y-1">
                <li>
                  <Link to="/" onClick={onClose} className={`block px-4 py-3 rounded-xl text-sm transition ${
                    location.pathname === "/" ? "bg-gray-200 font-medium" : "text-gray-700 hover:bg-gray-100"
                  }`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/collections" onClick={onClose} className={`block px-4 py-3 rounded-xl text-sm transition ${
                    location.pathname === "/collections" ? "bg-gray-200 font-medium" : "text-gray-700 hover:bg-gray-100"
                  }`}>
                    Collections
                  </Link>
                </li>
                {/* Shop dropdown */}
                <li>
                  <button
                    onClick={() => setShopOpen(prev => !prev)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span className="flex items-center">
                      Shop
                      <svg className={`w-3 h-3 ml-2 transition-transform ${shopOpen ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                  {shopOpen && (
                    <ul className="mt-1 ml-4 space-y-1">
                      {shopCategories.map(([name, slug]) => (
                        <li key={slug}>
                          <Link to={`/collections/${slug}`} onClick={onClose} className={`block px-4 py-2 rounded-lg text-sm transition ${
                            location.pathname === `/collections/${slug}` ? "bg-gray-200 font-medium" : "hover:bg-gray-100 text-gray-700"
                          }`}>
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </section>

            {/* DASHBOARD - Only show if logged in */}
            {isLoggedIn && (
              <section className="py-4">
                <h3 className="px-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  {isAdmin ? "Admin Dashboard" : "Profile"}
                </h3>
                <ul className="mt-2 px-4 space-y-1">
                  {/* Admin tabs */}
                  {isAdmin
                    ? ["overview", "products", "orders", "reviews", "admin settings"].map(tab => (
                        <li key={tab}>
                          <Link
                            to={`/panel?tab=${tab}`}
                            onClick={onClose}
                            className={`block px-4 py-3 rounded-xl text-sm transition ${
                              location.search.includes(`tab=${tab}`) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {tab === "admin settings" ? "Admin Settings" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </Link>
                        </li>
                      ))
                    : [
                        { label: "My Profile", value: "My Profile" },
                        { label: "My Orders", value: "My Orders" },
                        { label: "My Reviews", value: "My Reviews" },
                        { label: "Account Settings", value: "Account Settings" }
                      ].map(({ label, value }) => (
                        <li key={value}>
                          <Link
                            to={`/userProfile?tab=${encodeURIComponent(value)}`}
                            onClick={onClose}
                            className={`block px-4 py-3 rounded-xl text-sm transition ${
                              location.search.includes(`tab=${encodeURIComponent(value)}`) ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                </ul>
              </section>
            )}
          </div>

          {/* Logout - Only show if logged in */}
          {isLoggedIn && (
            <div className="p-4 border-t">
              <button
                onClick={() => {
                  requestLogout();
                  onClose();
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm text-red-600 hover:bg-red-100 transition"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}