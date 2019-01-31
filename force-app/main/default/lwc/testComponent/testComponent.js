import { LightningElement, api} from 'lwc';

export default class TestComponent extends LightningElement {

    @api name;

    test = 'test';

    updateTest(event) {
        console.log(event);
        //this.test = event.target.value;
    }

}