// ** types
import type {
  TransformedCameraData,
  CameraPart,
} from "@/types/xlsxDataTypes/cameraStructure";

export function transformXlxsToTreeStructure(
  input: any[],
): TransformedCameraData[] {
  return input.map((camera) => ({
    name: camera.name,
    children: Object.values(
      camera.children.reduce(
        (acc: { [key: string]: CameraPart }, child: any) => {
          const key = child.RegistracneCislo;
          if (!acc[key]) {
            acc[key] = {
              RegistracneCislo: child.RegistracneCislo,
              name: child.Nazov1,
              children: [],
            };
          }
          acc[key].children.push({
            Pozicia: child.Pozicia,
            RegistracneCislo_1: child.RegistracneCislo_1,
            name: child.Nazov1_1,
            MNF: child.MNF,
            MJEvidencia: child.MJEvidencia,
            CelkovaKalkulacnaCena: child.CelkovaKalkulacnaCena,
          });
          return acc;
        },
        {},
      ),
    ),
  }));
}
