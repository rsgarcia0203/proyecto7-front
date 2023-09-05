export interface Supplier {
  SupplierID: number;
  Name: string | null;
  Phone: string | null;
  Email: string | null;
  Address: string | null;
  TaxID: string | null;
  LegalName: string | null;
  TaxType: string | null;
  CreationDate: Date | null;
  UpdateDate: Date | null;
  Status: string | null;
}
