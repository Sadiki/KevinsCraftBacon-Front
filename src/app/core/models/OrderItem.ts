import { Inventory } from '../models/Inventory'
export interface OrderItem {
    id?: string;
    cust_id?: string;
    quantity?: string;
    inventory?: Inventory;
    status?: string;
    order_id?: string;
    special_order_id?: string;
    orderHistoryId?: string;
    itemName?: string;
    itemPrice?: string;
    item_id?: string;
    status_id?: string;
}
