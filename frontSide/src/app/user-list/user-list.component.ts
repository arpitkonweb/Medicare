import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  drs: any[]

  constructor(private router: Router,
      drservice: UserListService,
      private service: UserListService) {

          drservice.getUser().subscribe((response)=>{
              if(response['status']=='success')
              {
                  this.drs = response['data']         
              }
              else{
                  alert('error')
                  console.log(response['error'])
                  
              }
       })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  loadAllProducts() {
      this.service
        .getAllProducts()
        .subscribe(response => {
          if (response['status'] == 'success') {
            this.drs = response['data']
          } else {
            alert('error')
          }
        })
    }
  
 ondelete(productId: number) {
  this.service
    .deleteProduct(productId)
    .subscribe(response => {
      if (response['status'] == 'success') {
        this.loadAllProducts()
      } else {
        console.log(response['error'])
      }
    })
}
  onAddUser()
  {
      this.router.navigate(['/UserRegister'])
  }
  dashboard()
  {
      this.router.navigate(['/login/dashboard'])
  }


}