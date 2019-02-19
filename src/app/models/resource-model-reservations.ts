export interface ResourceModelReservations {
  id: number;
  userId: number;
  equipmentId: number;
  studioId: number;
  name: string;
  description: string;
  comment: string;
  lendingStartAt: Date;
  lendingEndAt: Date;
  createdId: number;
  updatedId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: number;
}
export class ResourceModelReservations implements ResourceModelReservations{}
