import React from 'react'
import AdminHeader from './components/admin/AdminHeader'
import AdminDashboard from './components/admin/AdminDashboard'
import Register from './components/Register'
export default function AdminLayout() {
  return (
    <div>
    <AdminHeader />
    <AdminDashboard />
    </div>
  )
}