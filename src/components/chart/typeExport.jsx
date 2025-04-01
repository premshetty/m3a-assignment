import React from "react";
import { BezierEdge, StepEdge, StraightEdge } from "react-flow-renderer";
import NodeHeaderNode from "./CardNode";


function useChartTypes() {
  const nodeTypes = React.useMemo(
    () => ({
      nodeHeaderNode: NodeHeaderNode,
    }),
    []
  );

  const edgeTypes = React.useMemo(
    () => ({
      bezier: BezierEdge,
      step: StepEdge,
      straight: StraightEdge,
    }),
    []
  );

  return { edgeTypes, nodeTypes };
}

export default useChartTypes;
