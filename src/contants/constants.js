import { CarryOutOutlined, FolderOutlined, LogoutOutlined, OrderedListOutlined, PieChartOutlined, ProjectOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export const menuItems = [
  // {
  //   key: 0,
  //   icon: <PieChartOutlined />,
  //   label: <Link href={'/dashboard'}>Dashboard</Link>,
  // },
  {
    key: "users",
    icon: <UserOutlined />,
    label: <Link href={"/dashboard/users"}>Users</Link>,
  },
  {
    key: "attendance",
    icon: <CarryOutOutlined />,
    label: <Link href={"/dashboard/attendance"}>Attendance</Link>,
  },
  {
    key: "timeLogs",
    icon: <CarryOutOutlined />,
    label: <Link href={"/dashboard/timeLogs"}>Time Logs</Link>,
  },
  {
    key: "leaves",
    icon: <OrderedListOutlined />,
    label: <Link href={"/dashboard/leaves"}>Leaves</Link>,
  },
  {
    key: "projects",
    icon: <FolderOutlined />,
    label: <Link href={"/dashboard/projects"}>Projects</Link>,
  },
  {
    key: "payroll",
    icon: <UserOutlined />,
    label: <Link href={"/dashboard/payroll"}>Payroll</Link>,
  },
  {
    key: "logout",
    icon: <LogoutOutlined />,
    label: <Link href={"/login"}>Logout</Link>,
  },
];
