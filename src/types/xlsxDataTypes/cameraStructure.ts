export interface CameraDataRaw {
  "AltKV k dátumu": string;
  SK: string;
  "Registračné číslo": string;
  "Názov 1": string;
  Pozícia: string;
  SK_1: string;
  "Registračné číslo_1": string;
  "Názov 1_1": string;
  MNF: number;
  "MJ evidencia": string;
  "Celková kalkulačná cena": number;
}
export interface CameraStructureRaw {
  name: string;
  data: CameraDataRaw[];
}

export interface CameraDataProcessed {
  AltKVKDatumu: string;
  SK: string;
  RegistracneCislo: string;
  Nazov1: string;
  Pozicia: string;
  SK_1: string;
  RegistracneCislo_1: string;
  Nazov1_1: string;
  MNF: number;
  MJEvidencia: string;
  CelkovaKalkulacnaCena: number;
}
export interface CameraStructureProcessed {
  name: string;
  children: CameraDataProcessed[];
}
