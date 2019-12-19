import { Component, OnInit } from '@angular/core';
import { MedicareTestService } from '../services/medicare-test.service';


@Component({
  selector: 'app-view-medicare-test-history',
  templateUrl: './view-medicare-test-history.component.html',
  styleUrls: ['./view-medicare-test-history.component.css']
})
export class ViewMedicareTestHistoryComponent implements OnInit {

  constructor(private medicareTestService:MedicareTestService) { }

  ngOnInit() {
    this.medicareTestService.viewMedicareTestHistory().subscribe(data=>{
      console.log(data);
    })
  }

}
