import { Tabs } from "antd";
import "./App.css";
import WrappedOrgChart from "./components/chart/OrgChart";
import TailwindTable from "./components/Table/TailwindTable";
import tabledata from "./data/data.json";
import { buildTree } from "./utils/utils";
function App() {
  const rawData = tabledata.Data.Table;
  const tree = buildTree(rawData);

  const items = [
    {
      key: "1",
      label: "Tree Data",
      children: <WrappedOrgChart />,
    },
    {
      key: "2",
      label: "Table",
      children: <TailwindTable tree={tree} />,
    },
  ];
  return (
    <div className="w-screen">
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default App;
