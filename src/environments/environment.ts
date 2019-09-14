import { HttpHeaders } from '@angular/common/http';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const headerObject: HttpHeaders = new HttpHeaders();
headerObject.append('Content-Type', 'application/json');
headerObject.append('Authorization', 'Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk');

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic dGVzdHVzZXI6dGVzdHBhc3N3b3Jk'
  })
 };

export const env_params = {
  apiName: "environment",
	apiEndPoint: "https://sandoratest-service.herokuapp.com/api/property/quickView?long=-121.88632860000001&lat=37.3382082&distance=100&userId=null"
};

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
