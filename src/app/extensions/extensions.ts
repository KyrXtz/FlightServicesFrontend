import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import Swal from "sweetalert2";

export function isNullOrEmptyOrUndefined(value: string | undefined | null): boolean {
  return value == null || value == "" || value == undefined;
}

export function handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Connection error! Try refreshing the page',
  });
  return throwError(() => new Error('Something bad happened; please try again later.'));
};