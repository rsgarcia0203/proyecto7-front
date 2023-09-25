import { ApiService } from './../../providers/apiservice/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { MatTableDataSource } from '@angular/material/table';
import { ProductCategory } from 'src/app/interfaces/product-category';
import { Order } from 'src/app/interfaces/order';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  protected displayedColumns: string[] = ['OrderID', 'Receipt', 'Date', 'StartTime', 'EndTime', 'Total'];
  protected msg:string = '';
  public orders:Array<Order> = [];
  protected filteredOrders = new MatTableDataSource(this.orders);
  protected selectMsg = '';
  protected selectValues: Array<ProductCategory> = [];
 
  public constructor(private ApiService:ApiService) {
    this.ApiService.setController("Orden");
  }

  public ngOnInit(): void {
    this.ApiService.getAllEntities<Order[]>()
            .subscribe((response) => {
              this.msg = 'Procesando datos';
              this.filteredOrders.data = (response as Array<Order>);
            });
  }

  public applyFilter(filterValue: string): void {
    this.filteredOrders.filter = filterValue.trim().toLowerCase();
  }
}
