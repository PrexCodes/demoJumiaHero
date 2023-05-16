import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../Header'
import Sider from '../Sider'
import AdminHeader from '../AdminHeader'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <Sider/>
      <Outlet/>
    </div>
  )
}

export default AdminLayout
