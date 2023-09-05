export interface Rating {
  RatingID: number;
  CustomerID: number | null;
  Date: Date | null;
  Description: string | null;
  Score: number | null;
}
