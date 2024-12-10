// ** deps
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

// ** funcs
import { processRawXlsxData } from "./xlsxDataProcessing";

// ** types
import type {
  CameraDataRaw,
  TransformedCameraData,
} from "@/types/xlsxDataTypes/cameraStructure";

type UseGetXlsxProps = {
  removeColumnsFromXlsx?: string[];
  fetchUrl: string;
};

const useGetXlsx = ({ removeColumnsFromXlsx, fetchUrl }: UseGetXlsxProps) => {
  // ** states
  const [cameraData, setCameraData] = useState<TransformedCameraData[] | []>(
    [],
  );

  // ** Fetch and read the Excel file from the public folder
  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetNames = workbook.SheetNames;
        const sheetData = sheetNames.map((name) => {
          const worksheet = workbook.Sheets[name];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return { name, data };
        });

        // ** process camera data
        const { transformedCameraData } = processRawXlsxData({
          sheetData: sheetData.map((item) => ({
            name: item.name,
            data: item.data as CameraDataRaw[],
          })),
          removeColumnsFromXlsx,
        });

        setCameraData(transformedCameraData);
      })
      .catch((err) => console.error("Error reading excel file:", err));
  }, []);

  return { cameraData };
};

export default useGetXlsx;
