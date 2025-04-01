/* eslint-disable no-unused-vars */
// OrgChart.jsx
import React, { useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  ConnectionLineType,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";

import { reactFlowData } from "../../data/flowChartData";
import useChartTypes from "./typeExport";

function OrgChart() {
  const { edgeTypes, nodeTypes } = useChartTypes();
  const storedNodes =
    JSON.parse(localStorage.getItem("nodes")) || reactFlowData.nodes;
  const storedEdges =
    JSON.parse(localStorage.getItem("edges")) || reactFlowData.edges;

  const [nodes, setNodes, onNodesChange] = useNodesState(storedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(storedEdges);

  useEffect(() => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem("edges", JSON.stringify(edges));
  }, [edges]);

  const onConnect = (params) => {
    setEdges((eds) => addEdge(params, eds));
    setEdges((eds) => (params, eds));
  };

  return (
    <div style={{ width: "100%", height: "80vh" }}>
      <ReactFlow
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.Step}
        edgeTypes={edgeTypes}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        draggable={true}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default function WrappedOrgChart() {
  return (
    <ReactFlowProvider>
      <OrgChart />
    </ReactFlowProvider>
  );
}
