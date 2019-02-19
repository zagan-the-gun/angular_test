export interface ResourceModelEquipments {
  id: number;
  classEquipmentId: number;
  // typeEquipmentId: number;
  name: string;
  description: string;
  image_original_filename: string;
  image: string;
  reservationStatus: number;
  createdId: number;
  updatedId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
export class ResourceModelEquipments implements ResourceModelEquipments{}
