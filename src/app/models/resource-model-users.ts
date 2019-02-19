export interface ResourceModelUsers {
// export class ResourceModelUsers {
  id: number;
  name: string;
  kana: string;
  phone: string;
  email: string;
  createdId: number;
  updatedId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
export class ResourceModelUsers implements ResourceModelUsers{}
