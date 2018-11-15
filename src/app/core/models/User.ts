import { Cart } from './Cart';
import { CreditCard } from './CreditCard';

export interface User {
    id: number;
    fname: string;
    lname: string;
    usr: string;
    pwd: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}
