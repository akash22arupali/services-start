import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService:LoggingService,
    private accountsService:AccountService){

  }
  onSetTo(status: string) {
   // this.statusChanged.emit({id: this.id, newStatus: status});
 this.accountsService.updateAccount(this.id, status);
    
    this.loggingService.LogStatusChanged(status);
  }
}
