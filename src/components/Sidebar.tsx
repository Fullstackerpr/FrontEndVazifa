"use client";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "users", label: "Users", icon: "👥" },
  { id: "analytics", label: "Analytics", icon: "📈" },
  { id: "settings", label: "Settings", icon: "⚙️" },
  { id: "reports", label: "Reports", icon: "📋" },
  { id: "help", label: "Help", icon: "❓" },
];

export default function Sidebar({ activePage, setActivePage }: SidebarProps) {
  return (
    <div className="w-72 bg-white shadow-lg flex flex-col justify-between h-screen">
      <div className="p-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            MyApp
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Welcome back 👋</p>
        </div>

        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center space-x-3 px-5 py-3 rounded-xl transition-all duration-200 text-left
                ${
                  activePage === item.id
                    ? "bg-blue-100 text-blue-600 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-base">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6 border-t border-gray-100 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center shadow-md">
          <span className="text-white text-2xl">👤</span>
        </div>
        <p className="text-gray-800 font-medium">Admin User</p>
        <p className="text-gray-400 text-sm">admin@example.com</p>
      </div>
    </div>
  );
}
