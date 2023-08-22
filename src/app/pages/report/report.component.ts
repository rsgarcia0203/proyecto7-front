import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/providers/product/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { ProductCategoryService } from 'src/app/providers/productCategory/product-category.service';
import { ProductCategory } from 'src/app/interfaces/product-category';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  protected displayedColumns: string[] = ['codigo', 'nombre', 'precio', 'detalle', 'stock'];
  protected msg:string = '';
  public products:Array<Product> = [];
  protected filteredProducts = new MatTableDataSource(this.products);
  protected selectMsg = '';
  protected selectValues: Array<ProductCategory> = [];
 
  public constructor(private ps:ProductService, private pcs:ProductCategoryService) {}

  public ngOnInit(): void {
    this.ps.getAllProducts()
            .subscribe((response) => {
              this.msg = 'Procesando datos';
              this.filteredProducts.data = (response as Array<Product>);
            });

    this.pcs.getAll()
            .subscribe((response) => {
              this.selectMsg = '-';
              this.selectValues = (response as Array<ProductCategory>)
            });
  }

  public onCategorySelected(categoryId: number) {
    this.filteredProducts.data = this.products.filter(product => product.categoryId === categoryId);
  }
}
