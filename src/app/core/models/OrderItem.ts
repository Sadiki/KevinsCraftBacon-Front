import { Bacon } from '../models/Bacon';

export interface OrderItem {
    id?: string;
    cust_id?: string;
    quantity?: string;
    inventory?: Bacon;
    status?: string;
    order_id?: string;
    special_order_id?: string;
    orderHistoryId?: string;
    itemName?: string;
    itemPrice?: number;
    item_id?: string;
}
