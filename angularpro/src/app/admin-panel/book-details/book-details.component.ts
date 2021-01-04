import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from '../../shared/book-detail.model';
import { bookdetailServices } from '../../shared/book-detail.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(public service: bookdetailServices, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectRecord: BookDetail) {
    this.service.formData = Object.assign({}, selectRecord);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletebookDetail(id).subscribe(
        res => {
          this.service.refreshList();
          this.toastr.error("Deleted Successfully", "Book Detail Register");
        },
        err => { console.log(err) }
      )
    }
  }
}
