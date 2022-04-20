export class Payment {
    constructor(recipient, detail, amount) {
        this.recipient = recipient;
        this.detail = detail;
        this.amount = amount;
    }
    ;
    format() {
        return `${this.recipient} owes ${this.amount} for ${this.detail}`;
    }
    ;
}
;
