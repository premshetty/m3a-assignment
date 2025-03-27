import { Card, Descriptions } from "antd";
import React from "react";
import { Handle } from "react-flow-renderer";
import Flag from "react-world-flags";


const NodeHeaderNode = ({ data }) => {

  const { label, attributes, countryCode } = data;

 const renderAttributes = () => {
   return (
     <Descriptions  bordered column={1} size="small">
       {Object.entries(attributes).map(([key, value]) => (
         <Descriptions.Item key={key} label={key}>
           {value || "-"}
         </Descriptions.Item>
       ))}
     </Descriptions>
   );
 };

  const variantStyles = {
    default: {
      header: { backgroundColor: "#E5E7EB", color: "#111827" }, 
      body: { backgroundColor: "#F9FAFB" }, 
    },
    success: {
      header: { backgroundColor: "#34D399", color: "#065F46" }, 
      body: { backgroundColor: "#ECFDF5" }, 
    },
    warning: {
      header: { backgroundColor: "#FBBF24", color: "#92400E" }, 
      body: { backgroundColor: "#FEFCE8" }, 
    },
    error: {
      header: { backgroundColor: "#F87171", color: "#7F1D1D" }, 
      body: { backgroundColor: "#FEF2F2" }, 
    },
  };


  const cardStyles = ()=>{
    if(attributes["Board Member(s)"]){
      return variantStyles.success
    }
    if(attributes.address){
      return variantStyles.warning
    }
    return variantStyles.default
  }

  return (
    <Card
      title={label}
      variant="outlined"
      className="rounded-lg shadow-md border border-gray-300 relative"
      styles={cardStyles()}
    >
      <Flag
        className="h-8 w-8 absolute -top-3 -right-2"
        code={countryCode}
        fallback={<span>Unknown</span>}
      />
      <Handle type="target" position="top" />
      {renderAttributes()}
      <Handle type="source" position="bottom" />
    </Card>
  );
};


export default NodeHeaderNode;
