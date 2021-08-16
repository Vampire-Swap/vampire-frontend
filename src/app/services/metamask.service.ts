import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

  private ethereum: any
  private provider: any
  public account: Subject<any> = new Subject<any>()

  public isEthereumBrowser(): boolean {
    if (this.ethereum) {
      return true;
    }

    return false;
  }

  public async connect() {
    this.ethereum.request({method: "eth_requestAccounts"})
  }

  constructor() { 

  }
}
