import { CreatedDate } from "./CreatedDate";
import { User } from "./User";

export interface Order {
    orderId?: string;
    customers?: User;
    orderStatusId?: string;
    orderPrice?: string;
    orderUpdate?: string;
    shippingStatus?: string;
    deliveryMethodId?: string;
    shippingPrice?: string;
    createdDate?: CreatedDate;
    cDate?: string;
    cust_id?: string;
    shipping_status?: string;
    order_price?: string;
    delivery_method?: string;
    shipping_price?:string;
}
