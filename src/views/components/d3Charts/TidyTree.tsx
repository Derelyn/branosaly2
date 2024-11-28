import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

interface TreeChartProps {
  data: TreeNode;
  searchQuery: string;
  collapseTrigger: {
    open: number;
    close: number;
  };
}

interface CustomHierarchyNode extends d3.HierarchyNode<TreeNode> {
  x0?: number;
  y0?: number;
  x?: number;
  y?: number;
  uniqueId?: number;
  _children?: CustomHierarchyNode[];
}

const TreeChart: React.FC<TreeChartProps> = ({
  data,
  searchQuery,
  collapseTrigger,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [root, setRoot] = useState<CustomHierarchyNode | null>(null);
  const [svgWidth, setSvgWidth] = useState<number>(0);
  const [svgHeight, setSvgHeight] = useState<number>(0);

  useEffect(() => {
    const hierarchyData = d3.hierarchy<TreeNode>(data) as CustomHierarchyNode;
    hierarchyData.x0 = 0;
    hierarchyData.y0 = 0;

    let i = 0;

    hierarchyData.each((node) => {
      node.uniqueId = ++i;
    });
    setRoot(hierarchyData);
  }, [data]);

  useEffect(() => {
    if (!root || !svgRef.current) return;

    let i = 0;
    const svgElement = d3.select(svgRef.current);
    svgElement.selectAll("*").remove();

    const margin = { top: 64, right: 120, bottom: 32, left: 224 };
    const duration = 400;
    const nodeWidth = 510;
    const nodeHeight = 21.3;

    const g = svgElement.append("g");
    const treeLayout = d3.tree<TreeNode>().nodeSize([nodeHeight, nodeWidth]);

    // Collapse nodes only if there's no search query
    if (!searchQuery) {
      if (collapseTrigger.close > 0) {
        collapse(root);
      } else if (collapseTrigger.open > 0) {
        expand(root);
      } else collapse(root);
    }

    update(root);

    function update(source: CustomHierarchyNode) {
      if (!root) return;
      const treeData = treeLayout(root) as CustomHierarchyNode;
      const nodes = treeData.descendants() as CustomHierarchyNode[];
      const links = treeData.links();

      treeLayout.separation(function (a, b) {
        // how big nodes separation will be
        const depthSeparation: Record<number, number> = {
          1: 1.5, // second-level nodes
          2: 1, // third-level nodes
        };

        const sepA = depthSeparation[a.depth] || 1;
        const sepB = depthSeparation[b.depth] || 1;

        return (sepA + sepB) / 2;
      });

      treeLayout(root);

      // length of line
      nodes.forEach((d) => {
        const depthSpacing = nodeWidth - d.depth * 80;
        d.y = d.depth * depthSpacing;
      });

      const maxY = d3.max(nodes, (d) => d.y) || 0;
      const xExtent = d3.extent(nodes, (d) => d.x) as [number, number];
      const yExtent: [number, number] = [0, maxY]; // Start from 0 to maxY

      // ** SVG width/height calculation
      const computedSvgWidth =
        yExtent[1] - yExtent[0] + margin.left + margin.right;
      const computedSvgHeight =
        xExtent[1] - xExtent[0] + margin.top + margin.bottom;

      setSvgWidth(computedSvgWidth);
      setSvgHeight(computedSvgHeight);

      svgElement
        .attr("width", computedSvgWidth)
        .attr("height", computedSvgHeight);

      g.attr(
        "transform",
        `translate(${margin.left - yExtent[0]}, ${margin.top - xExtent[0]})`,
      );

      // Nodes
      const node = g
        .selectAll<SVGGElement, CustomHierarchyNode>("g.node")
        // @ts-ignore
        .data(nodes, (d) => d.id || (d.id = ++i));

      const nodeEnter = node
        .enter()
        .append("g")
        .attr("class", "node")
        .attr(
          "transform",
          () => `translate(${source.y0 || 0},${source.x0 || 0})`,
        )
        .on("click", (event, d) => onClick(event, d));

      nodeEnter
        .append("circle")
        .attr("fill", (d) => (d._children ? "#555" : "#999"))
        .attr("r", 5)
        .style("cursor", "pointer");

      nodeEnter
        .append("text")
        .attr("dy", ".35em")
        .attr("x", (d) => (d.children || d._children ? -13 : 13))
        .attr("text-anchor", (d) =>
          d.children || d._children ? "end" : "start",
        )
        .text((d) => d.data.name)
        .style("font-size", "15px")
        .style("fill", "#F6F7F8")
        .attr("paint-order", "stroke")
        .style("font-weight", "600")
        .style("cursor", "pointer");

      const nodeUpdate = nodeEnter.merge(node);

      nodeUpdate
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      nodeUpdate
        .select("circle")
        .attr("fill", (d) => (d._children ? "#EC6608" : "#EC6608"))
        .attr("r", 5);

      const nodeExit = node
        .exit()
        .transition()
        .duration(duration)
        .attr("transform", () => `translate(${source.y},${source.x})`)
        .remove();

      nodeExit.select("circle").attr("r", 1e-6);
      nodeExit.select("text").style("fill-opacity", 1e-6);

      // Update the links
      const link = g
        .selectAll<SVGPathElement, d3.HierarchyPointLink<CustomHierarchyNode>>(
          "path.link",
        )
        // @ts-ignore
        .data(links, (d) => d.target.id);

      // ** link/line style
      const linkEnter = link
        .enter()
        .insert("path", "g")
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", (d) => {
          if (d.target.children) {
            return "red";
          } else {
            return "white";
          }
        })
        .attr("stroke-opacity", 0.3)
        .attr("stroke-width", 2.5)
        .attr("d", () => {
          const o = { x: source.x0 || 0, y: source.y0 || 0 };
          return diagonal(o, o);
        });

      const linkUpdate = linkEnter.merge(link);

      linkUpdate
        .transition()
        .duration(duration)
        // @ts-ignore
        .attr("d", (d) => diagonal(d.source, d.target))
        .attr("stroke", (d) => {
          // If the target node is expanded (has children), color the link red
          if (d.target.children) {
            return "#EC6608";
          } else {
            return "white";
          }
        });

      link
        .exit()
        .transition()
        .duration(duration)
        .attr("d", () => {
          const o = { x: source.x || 0, y: source.y || 0 };
          return diagonal(o, o);
        })
        .remove();

      // Save the old positions for transition
      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    }

    function onClick(event: any, d: CustomHierarchyNode) {
      if (d.children) {
        d._children = d.children;
        d.children = undefined;
      } else {
        d.children = d._children;
        d._children = undefined;
      }
      update(d);
    }

    function collapse(d: CustomHierarchyNode) {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = undefined;
      }
    }

    function expand(d: CustomHierarchyNode) {
      if (d._children) {
        d.children = d._children;
        d._children = undefined;
        d.children.forEach(expand);
      }
    }

    function diagonal(
      s: { x: number; y: number },
      d: { x: number; y: number },
    ) {
      return `M ${s.y} ${s.x}
              C ${(s.y + d.y) / 2} ${s.x},
                ${(s.y + d.y) / 2} ${d.x},
                ${d.y} ${d.x}`;
    }
  }, [root, searchQuery, collapseTrigger]);

  return (
    <div style={{ overflow: "auto", whiteSpace: "nowrap" }}>
      <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>
    </div>
  );
};

export default TreeChart;
