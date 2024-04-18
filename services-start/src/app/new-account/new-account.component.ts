import { Component } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
 // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService,
      private accountsService:AccountService){

  }
  onCreateAccount(accountName: string, accountStatus: string) {

    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
   // });
    //console.log('A server status changed, new status: ' + accountStatus);
    // Creating service Manually
    // const service= new LoggingService();
    // service.LogStatusChanged(accountStatus);
    // Creating service instance automatically by angular
    this.accountsService.addAccount(accountName,accountStatus);
    this.loggingService.LogStatusChanged(status);
    
   
  }
}
