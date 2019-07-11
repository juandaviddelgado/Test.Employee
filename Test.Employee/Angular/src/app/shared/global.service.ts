import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GlobalService {

  private resourceUri: string;

  constructor(private http: HttpClient) {
    this.resourceUri = 'https://localhost:44355/';
  }

  public getCompleteUrl(url: string): string {
    if (this.resourceUri && this.resourceUri[this.resourceUri.length - 1] !== '/') {
      this.resourceUri += '/';
    }

    return this.resourceUri + url;
  }

  getData(url: string, id: number) {
    return this.http
      .get(this.getCompleteUrl(url) + id);
  }
}
