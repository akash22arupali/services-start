import { Component } from '@angular/core';
import { AccountService } from './accounts.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit {
onAccountAdded($event: any) {
throw new Error('Method not implemented.');
}
  accounts:{name: string,status:string}[]=[];

  constructor(private accountsService:AccountService){}
  ngOnInit(){
    this.accounts=this.accountsService.accounts;
  }
}
