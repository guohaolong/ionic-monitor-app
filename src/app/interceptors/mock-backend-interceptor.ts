import { HttpInterceptor, HttpResponse, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

export class MockBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return Observable.of(null).mergeMap(() => {
            // login
            if (request.url.endsWith('/api/login') && request.method === 'POST') {
                // get new user object from post body
                const user = request.body;
                sessionStorage.setItem('user', JSON.stringify(user));
                return Observable.of(new HttpResponse({ status: 200 }));
            }

            // pass through any requests not handled above
            return next.handle(request);
        })
            // call materialize and dematerialize to ensure delay even if an error is thrown
            .materialize()
            .delay(500)
            .dematerialize();
    }
}
