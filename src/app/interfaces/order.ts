export interface Order {
  OrderID: number;
  Receipt: string | null;
  Date: Date | null;
  StartTime: string | null;
  EndTime: string | null;
  Status: string | null;
  Total: number | null;
  CustomerID: number | null;
}
