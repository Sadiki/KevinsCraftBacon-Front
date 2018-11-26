
export interface CreditCard {
    cardNumber?: string;
    fullName?: string;
    securityCode?: string;
    expirationDate?: string;
    cust_id?: string;
    customers?: CreditCard;
}
