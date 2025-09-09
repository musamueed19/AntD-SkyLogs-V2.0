import { Tabs, Tooltip } from "antd";
import { AppstoreOutlined, TableOutlined } from "@ant-design/icons";

const TableViewTabs = ({ viewMode, setViewMode }) => {
  const items = [
    {
      key: "table",
      label: (
        <Tooltip title="Table View">
          <TableOutlined
            className={`cursor-pointer text-xl ${
              viewMode === "table" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setViewMode("table")}
          />
        </Tooltip>
      ),
    },
    {
      key: "card",
      label: (
        <Tooltip title="Card View">
          <AppstoreOutlined
            className={`cursor-pointer text-xl ${
              viewMode === "card" ? "text-blue-600" : "text-gray-500"
            }`}
            onClick={() => setViewMode("card")}
          />
        </Tooltip>
      ),
    },
  ];

  return <Tabs items={items} activeKey={viewMode} />;
};

export default TableViewTabs;
