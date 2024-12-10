// ** utils
import { removeDiacriticsAndFormat } from "@/utils/textUtils";
import { transformXlxsToTreeStructure } from "@/utils/transformToTreeStructure";

// ** types
import type {
  CameraStructureRaw,
  CameraDataRaw,
} from "@/types/xlsxDataTypes/cameraStructure";

type ProcessRawDataProps = {
  removeColumnsFromXlsx?: string[];
  sheetData: CameraStructureRaw[];
};

export const processRawXlsxData = ({
  sheetData,
  removeColumnsFromXlsx,
}: ProcessRawDataProps) => {
  const removeDiacriticsAndCol = sheetData?.map((data) => {
    const newData = data.data.map((row: CameraDataRaw) => {
      const newRow: any = {};
      Object.keys(row).forEach((key) => {
        const newKey = removeDiacriticsAndFormat(key);
        if (removeColumnsFromXlsx?.some((col) => col === newKey)) return;
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
