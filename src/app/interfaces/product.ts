export interface Product {
  ProductID: number;
  CategoryID: number | null;
  Name: string | null;
  Description: string | null;
  Price: number | null;
  Cost: number | null;
  Stock: number | null;
  Image: string | null;
  Status: string | null;
}
