import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {ResourceModelStudios} from "../models/resource-model-studios";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ServiceStudiosService {
  private studiosUrl = 'api/studios';  // Web APIのURL

  constructor(
    private http: HttpClient
  ) {}

  /** サーバーからスタジオ一覧を取得する */
  getStudios (): Observable<ResourceModelStudios[]> {
    return this.http.get<ResourceModelStudios[]>(this.studiosUrl)
      .pipe(
        // tap(studios => this.log('fetched studios')), // ログ出力機能どうするか？
        catchError(this.handleError('getStudios', []))
      );
  }

  /** IDによりスタジオを取得する。見つからなかった場合は404を返却する。 */
  getStudio(id: number): Observable<ResourceModelStudios> {
    const url = `${this.studiosUrl}/${id}`;
    return this.http.get<ResourceModelStudios>(url).pipe(
      // tap(_ => this.log(`fetched studio id=${id}`)),
      catchError(this.handleError<ResourceModelStudios>(`getStudio id=${id}`))
    );
  }

  /** PUT: サーバー上でスタジオを更新 */
  updateStudio (studio: ResourceModelStudios): Observable<any> {
    return this.http.put(this.studiosUrl, studio, httpOptions).pipe(
      // tap(_ => this.log(`updated studio id=${studio.id}`)),
      catchError(this.handleError<any>('updateStudio'))
    );
  }

  /** POST: サーバーに新しいスタジオを登録する */
  addStudio (studio: ResourceModelStudios): Observable<ResourceModelStudios> {
    console.log("DEBUG DEBUG DEBUG studio:");
    console.log(studio);
    return this.http.post<ResourceModelStudios>(this.studiosUrl, studio, httpOptions).pipe(
      // tap((studio: ResourceModelStudios) => this.log(`added studio w/ id=${studio.id}`)),
      catchError(this.handleError<ResourceModelStudios>('addResourceModelStudios'))
    );
  }

  /** DELETE: サーバーからスタジオを削除 */
  deleteStudio (studio: ResourceModelStudios | number): Observable<ResourceModelStudios> {
    const id = typeof studio === 'number' ? studio : studio.id;
    const url = `${this.studiosUrl}/${id}`;

    return this.http.delete<ResourceModelStudios>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted studio id=${id}`)),
      catchError(this.handleError<ResourceModelStudios>('deleteStudio'))
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
