import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ResourceModelReservations} from "../models/resource-model-reservations";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ServiceReservationsService {
  private reservationsUrl = 'api/reservations';  // Web APIのURL

  constructor(
    private http: HttpClient
  ) {}

  /** サーバーから予約一覧を取得する */
  getReservations (): Observable<ResourceModelReservations[]> {
    return this.http.get<ResourceModelReservations[]>(this.reservationsUrl)
      .pipe(
        // tap(reservations => this.log('fetched reservations')), // ログ出力機能どうするか？
        catchError(this.handleError('getReservations', []))
      );
  }

  /** IDにより予約を取得する。見つからなかった場合は404を返却する。 */
  getReservation(id: number): Observable<ResourceModelReservations> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get<ResourceModelReservations>(url).pipe(
      // tap(_ => this.log(`fetched reservation id=${id}`)),
      catchError(this.handleError<ResourceModelReservations>(`getReservation id=${id}`))
    );
  }

  /** PUT: サーバー上でユーザを更新 */
  updateReservation (reservation: ResourceModelReservations): Observable<any> {
    console.log("DEBUG DEBUG DEBUG updateReservation reservation:");
    console.log(reservation);
    return this.http.put(this.reservationsUrl, reservation, httpOptions).pipe(
      // tap(_ => this.log(`updated reservation id=${reservation.id}`)),
      catchError(this.handleError<any>('updateReservation'))
    );
  }

  /** POST: サーバーに新しいユーザを登録する */
  addReservation (reservation: ResourceModelReservations): Observable<ResourceModelReservations> {
    console.log("DEBUG DEBUG DEBUG addReservation reservation:");
    console.log(reservation);
    return this.http.post<ResourceModelReservations>(this.reservationsUrl, reservation, httpOptions).pipe(
      // tap((reservation: ResourceModelReservations) => this.log(`added reservation w/ id=${reservation.id}`)),
      catchError(this.handleError<ResourceModelReservations>('addResourceModelReservations'))
    );
  }

  /** DELETE: サーバーからユーザを削除 */
  deleteReservation (reservation: ResourceModelReservations | number): Observable<ResourceModelReservations> {
    const id = typeof reservation === 'number' ? reservation : reservation.id;
    const url = `${this.reservationsUrl}/${id}`;

    return this.http.delete<ResourceModelReservations>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted reservation id=${id}`)),
      catchError(this.handleError<ResourceModelReservations>('deleteReservation'))
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
