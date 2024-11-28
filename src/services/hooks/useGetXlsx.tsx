// ** deps
import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

// ** utils
import { removeDiacriticsAndFormat } from "@/utils/textUtils";
import { transformXlxsToTreeStructure } from "@/utils/transformToTreeStructure";

// ** types
import type {
  CameraStructureProcessed,
  CameraStructureRaw,
  CameraDataRaw,
} from "@/types/xlsxDataTypes/cameraStructure";

type UseGetXlsxProps = {
  removeColumns?: string[];
};

const useGetXlsx = ({ removeColumns }: UseGetXlsxProps) => {
  // ** states
  const [cameraData, setCameraData] = useState<CameraStructureProcessed[] | []>(
    [],
  );

  // ** Fetch and read the Excel file from the public folder
  useEffect(() => {
    fetch("/xlsx/Camera_Structure.xlsx")
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetNames = workbook.SheetNames;
        const sheetData = sheetNames.map((name) => {
          const worksheet = workbook.Sheets[name];
          const data = XLSX.utils.sheet_to_json(worksheet);
          return { name, data };
        });

        const { transformedCameraData } = processRawData({
          sheetData: sheetData.map((item) => ({
            name: item.name,
            data: item.data as CameraDataRaw[],
          })),
        });

        // @ts-ignore
        setCameraData(transformedCameraData);
      })
      .catch((err) => console.error("Error reading excel file:", err));
  }, []);

  const processRawData = ({
    sheetData,
  }: {
    sheetData: CameraStructureRaw[];
  }) => {
    const removeDiacriticsAndCol = sheetData?.map((data) => {
      const newData = data.data.map((row: CameraDataRaw) => {
        const newRow: any = {};
        Object.keys(row).forEach((key) => {
          const newKey = removeDiacriticsAndFormat(key);
          if (removeColumns?.some((col) => col === newKey)) return;
          newRow[newKey] = row[key as keyof CameraDataRaw];
        });
        return { ...newRow };
      });
      return { name: data.name, children: newData };
    });

    const transformedCameraData = transformXlxsToTreeStructure(
      removeDiacriticsAndCol,
    );

    return { transformedCameraData };
  };

  return { cameraData };
};

export default useGetXlsx;
