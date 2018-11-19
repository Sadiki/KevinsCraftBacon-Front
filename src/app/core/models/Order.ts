export interface Order {
    order_id: number;
    cust_id: number;
    order_status_id: number;
    created_date: Date;
    order_update: Date;
    shipping_status: string;
    delivery_method_id: string;
    shipping_price: number;
    order_price: number;

}
