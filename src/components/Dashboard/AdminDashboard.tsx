import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { Users, BarChart2, Settings } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  if (user?.role !== 'admin') {
    return <div className="min-h-screen flex items-center justify-center bg-gray-100 text-xl font-semibold">Access Denied</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 bg-white shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-center">Welcome, Admin {user.username}!</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/admin/users" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <Users className="w-10 h-10 text-indigo-600 mb-2" />
                  <h3 className="text-lg font-semibold">User Management</h3>
                  <p className="text-gray-600 text-center">Manage users and permissions</p>
                </Link>
                <Link to="/admin/analytics" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <BarChart2 className="w-10 h-10 text-green-600 mb-2" />
                  <h3 className="text-lg font-semibold">Analytics</h3>
                  <p className="text-gray-600 text-center">View system analytics and reports</p>
                </Link>
                <Link to="/admin/settings" className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                  <Settings className="w-10 h-10 text-blue-600 mb-2" />
                  <h3 className="text-lg font-semibold">System Settings</h3>
                  <p className="text-gray-600 text-center">Configure system settings</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
