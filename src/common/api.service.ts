import { API_CONFIG } from "../config/api.config";
import { Observable } from "./rxjs";

export function apiService(
  urlName: string,
  params?: object,
  opts?: {
    extraParamsForUrl: any;
  }
): Observable<{
  code?: number;
  msg?: string;
  [key: string]: any;
}> {
  const urlInfo = API_CONFIG[urlName];
  let xml = new XMLHttpRequest();
  let url = urlInfo.url;
  switch (urlInfo.method) {
    case "get":
      return getHandle();
    case "delete":
      return postHandle("delete");
    case "post":
    default:
      return postHandle();
  }

  function getHandle(): Observable<any> {
    return new Observable(observer => {
      if (params) {
        url += (url.indexOf("?") < 0 ? "?" : "&") + param(params);
      }
      xml.open("get", url);
      xml.setRequestHeader("Cache-Control", "no-cache");
      xml.setRequestHeader("Pragma", "no-cache");
      xml.send();
      xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
          if (xml.status === 200) {
            observer.next(JSON.parse(xml.response));
            observer.complete();
          } else {
            observer.next({ code: -1, msg: `${xml.status} ${xml.statusText}` });
            observer.complete();
          }
        }
      };
      xml.onerror = err => {
        observer.next({ code: 1, err });
        observer.complete();
      };
    });
  }

  function postHandle(type?: string): Observable<any> {
    return new Observable(observer => {
      if (opts && opts.extraParamsForUrl) {
        url +=
          (url.indexOf("?") < 0 ? "?" : "&") + param(opts.extraParamsForUrl);
      }
      xml.open(type || "post", url);
      let rqHeader;
      let body;
      switch (urlInfo.paramType) {
        case "form-data":
          body = params;
          break;
        case "raw":
          rqHeader = "application/json";
          body = JSON.stringify(params, null, 2);
          xml.setRequestHeader("Accept", "application/json, text/plain, */*");
          break;
        case "json":
        default:
          rqHeader = "application/x-www-form-urlencoded";
          body = param(params);
      }
      if (rqHeader) {
        xml.setRequestHeader("Content-Type", rqHeader);
      }

      if (body) {
        xml.send(body);
      } else {
        xml.send();
      }
      xml.onreadystatechange = () => {
        if (xml.readyState === 4) {
          if (xml.status === 200) {
            observer.next(JSON.parse(xml.response));
            observer.complete();
          } else {
            observer.next({ code: -1, msg: `${xml.status} ${xml.statusText}` });
            observer.complete();
          }
        }
      };
      xml.onerror = err => {
        observer.next({ code: 1, err });
        observer.complete();
      };
    });
  }

  function param(data: any) {
    let url = "";
    for (var i in data) {
      let value = data[i] !== undefined ? data[i] : "";
      url += "&" + i + "=" + encodeURIComponent(value);
    }
    return url ? url.substring(1) : "";
  }
}
