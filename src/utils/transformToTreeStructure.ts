interface Part {
  Pozicia: string;
  RegistracneCislo_1: string;
  name: string;
  MNF: number;
  MJEvidencia: string;
  CelkovaKalkulacnaCena: number;
}

interface CameraPart {
  RegistracneCislo: string;
  name: string;
  children: Part[];
}

interface TransformedCameraData {
  name: string;
  children: CameraPart[];
}

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
