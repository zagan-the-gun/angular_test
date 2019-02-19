import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ResourceModelClassEquipments} from "../models/resource-model-class-equipments";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ServiceClassEquipmentsService {
  private classEquipmentsUrl = 'api/classEquipments';  // Web APIのURL

  constructor(
    private http: HttpClient
  ) {}

  /** サーバーからユーザ一覧を取得する */
  getClassEquipments (): Observable<ResourceModelClassEquipments[]> {
    return this.http.get<ResourceModelClassEquipments[]>(this.classEquipmentsUrl)
      .pipe(
        // tap(classEquipments => this.log('fetched classEquipments')), // ログ出力機能どうするか？
        catchError(this.handleError('getClassEquipments', []))
      );
  }

  /** IDによりユーザを取得する。見つからなかった場合は404を返却する。 */
  getClassEquipment(id: number): Observable<ResourceModelClassEquipments> {
    const url = `${this.classEquipmentsUrl}/${id}`;
    return this.http.get<ResourceModelClassEquipments>(url).pipe(
      // tap(_ => this.log(`fetched classEquipment id=${id}`)),
      catchError(this.handleError<ResourceModelClassEquipments>(`getClassEquipment id=${id}`))
    );
  }

  /** PUT: サーバー上でユーザを更新 */
  updateClassEquipment (classEquipment: ResourceModelClassEquipments): Observable<any> {
    return this.http.put(this.classEquipmentsUrl, classEquipment, httpOptions).pipe(
      // tap(_ => this.log(`updated classEquipment id=${classEquipment.id}`)),
      catchError(this.handleError<any>('updateClassEquipment'))
    );
  }

  /** POST: サーバーに新しいユーザを登録する */
  addClassEquipment (classEquipment: ResourceModelClassEquipments): Observable<ResourceModelClassEquipments> {
    console.log("DEBUG DEBUG DEBUG classEquipment:");
    console.log(classEquipment);
    return this.http.post<ResourceModelClassEquipments>(this.classEquipmentsUrl, classEquipment, httpOptions).pipe(
      // tap((classEquipment: ResourceModelClassEquipments) => this.log(`added classEquipment w/ id=${classEquipment.id}`)),
      catchError(this.handleError<ResourceModelClassEquipments>('addResourceModelClassEquipments'))
    );
  }

  /** DELETE: サーバーからユーザを削除 */
  deleteClassEquipment (classEquipment: ResourceModelClassEquipments | number): Observable<ResourceModelClassEquipments> {
    const id = typeof classEquipment === 'number' ? classEquipment : classEquipment.id;
    const url = `${this.classEquipmentsUrl}/${id}`;

    return this.http.delete<ResourceModelClassEquipments>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted classEquipment id=${id}`)),
      catchError(this.handleError<ResourceModelClassEquipments>('deleteClassEquipment'))
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
