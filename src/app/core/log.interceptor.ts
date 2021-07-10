import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //j'affiche l'url avec les params
    console.log(req.urlWithParams);
    /* je passe la requête à la suite des interceptors cachés d'angular*/
    // pipe permet d'ajouter des actions à effectuer quand l'observable est
    const start: number = Date.now();
    return next.handle(req).pipe(
      // tap est un observable qui indique:
      // Je fais des actions sans modifier la réponse
      tap((response) => {
        // On s'assure qu'il s'agit bien d'une réponse http
        if (response instanceof HttpResponse) {
          // Ici sera le code exécuté à la réponse du serveur
          // Dans le cas où tout s'est bien passé
          console.log('took ' + (Date.now() - start) + 'ms');
        }
      })
    );
  }
}
