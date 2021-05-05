import { LightningElement, api } from 'lwc';

export default class LwcModal extends LightningElement {

    @api showModal = false;
    @api message;
    @api modalHeading;

    @api
    openModal() {
        this.showModal = true;
    }

    @api
    closeModal() {
        this.showModal = false;
    }
}