export const reactFlowData = {
  nodes: [
    {
      id: "20",
      type: "nodeHeaderNode",
      data: {
        label: "Pier Blange",
        attributes: { ownership: "27.5%" },
        countryCode: "FR",
      },
      position: { x: 150, y: -400 },
    },
    {
      id: "21",
      type: "nodeHeaderNode",
      data: {
        label: "Rose Miele",
        attributes: { ownership: "22.5%" },
        countryCode: "IT",
      },
      position: { x: 550, y: -400 },
    },
    {
      id: "1",
      type: "nodeHeaderNode",
      data: {
        label: "Diamond Group Holding",
        attributes: {
          "Board Member(s)": "Pier Blange, Jeremy Swift (Chairman)",
          "Supervisory Board": "Richard Miele",
          Committee: "Alfie Miller",
          "Secretary(ies)": "Samir Miele",
        },
        countryCode: "CH",
      },
      position: { x: 350, y: 100 },
    },
    {
      id: "2",
      type: "nodeHeaderNode",
      data: {
        label: "Klost Corp. GmbH",
        attributes: { ownership: "33%", investment: "2.5m CHF" },
        countryCode: "DE",
      },
      position: { x: 0, y: -150 },
    },
    {
      id: "3",
      type: "nodeHeaderNode",
      data: {
        label: "Middle GmbH & Co",
        attributes: { ownership: "8.75%", investment: "2.5m CHF" },
        countryCode: "DE",
      },
      position: { x: 320, y: -150 },
    },
    {
      id: "4",
      type: "nodeHeaderNode",
      data: {
        label: "POWR SE",
        attributes: { ownership: "8.25%" },
        countryCode: "FR",
      },
      position: { x: 700, y: -150 },
    },
    {
      id: "5",
      type: "nodeHeaderNode",
      data: {
        label: "Diamond Holding B.V.",
        attributes: {
          address: "Netherlands, 163 TL",
          registered: "84362341234",
          taxDomicile: "Netherlands Tar",
          supervisoryBoard: "Debra Gordon",
          manager: "Palma Ramirez",
        },
        countryCode: "NL",
      },
      position: { x: -200, y: 600 },
    },
    {
      id: "8",
      type: "nodeHeaderNode",
      data: {
        label: "Germany",
        attributes: { count: "13" },
        countryCode: "DE",
      },
      position: { x: 250, y: 600 },
    },
    {
      id: "11",
      type: "nodeHeaderNode",
      data: {
        label: "United Kingdom",
        attributes: { count: "5" },
        countryCode: "GB",
      },
      position: { x: 450, y: 600 },
    },
    {
      id: "16",
      type: "nodeHeaderNode",
      data: {
        label: "United States of America",
        attributes: { count: "3" },
        countryCode: "US",
      },
      position: { x: 750, y: 600 },
    },
    {
      id: "6",
      type: "nodeHeaderNode",
      data: {
        label: "Paradise SA/NV",
        attributes: { ownership: "100%" },
        countryCode: "LU",
      },
      position: { x: -300, y: 950 },
    },
    {
      id: "7",
      type: "nodeHeaderNode",
      data: {
        label: "Solstice LLC",
        attributes: { ownership: "6.2596%" },
        countryCode: "US",
      },
      position: { x: 100, y: 950 },
    },
    {
      id: "9",
      type: "nodeHeaderNode",
      data: {
        label: "Diamond Lab LTD",
        attributes: { ownership: "100%" },
        countryCode: "GB",
      },
      position: { x: 150, y: 1200 },
    },
    {
      id: "10",
      type: "nodeHeaderNode",
      data: {
        label: "DM Storage LTD",
        attributes: { ownership: "100%" },
        countryCode: "GB",
      },
      position: { x: -200, y: 1200 },
    },
    {
      id: "12",
      type: "nodeHeaderNode",
      data: {
        label: "DM Enhance Ltd.",
        attributes: { ownership: "6.2596%" },
        countryCode: "GB",
      },
      position: { x: 100, y: 1200 },
    },
    {
      id: "13",
      type: "nodeHeaderNode",
      data: {
        label: "DM Transit Ltd.",
        attributes: { ownership: "100%" },
        countryCode: "GB",
      },
      position: { x: 500, y: 1200 },
    },
    {
      id: "17",
      type: "nodeHeaderNode",
      data: {
        label: "ABC Technology Corp.",
        attributes: { ownership: "100%", investment: "12m USD" },
        countryCode: "US",
      },
      position: { x: 700, y: 950 },
    },
    {
      id: "14",
      type: "nodeHeaderNode",
      data: {
        label: "DM Finance Ltd.",
        attributes: { ownership: "100%" },
        countryCode: "GB",
      },
      position: { x: 1200, y: 1200 },
    },
    {
      id: "18",
      type: "nodeHeaderNode",
      data: {
        label: "Diamond Sh LLC",
        attributes: { ownership: "6.2596%" },
        countryCode: "US",
      },
      position: { x: 400, y: 950 },
    },
    {
      id: "15",
      type: "nodeHeaderNode",
      data: {
        label: "DM Invest Ltd.",
        attributes: { ownership: "100%" },
        countryCode: "GB",
      },
      position: { x: 800, y: 1200 },
    },
    {
      id: "19",
      type: "nodeHeaderNode",
      data: {
        label: "Media Star LLC",
        attributes: { ownership: "100%" },
        countryCode: "US",
      },
      position: { x: 1100, y: 950 },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", type: "step", target: "2" },
    { id: "e1-3", source: "1", type: "step", target: "3" },
    { id: "e1-4", source: "1", type: "step", target: "4" },
    { id: "e1-5", source: "1", type: "step", target: "5" },
    { id: "e5-6", source: "5", type: "step", target: "6" },
    { id: "e5-7", source: "5", type: "step", target: "7" },
    { id: "e1-8", source: "1", type: "step", target: "8" },
    { id: "e8-9", source: "11", type: "step", target: "9" },
    { id: "e8-10", source: "11", type: "step", target: "10" },
    { id: "e1-11", source: "1", type: "step", target: "11" },
    { id: "e11-12", source: "11", type: "step", target: "12" },
    { id: "e11-13", source: "11", type: "step", target: "13" },
    { id: "e11-14", source: "11", type: "step", target: "14" },
    { id: "e11-15", source: "11", type: "step", target: "15" },
    { id: "e1-16", source: "1", type: "step", target: "16" },
    { id: "e16-17", source: "16", type: "step", target: "17" },
    { id: "e16-18", source: "16", type: "step", target: "18" },
    { id: "e16-19", source: "16", type: "step", target: "19" },
    { id: "e1-20", source: "1", type: "step", target: "20" },
    { id: "e1-21", source: "1", type: "step", target: "21" },
    {
      id: "e1-22",
      source: "2",
      type: "default",
      target: "1",
      animated: true,
    },
    {
      id: "e1-23",
      source: "4",
      type: "default",
      target: "1",
      animated: true,
    },

    {
      id: "e1-24",
      source: "1",
      type: "default",
      target: "17",
      animated: true,
    },
  ],
};
