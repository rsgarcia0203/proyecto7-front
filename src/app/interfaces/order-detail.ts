export interface OrderDetail {
  OrderDetailID: number;
  OrderLine: number | null;
  PaymentMethod: string | null;
  Date: Date | null;
  TransactionNumber: string | null;
  Amount: number | null;
  Balance: number | null;
  Comment: string | null;
  Bank: string | null;
  Quantity: number | null;
  Applied: string | null;
  OrderID: number | null;
  ProductID: number | null;
}
