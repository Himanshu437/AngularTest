import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookDetail } from '../../../shared/book-detail.model';
import { bookdetailServices } from '../../../shared/book-detail.service';


@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.css']
})
export class BookDetailsFormComponent implements OnInit {

  constructor(public service: bookdetailServices, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (this.service.formData.bookId == 0) {
    this.insertRecord(form);
    }
    else
    this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postBookDetail().subscribe(
      (res: any) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully', 'Book Detail Register');

      },
      err => { console.log(err); }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putBookDetail().subscribe((res: any) => {
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info('Updated Successfully', 'Book Detail Register');

    },
      err => { console.log(err); }

    )

  }
  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new BookDetail();
  }
}

