export interface ReserveTable {
  ReserveID: number;
  CustomerID: number | null;
  ReservationDate: Date | null;
  TableNumber: number | null;
}
