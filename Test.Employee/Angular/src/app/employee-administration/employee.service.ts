import { Injectable } from '@angular/core';
import { GlobalService } from '../shared/global.service';

@Injectable()
export class EmployeeService {

  private serviceUrl: string = 'api/employee/';

  private currentAudienceSelected: Array<number>;

  constructor(private globalService: GlobalService) { }

  get(id: number) {

    return this.globalService.getData(this.serviceUrl, id);

  }
}
