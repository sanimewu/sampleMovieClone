import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {tap} from "rxjs";
import dayjs from "dayjs";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss'
})
export class DatePickerComponent implements OnInit{
  datepickerForm!: FormGroup;
  ranges=null as any;
  dateFilterArr  ={
    startDate:'',
    endDate:'',
  }
  @Output() dateRange = new EventEmitter();
  constructor(private fb:FormBuilder){}


  ngOnInit() {
    this.datepickerForm = this.fb.group({
      dateRange:[null],
    })
    this.dateFilter();
  }
  dateFilter(){
    this.datepickerForm.get('dateRange')?.valueChanges.subscribe((date:any)=>{
      if(date?.length>0){
          this.dateFilterArr.startDate = dayjs(date[0]).format('DD/MM/YYYY');
          console.log(this.dateFilterArr.startDate);
          this.dateFilterArr.endDate = dayjs(date[1]).format('DD/MM/YYYY');
          console.log(this.dateFilterArr);
      }
      else{
        this.dateFilterArr.startDate = '';
        this.dateFilterArr.endDate = '';
      }
    })
  }
  disabledDate = (current: Date): boolean => {
    const selectedRange = this.datepickerForm.get('dateRange')?.value;
    if (!selectedRange || !selectedRange[0]) {
      return false;
    }
    const startDate = dayjs(selectedRange[0]);
    const maxEndDate = startDate.add(7, 'day');

    return current < startDate.toDate() || current > maxEndDate.toDate() || current > new Date();
  };


}
