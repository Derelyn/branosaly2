import { useState, useMemo } from "react";

import Box from "@mui/material/Box";
import TidyTree from "@/views/components/d3Charts/TidyTree";

import useGetXlsx from "@/services/hooks/xlsx/useGetXlsx";
import { filterTree } from "@/utils/searches/TidyTreeSearch";

// ** components
import NavbarX from "@/views/pages/ximea/components/NavBarX";

const FrontendTask = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCamera, setSelectedCamera] = useState<any[]>([]);
  const [collapseTrigger, setCollapseTrigger] = useState({ open: 0, close: 0 });

  const removeColumnsFromXlsx = ["SK", "SK_1", "AltKVKDatumu"];
  const camerasData = useGetXlsx({
    removeColumnsFromXlsx,
    fetchUrl: "/xlsx/Camera_Structure.xlsx",
  });

  const cameras = useMemo(() => {
    if (!camerasData.cameraData) return [];

    const selected = () => {
      if (selectedCamera.length > 0) return selectedCamera;
      else return camerasData.cameraData;
    };

    if (searchQuery === "" && selectedCamera.length < 1) {
      return camerasData.cameraData;
    } else {
      // search
      const filteredData = selected()
        .map((camera) => filterTree(camera, searchQuery))
        .filter((camera) => camera != null);

      return filteredData;
    }
  }, [camerasData.cameraData, searchQuery, selectedCamera]);

  return (
    <>
      <Box sx={{ p: 4, pl: 8 }}>
        <NavbarX
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
