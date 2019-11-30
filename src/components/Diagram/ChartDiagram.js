import React, { Component } from 'react';

import { FlowChartWithState } from '@mrblenny/react-flow-chart';

const chartSimple = {
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: 'node1',
      type: 'output-only',
      position: {
        x: 100,
        y: 100
      },
      properties: {
        value: 'yes'
      },
      ports: {
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no'
          }
        }
      }
    },
    node2: {
      id: 'node2',
      type: 'input-output',
      position: {
        x: 400,
        y: 100
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input'
        },
        port2: {
          id: 'port2',
          type: 'output'
        }
      }
    },
    node3: {
      id: 'node3',
      type: 'output-only',
      position: {
        x: 100,
        y: 400
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input'
        }
      }
    }
  },
  links: {
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port2'
      },
      to: {
        nodeId: 'node2',
        portId: 'port1'
      },
      properties: {
        label: 'example link label'
      }
    },
    link2: {
      id: 'link2',
      from: {
        nodeId: 'node2',
        portId: 'port2'
      },
      to: {
        nodeId: 'node3',
        portId: 'port1'
      },
      properties: {
        label: 'another example link label'
      }
    }
  },
  selected: {},
  hovered: {}
};

const ChartDiagram = () => {
  return (
    <div>
      <FlowChartWithState
        config={{ readonly: true }}
        initialValue={chartSimple}
      />
    </div>
  );
};

export default ChartDiagram;
