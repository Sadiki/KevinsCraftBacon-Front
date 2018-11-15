export interface Order {
    id: number;
    status_id: number;
    created: Date;
    updated: Date;
    shipping_status: string;
    delivery_method: string;
    shipping_price: number;
    order_price: number;
    cust_id: number;
}
