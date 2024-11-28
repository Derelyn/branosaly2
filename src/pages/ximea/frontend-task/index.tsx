import { useState, useMemo, useEffect, useRef } from "react";

import { Box, Button } from "@mui/material";
import TidyTree from "@/views/components/d3Charts/TidyTree";

import useGetXlsx from "@/services/hooks/useGetXlsx";

// ** components
import NavbarX from "@/views/pages/ximea/components/NavBarX";

const FrontendTask = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCamera, setSelectedCamera] = useState<any[]>([]);
  const [collapseTrigger, setCollapseTrigger] = useState({ open: 0, close: 0 });

  const removeColumns = ["SK", "SK_1", "AltKVKDatumu"];
  const camerasData = useGetXlsx({ removeColumns });

  // filter the tree
  const filterTree = (node: any, query: string) => {
    const nameMatches = node.name.toLowerCase().includes(query.toLowerCase());

    if (node.children) {
      const filteredChildren = node.children
        .map((child: any[]) => filterTree(child, query))
        .filter((child: any) => child != null);

      if (filteredChildren.length > 0 || nameMatches) {
        return { ...node, children: filteredChildren };
      } else {
        return null;
      }
    } else if (nameMatches) {
      return { ...node, children: [] };
    }

    return nameMatches ? { ...node } : null;
  };

  const cameras = useMemo(() => {
    if (!camerasData.cameraData) return [];

    let selected;

    if (selectedCamera.length > 0) selected = selectedCamera;
    else selected = camerasData.cameraData;

    if (searchQuery === "" && selectedCamera.length < 1) {
      return camerasData.cameraData;
    } else {
      // search
      const filteredData = selected
        .map((camera) => filterTree(camera, searchQuery))
        .filter((camera) => camera != null);

      return filteredData;
    }
  }, [camerasData.cameraData, searchQuery, selectedCamera]);

  return (
    <>
      <Box sx={{ p: 4, pl: 8 }}>
        <NavbarX
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedCamera={setSelectedCamera}
          data={camerasData.cameraData}
          setCollapseTrigger={setCollapseTrigger}
        />
      </Box>
      <div>
        {cameras.length > 0 &&
          cameras.map((data) => (
            <TidyTree
              key={data.name}
              data={data}
              searchQuery={searchQuery}
              collapseTrigger={collapseTrigger}
            />
          ))}
      </div>
    </>
  );
};

export default FrontendTask;
