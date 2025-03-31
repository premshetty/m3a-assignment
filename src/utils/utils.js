export const buildTree = (data) => {
  const tree = [];

  const level1Map = new Map();
  data.forEach((record) => {
    const lvl1 = record.TreeRuleDisplayName1 || "Other";
    if (!level1Map.has(lvl1)) {
      level1Map.set(lvl1, []);
    }
    level1Map.get(lvl1).push(record);
  });

  level1Map.forEach((recordsLvl1, lvl1Name) => {
    const node = {
      key: lvl1Name,
      name: lvl1Name,
      children: [],
      ReportingTotalAsset: recordsLvl1[0]?.ReportingTotalAsset || 0, 
      percentage :  accumulateSums(recordsLvl1, ["Col8"]).Col8.toFixed(2),
      sumOfRecords : accumulateSums(recordsLvl1, ["Col7"]).Col7
    };

    const level2Map = new Map();
    recordsLvl1.forEach((record) => {
      const lvl2 = record.TreeRuleDisplayName2;
      if (lvl2) {
        if (!level2Map.has(lvl2)) {
          level2Map.set(lvl2, []);
        }
        level2Map.get(lvl2).push(record);
      } else {
        node.records = (node.records || []).concat(record);
      }
    });

    level2Map.forEach((recordsLvl2, lvl2Name) => {
      const childNode = {
        key: `${lvl1Name}-${lvl2Name}`,
        name: lvl2Name,
        children: [],
      };

      const level3Map = new Map();
      recordsLvl2.forEach((record) => {
        const lvl3 = record.TreeRuleDisplayName3;
        if (lvl3) {
          if (!level3Map.has(lvl3)) {
            level3Map.set(lvl3, []);
          }
          level3Map.get(lvl3).push(record);
        } else {
          childNode.records = (childNode.records || []).concat(record);
        }
      });

      level3Map.forEach((recordsLvl3, lvl3Name) => {
        const childNode3 = {
          key: `${childNode.key}-${lvl3Name}`,
          name: lvl3Name,
          children: [],
        };

        const level4Map = new Map();
        recordsLvl3.forEach((record) => {
          const lvl4 = record.TreeRuleDisplayName4;
          if (lvl4) {
            if (!level4Map.has(lvl4)) {
              level4Map.set(lvl4, []);
            }
            level4Map.get(lvl4).push(record);
          } else {
            childNode3.records = (childNode3.records || []).concat(record);
          }
        });

        level4Map.forEach((recordsLvl4, lvl4Name) => {
          const childNode4 = {
            key: `${childNode3.key}-${lvl4Name}`,
            name: lvl4Name,
            records: recordsLvl4,
          };

          childNode3.children.push(childNode4);
        });

        childNode.children.push(childNode3);
      });

      node.children.push(childNode);
    });

    tree.push(node);
  });

  return tree;
};
export function extractRows(data) {
  const fieldKeys = [
    "cc",
    "quantity",
    "description",
    "costPriceFx",
    "currentPrice",
    "valuation",
    "totalChf",
    "percentage",
    "plTotal",
    "plYtd",
  ];

  const rows = [];
  let rowIndex = 1;

  while (true) {
    const rowPrefix = `Row${rowIndex}Col`;

    // Check if any column exists for this row
    const hasRow = fieldKeys.some((_, colIndex) =>
      Object.prototype.hasOwnProperty.call(data, `${rowPrefix}${colIndex + 1}`)
    );
    if (!hasRow) break;

    const rowObj = { key: `Row${rowIndex}` };

    fieldKeys.forEach((field, colIndex) => {
      rowObj[field] = data[`${rowPrefix}${colIndex + 1}`];
    });

    const allNull = fieldKeys.every((field) => rowObj[field] == null);
    if (!allNull) {
      rows.push(rowObj);
    }

    rowIndex++;
  }

  return rows;
}

export function sumColumn(data, colName) {
  let sum = 0;
  let rowIndex = 1;

  while (true) {
    const rowPrefix = `Row${rowIndex}Col`;
    const colIndex = parseInt(colName.replace(/[^0-9]/g, ""));
    const colKey = `${rowPrefix}${colIndex}`;

    if (!Object.prototype.hasOwnProperty.call(data, colKey)) break;

    const value = parseFloat(data[colKey]) || 0;
    sum += value;

    rowIndex++;
  }

  return sum;
}

export function accumulateSums(dataArray, colNames) {
  return colNames.reduce((acc, colName) => {
    acc[colName] = dataArray.reduce(
      (sum, data) => sum + sumColumn(data, colName),
      0
    );
    return acc;
  }, {});
}
