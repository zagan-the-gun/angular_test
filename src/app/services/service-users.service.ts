import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResourceModelUsers } from "../models/resource-model-users";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class ServiceUsersService {
  private usersUrl = 'api/users';  // Web APIのURL

  constructor(
    private http: HttpClient
  ) {}

  /** サーバーからユーザ一覧を取得する */
  getUsers (): Observable<ResourceModelUsers[]> {
    return this.http.get<ResourceModelUsers[]>(this.usersUrl)
      .pipe(
        // tap(users => this.log('fetched users')), // ログ出力機能どうするか？
        catchError(this.handleError('getUsers', []))
      );
  }

  /** IDによりユーザを取得する。見つからなかった場合は404を返却する。 */
  getUser(id: number): Observable<ResourceModelUsers> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<ResourceModelUsers>(url).pipe(
      // tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<ResourceModelUsers>(`getUser id=${id}`))
    );
  }

  /** PUT: サーバー上でユーザを更新 */
  updateUser (user: ResourceModelUsers): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      // tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** POST: サーバーに新しいユーザを登録する */
  addUser (user: ResourceModelUsers): Observable<ResourceModelUsers> {
    return this.http.post<ResourceModelUsers>(this.usersUrl, user, httpOptions).pipe(
      // tap((user: ResourceModelUsers) => this.log(`added user w/ id=${user.id}`)),
      catchError(this.handleError<ResourceModelUsers>('addResourceModelUsers'))
    );
  }

  /** DELETE: サーバーからユーザを削除 */
  deleteUser (user: ResourceModelUsers | number): Observable<ResourceModelUsers> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<ResourceModelUsers>(url, httpOptions).pipe(
      // tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<ResourceModelUsers>('deleteUser'))
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
