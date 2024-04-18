export class LoggingService{
    LogStatusChanged(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}