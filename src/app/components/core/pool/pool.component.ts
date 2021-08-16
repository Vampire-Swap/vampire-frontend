import { Component, Input, OnInit } from '@angular/core';
import { Pool } from './pool';

@Component({
  selector: 'pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.less']
})
export class PoolComponent implements OnInit {

  @Input()
  public pool: Pool = new Pool("", "", "");
  public stakeAction: boolean = false;
  public unstakeAction: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  startStakeAction() {
    this.stakeAction = true;
    this.unstakeAction = false;
  }

  startUnstakeAction() {
    this.unstakeAction = true;
    this.stakeAction = false;
  }

}
