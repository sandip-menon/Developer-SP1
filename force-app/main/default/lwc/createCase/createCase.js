import { LightningElement,track,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateCase extends LightningElement {
    @api recordId;
    @track cardTitle='New Case';
    
    handleSuccess (){
        const evt = new ShowToastEvent({
            title: "Success!",
            message: "The Case's record has been successfully saved.",
            variant: "success",
        });
        this.dispatchEvent(evt);
    }
    
}