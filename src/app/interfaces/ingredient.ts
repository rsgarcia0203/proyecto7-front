export interface Ingredient {
  IngredientID: number;
  Name: string | null;
  Supplier: string | null;
  SupplierID: number | null;
  Stock: number | null;
  ProductID: number | null;
  CreationDate: Date | null;
  Status: string | null;
}
