// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { RoutesService } from "src/app/core/services/routes.service";
// import { HttpOptions } from "src/app/shared/interfaces/http-options.interface";
// import { RouteInterface } from "src/app/shared/interfaces/route.interface";
// import { environment } from "src/environments/environment";

// const ACCEPT_HEADER_NAME = "Accept";
// const CONTENT_TYPE_HEADER_NAME = "Content-Type";

// export class HttpClientService {
//   constructor(private http: HttpClient, private routes: RoutesService) {}

//   get<T>(route: RouteInterface, options: HttpOptions = {}): Observable<T> {
//     const modifiedOptions = this.setHeaders(options);

//     return this.http.get<T>(this.getUrl(route), modifiedOptions);
//   }

//   post<T>(
//     route: RouteInterface,
//     data: Object,
//     options: HttpOptions = {}
//   ): Observable<T> {
//     const modifiedOptions = this.setHeaders(options);

//     return this.http.post<T>(this.getUrl(route), data, modifiedOptions);
//   }

//   put<T>(
//     route: RouteInterface,
//     data: Object,
//     options: HttpOptions = {}
//   ): Observable<T> {
//     const modifiedOptions = this.setHeaders(options);

//     return this.http.put<T>(this.getUrl(route), data, modifiedOptions);
//   }

//   patch<T>(
//     route: RouteInterface,
//     data: Object,
//     options: HttpOptions = {}
//   ): Observable<T> {
//     const modifiedOptions = this.setHeaders(options);

//     return this.http.patch<T>(this.getUrl(route), data, modifiedOptions);
//   }

//   delete<T>(route: RouteInterface, options: HttpOptions = {}): Observable<T> {
//     const modifiedOptions = this.setHeaders(options);

//     return this.http.delete<T>(this.getUrl(route), modifiedOptions);
//   }

//   public getUrl(route: RouteInterface): string {
//     return route.absolute
//       ? this.routes.generate(route)
//       : environment.apiUrl + this.routes.generate(route);
//   }

//   private setHeaders(options: HttpOptions): HttpOptions {
//     let modifiedOptions = this.setAcceptHeader(options);

//     modifiedOptions = this.setContentTypeHeader(options);

//     return modifiedOptions;
//   }

//   private setAcceptHeader(options: HttpOptions): HttpOptions {
//     const modifiedOptions = options;

//     if (options.headers) {
//       modifiedOptions.headers = modifiedOptions.headers.append(
//         ACCEPT_HEADER_NAME,
//         environment.apiFormat
//       );
//     } else {
//       modifiedOptions.headers = new HttpHeaders({
//         [ACCEPT_HEADER_NAME]: environment.apiFormat,
//       });
//     }

//     return modifiedOptions;
//   }

//   private setContentTypeHeader(options: HttpOptions): HttpOptions {
//     const modifiedOptions = options;

//     if (!options.headers.get(CONTENT_TYPE_HEADER_NAME)) {
//       modifiedOptions.headers = modifiedOptions.headers.append(
//         CONTENT_TYPE_HEADER_NAME,
//         environment.apiFormat
//       );
//     } else {
//       modifiedOptions.headers = modifiedOptions.headers.delete(
//         CONTENT_TYPE_HEADER_NAME
//       );
//     }

//     return modifiedOptions;
//   }
// }
