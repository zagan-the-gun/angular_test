import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  public date = new Date();
  createDb() {
    const users = [
      {id: 1, name: 'ザメンズ　一郎', kana: 'ざめんず　いちろう', phone: '090-1234-5678', email: 'cyber_itirou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 20, 10, 56), updatedAt: new Date(2018, 10, 20, 10, 56), deletedAt: null},
      {id: 2, name: 'ザメンズ　二郎', kana: 'ざめんず　じろう', phone: '090-1234-5678', email: 'cyber_jirou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 7, 20, 12, 48), updatedAt: new Date(2018, 7, 20, 12, 48), deletedAt: null},
      {id: 3, name: 'ザメンズ　三郎', kana: 'ざめんず　さぶろう', phone: '090-1234-5678', email: 'cyber_saburou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 8, 20, 22, 33), updatedAt: new Date(2018, 8, 20, 22, 33), deletedAt: null},
      {id: 4, name: 'ザメンズ　四郎', kana: 'ざめんず　しろう', phone: '090-1234-5678', email: 'cyber_sirou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 2, 3, 21, 29), updatedAt: new Date(2018, 2, 3, 21, 29), deletedAt: null},
      {id: 5, name: 'ザメンズ　五郎', kana: 'ざめんず　ごろう', phone: '090-1234-5678', email: 'cyber_gorou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 7, 20, 22, 10), updatedAt: new Date(2018, 7, 20, 22, 10), deletedAt: null},
      {id: 6, name: 'ザメンズ　六郎', kana: 'ざめんず　ろくろう', phone: '090-1234-5678', email: 'cyber_rokurou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 2, 8, 10, 28), updatedAt: new Date(2018, 2, 8, 10, 28), deletedAt: null},
      {id: 7, name: 'ザメンズ　七郎', kana: 'ざめんず　しちろう', phone: '090-1234-5678', email: 'cyber_sitirou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 5, 17, 10, 30), updatedAt: new Date(2018, 5, 17, 10, 30), deletedAt: null},
      {id: 8, name: 'ザメンズ　八郎', kana: 'ざめんず　はちろう', phone: '090-1234-5678', email: 'cyber_hatirou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 6, 9, 12, 42), updatedAt: new Date(2018, 6, 9, 12, 42), deletedAt: null},
      {id: 9, name: 'ザメンズ　九郎', kana: 'ざめんず　くろう', phone: '090-1234-5678', email: 'cyber_kyuurou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 5, 28, 11, 58), updatedAt: new Date(2018, 5, 28, 11, 58), deletedAt: null},
      {id: 10, name: 'ザメンズ　十郎', kana: 'ざめんず　じゅうろう', phone: '090-1234-5678', email: 'cyber_juurou@cyberagent.co.jp', createdId: 1, updatedId: 1, createdAt: new Date(2018, 3, 4, 11, 41), updatedAt: new Date(2018, 3, 4, 11, 41), deletedAt: null}
    ];
    const studios = [
      {id: 1, name: 'Studio-0', description: 'Studio-0', image_original_filename: '', image: '', createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 20, 10, 56), updatedAt: new Date(2018, 10, 20, 10, 56), deletedAt: null},
      {id: 2, name: 'Studio-1', description: 'Studio-0', image_original_filename: '', image: '', createdId: 2, updatedId: 2, createdAt: new Date(2018, 7, 20, 12, 48), updatedAt: new Date(2018, 7, 20, 12, 48), deletedAt: null },
      {id: 3, name: 'Studio-2', description: 'Studio-0', image_original_filename: '', image: '', createdId: 3, updatedId: 3, createdAt: new Date(2018, 8, 20, 22, 33), updatedAt: new Date(2018, 8, 20, 22, 33), deletedAt: null },
      {id: 4, name: 'Studio-3', description: 'Studio-0', image_original_filename: '', image: '', createdId: 4, updatedId: 4, createdAt: new Date(2018, 2, 3, 21, 29), updatedAt: new Date(2018, 2, 3, 21, 29), deletedAt: null },
      {id: 5, name: 'Studio-4', description: 'Studio-0', image_original_filename: '', image: '', createdId: 5, updatedId: 5, createdAt: new Date(2018, 7, 20, 22, 10), updatedAt: new Date(2018, 7, 20, 22, 10), deletedAt: null },
      {id: 6, name: 'Studio-5', description: 'Studio-0', image_original_filename: '', image: '', createdId: 6, updatedId: 6, createdAt: new Date(2018, 2, 8, 10, 28), updatedAt: new Date(2018, 2, 8, 10, 28), deletedAt: null },
      {id: 7, name: 'Studio-6', description: 'Studio-0', image_original_filename: '', image: '', createdId: 7, updatedId: 7, createdAt: new Date(2018, 5, 17, 10, 30), updatedAt: new Date(2018, 5, 17, 10, 30), deletedAt: null },
      {id: 8, name: 'Studio-7', description: 'Studio-0', image_original_filename: '', image: '', createdId: 8, updatedId: 8, createdAt: new Date(2018, 6, 9, 12, 42), updatedAt: new Date(2018, 6, 9, 12, 42), deletedAt: null }
    ];
    const equipments = [
      { id: 1, classEquipmentId: 1, name: 'SONY PXW-X320', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 2, classEquipmentId: 1, name: 'SONY PXW－X160①', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 3, classEquipmentId: 1, name: 'SONY PXW－X160②', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 4, classEquipmentId: 1, name: 'SONY PXW－X160③', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 5, classEquipmentId: 1, name: 'SONY PXW－X160④ AC運用WC付', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 6, classEquipmentId: 1, name: 'SONY PXW－X160⑤AC運用のみ', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 7, classEquipmentId: 1, name: 'SONY PXW－X160⑥AC運用のみ', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 8, classEquipmentId: 1, name: 'SONY PSW-FS7①', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 9, classEquipmentId: 1, name: 'SONY PSW-FS7②', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 10, classEquipmentId: 1, name: 'SONY PSW-FS5', description: 'カメラ SONY PXW-X320', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 11, classEquipmentId: 2, name: 'タリー 縦', description: '1', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 12, classEquipmentId: 2, name: 'タリー 縦', description: '2', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 13, classEquipmentId: 2, name: 'タリー 縦', description: '3', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 14, classEquipmentId: 2, name: 'タリー 縦', description: '4', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 15, classEquipmentId: 2, name: 'タリー 横', description: '1', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 16, classEquipmentId: 2, name: 'タリー 横', description: '2', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 17, classEquipmentId: 2, name: 'タリー 横', description: '3', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 18, classEquipmentId: 2, name: 'タリー 横', description: '4', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 19, classEquipmentId: 3, name: 'Libec RH-45R ①', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 20, classEquipmentId: 3, name: 'Libec RH-45R ②', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 21, classEquipmentId: 3, name: 'Libec RH-35R', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 22, classEquipmentId: 3, name: 'Libec RH-25R ①', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 23, classEquipmentId: 3, name: 'Libec RH-25R ②', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 24, classEquipmentId: 4, name: 'Panasonic AG-HMR10①', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 25, classEquipmentId: 4, name: 'Panasonic AG-HMR10②', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 26, classEquipmentId: 4, name: 'Panasonic AG-HMR10③', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 27, classEquipmentId: 4, name: 'Panasonic AG-HMR10④', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 28, classEquipmentId: 4, name: 'Panasonic AG-HMR10⑤', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 29, classEquipmentId: 4, name: 'Panasonic AG-HMR10⑥', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 30, classEquipmentId: 4, name: 'Panasonic AG-HMR10⑦', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
      { id: 31, classEquipmentId: 4, name: 'Panasonic AG-HMR10⑧　FRESH優先機材', description: '', image_original_filename: '', image: '', reservationStatus: 0, createdId: 1, updatedId: 1, createdAt: '', updatedAt: '', deletedAt: null },
    ];
    const reservations = [
      { id: 1, userId: 1, equipmentId: 1, studioId: 1, name: 'どすこい！鬼入道と暴れ牛', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() - 2), lendingEndAt: new Date().setDate(this.date.getDate() + 2), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 20, 10, 56), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 2, userId: 2, equipmentId: 2, studioId: 2, name: '大陸横断シベリア鉄道の旅（予備日）', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 9), lendingEndAt: new Date().setDate(this.date.getDate() + 10), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 21, 11, 6), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 3, userId: 2, equipmentId: 3, studioId: 2, name: '大陸横断シベリア鉄道の旅（予備日）', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 9), lendingEndAt: new Date().setDate(this.date.getDate() + 10), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 22, 12, 12), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 4, userId: 3, equipmentId: 4, studioId: 3, name: '電波研究会（予備日）', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 15), lendingEndAt: new Date().setDate(this.date.getDate() + 20), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 23, 13, 22), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 5, userId: 3, equipmentId: 5, studioId: 3, name: '電波研究会（予備日）', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 15), lendingEndAt: new Date().setDate(this.date.getDate() + 20), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 24, 14, 34), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 6, userId: 4, equipmentId: 6, studioId: 5, name: '（再）レッドクリスマス', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 15), lendingEndAt: new Date().setDate(this.date.getDate() + 16), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 25, 15, 46), updatedAt: new Date(2018, 11, 20, 10, 56), deletedAt: null },
      { id: 7, userId: 4, equipmentId: 7, studioId: 5, name: '（再）レッドクリスマス', description: '', comment: '', lendingStartAt: new Date().setDate(this.date.getDate() + 15), lendingEndAt: new Date().setDate(this.date.getDate() + 16), createdId: 1, updatedId: 1, createdAt: new Date(2018, 10, 26, 16, 58), updatedAt: new Date(2018, 11, 20, 10, 57), deletedAt: null }
    ];
    const classEquipments = [
      {id: 1, name: 'カメラ', details: '', createdId: 1, updatedId: 1, createdAt: new Date(2018, 0, 1, 0, 0), updatedAt: new Date(2018, 0, 1, 0, 0), deletedAt: null},
      {id: 2, name: '小物', details: '', createdId: 1, updatedId: 1, createdAt: new Date(2018, 0, 1, 0, 0), updatedAt: new Date(2018, 0, 1, 0, 0), deletedAt: null},
      {id: 3, name: '三脚', details: '', createdId: 1, updatedId: 1, createdAt: new Date(2018, 0, 1, 0, 0), updatedAt: new Date(2018, 0, 1, 0, 0), deletedAt: null},
      {id: 4, name: 'VTR', details: '', createdId: 1, updatedId: 1, createdAt: new Date(2018, 0, 1, 0, 0), updatedAt: new Date(2018, 0, 1, 0, 0), deletedAt: null}
    ];
    return { users, studios, equipments, reservations, classEquipments };
  }
}
