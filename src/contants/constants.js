import { CarryOutOutlined, LogoutOutlined, OrderedListOutlined, PieChartOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export const menuItems = [
  // {
  //   key: 0,
  //   icon: <PieChartOutlined />,
  //   label: <Link href={'/dashboard'}>Dashboard</Link>,
  // },
  {
    key: 1,
    icon: <UserOutlined />,
    label: <Link href={'/dashboard/users'}>Users</Link>,
  },
  {
    key: 2,
    icon: <CarryOutOutlined />,
    label: <Link href={'/dashboard/attendance'}>Attendance</Link>,
  },
  {
    key: 3,
    icon: <OrderedListOutlined />,
    label: <Link href={'/dashboard/leaves'}>Leaves</Link>,
  },
  {
    key: 4,
    icon: <ProjectOutlined />,
    label: <Link href={'/dashboard/projects'}>Projects</Link>,
  },
  {
    key: 5,
    icon: <UserOutlined />,
    label: <Link href={'/dashboard/payroll'}>Payroll</Link>,
  },
  {
    key: 6,
    icon: <LogoutOutlined />,
    label: "Logout",
  },
];
