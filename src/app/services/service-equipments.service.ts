import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ResourceModelEquipments} from "../models/resource-model-equipments";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ServiceEquipmentsService {
  private equipmentsUrl = 'api/equipments';  // Web APIのURL

  constructor(
    private http: HttpClient
  ) {}

  /** サーバーから備品一覧を取得する */
  getEquipments (): Observable<ResourceModelEquipments[]> {
    return this.http.get<ResourceModelEquipments[]>(this.equipmentsUrl)
      .pipe(
        // tap(equipments => this.log('fetched equipments')), // ログ出力機能どうするか？
        catchError(this.handleError('getEquipments', []))
      );
  }

  /** IDによりユーザを取得する。見つからなかった場合は404を返却する。 */
  getEquipment(id: number): Observable<ResourceModelEquipments> {
    const url = `${this.equipmentsUrl}/${id}`;
    return this.http.get<ResourceModelEquipments>(url).pipe(
      // tap(_ => this.log(`fetched equipment id=${id}`)),
      catchError(this.handleError<ResourceModelEquipments>(`getEquipment id=${id}`))
    );
  }

  /** PUT: サーバー上でユーザを更新 */
  updateEquipment (equipment: ResourceModelEquipments): Observable<any> {
    return this.http.put(this.equipmentsUrl, equipment, httpOptions).pipe(
      // tap(_ => this.log(`updated equipment id=${equipment.id}`)),
      catchError(this.handleError<any>('updateEquipment'))
    );
  }

  /** POST: サーバーに新しいユーザを登録する */
  addEquipment (equipment: ResourceModelEquipments): Observable<ResourceModelEquipments> {
    console.log("DEBUG DEBUG DEBUG equipment:");
    console.log(equipment);
    return this.http.post<ResourceModelEquipments>(this.equipmentsUrl, equipment, httpOptions).pipe(
      // tap((equipment: ResourceModelEquipments) => this.log(`added equipment w/ id=${equipment.id}`)),
      catchError(this.handleError<ResourceModelEquipments>('addResourceModelEquipments'))
    );
  }

  /** DELETE: サーバーからユーザを削除 */
  deleteEquipment (equipment: ResourceModelEquipments | number): Observable<ResourceModelEquipments> {
    const id = typeof equipment === 'number' ? equipment : equipment.id;
    const url = `${this.equipmentsUrl}/${id}`;

    return this.http.delete<ResourceModelEquipments>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted equipment id=${id}`)),
      catchError(this.handleError<ResourceModelEquipments>('deleteEquipment'))
    );
  }

  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      // this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}
