import { useState, useMemo } from "react";

import { Box } from "@mui/material";
import TidyTree from "@/views/components/d3Charts/TidyTree";
import SearchField from "@/views/components/forms/SearchField";
import useGetXlsx from "@/services/hooks/useGetXlsx";

const FrontendTask = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const removeColumns = ["SK", "SK_1", "AltKVKDatumu"];
  const camerasData = useGetXlsx({ removeColumns });

  // Recursive function to filter the tree
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

  // Use useMemo to compute the filtered cameras data
  const cameras = useMemo(() => {
    if (!camerasData.cameraData) return [];
    if (searchQuery === "") {
      return camerasData.cameraData;
    } else {
      // Filter cameras based on the search query
      const filteredData = camerasData.cameraData
        .map((camera) => filterTree(camera, searchQuery))
        .filter((camera) => camera != null);
      return filteredData;
    }
  }, [camerasData.cameraData, searchQuery]);

  return (
    <>
      <Box sx={{ p: 4, pl: 8 }}>
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </Box>
      <div>
        {cameras.length > 0 &&
          cameras.map((data, i) => (
            <TidyTree key={i} data={data} searchQuery={searchQuery} />
          ))}
      </div>
    </>
  );
};

export default FrontendTask;
