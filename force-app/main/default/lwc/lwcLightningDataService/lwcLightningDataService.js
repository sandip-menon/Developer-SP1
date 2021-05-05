5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
  import { api, LightningElement, track, wire } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_Industry from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';
 
export default class lwcLightningDataService extends NavigationMixin (LightningElement) {
  @api title;
  @api greetings;
  
  objectApiName='Account';
  fieldList = [Account_Name,Account_Phone,Account_Industry];
  handleAccountCreate(event){
    const evt = new ShowToastEvent({
      title:'Record Created Successfully',
      message:'Record Id: ' + event.detail.id,
      variant:'success',
    })
    this.dispatchEvent(evt);
 
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
          recordId: event.detail.id,
          objectApiName: 'Account',
          actionName: 'view'
      },
   });
 
  }
   
}