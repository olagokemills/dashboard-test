import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Users } from './data'

export interface pbar {
  start: number;
  end: number;
  progress:number;
  task: string;
  bgColor:string,
  color:string,
}
interface colors{
  bgColor:string,
  color:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  routeName:string;
  title = 'calender-app';
  dt = moment(Date.now());
  noOfDays: number;
  DaysArray: Array<any> = [];
  DayNameArray: Array<any> = [];
  progressBarArray: Array<pbar> = [
  ];
  today:any
  taskArray: Array<string> = [
    'User Profile',
    'Transfers',
    'Bills Payment',
    'Invoicing',
    'Single Payment',
    'Schemes',
    'Payouts',
    'Gaming',
    'Cashout',
    'Withdrawals'
  ];
  colors: Array<colors> = [
    {
      color:'#FFD700',
      bgColor: 'rgba(255, 215, 0, 0.3)'
    },
    {
      color:'#FF8C00',
      bgColor: 'rgba(255, 140, 0, 0.3)'
    },
    {
      color:'#090738',
      bgColor: 'rgba(9, 7, 56, 0.3)'
    },
    {
      color:'#1AD3FB',
      bgColor: 'rgba(26, 211, 251, 0.3)'
    },
  ];
  totalProgress: number = 0;
  users:Array<{name:string, role:string}>
  constructor(private router:Router) { 
    let str = this.router.url
    this.routeName =  str.charAt(1).toUpperCase() + str.slice(2)
     this.users = Users
  }

  async ngOnInit() {
    let month = this.dt.month();
    let year = this.dt.year();
    let day = this.dt.date();
    this.noOfDays = day;
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let cDay = day;
    let bDay = day;
     this.today =bDay
    if (day == daysInMonth) {
      while (this.DaysArray.length < 18) {
        await this.addForward(cDay);
        cDay--;
      }
    }

    if (day < daysInMonth) {
      let diffForward = daysInMonth - day;
      for (let i = 0; i <= diffForward; i++) {
        await this.addBackward(cDay + i);
      }
      if (this.DaysArray.length < 17) {
        let diffBack = 17 - this.DaysArray.length;
        for (let j = 1; j <= diffBack; j++) {
          await this.addForward(bDay - 1);
          bDay--;
        }
      }
     await this.getName(year, month, day);
    }
    this.generatePBar();
  }

  async addForward(data: number) {
    this.DaysArray.unshift(data);
  }

  async addBackward(data: number) {
    this.DaysArray.push(data);
  }

  async getName(a: number, b: number, c: number) {
    this.DaysArray.forEach((element) => {
      let name = new Date(a, b, element+1).toUTCString();
      this.DayNameArray.push(name.slice(0, 1));
    });
  }
  generatePBar() {
    for(let i = 0; i < 10 ; i++) {
      let random = Math.floor(Math.random() * (15 - 6 + 1) + 6);
      let start = Math.floor(Math.random() * ((this.DaysArray[0]-random) - 1 + 1) + 6);
      let colorIndex = this.random(3,0)
      let array = {
        start: (start < this.DaysArray[0]) ? this.DaysArray[0] - start : start,
        end: start + random,
        progress: 20,
        task: this.taskArray[i],
        bgColor:this.colors[colorIndex].bgColor,
        color:this.colors[colorIndex].color 
      }
      this.progressBarArray.push(array);
    }
    this.incrementProgress();
  }
  random(max,min)
  {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  incrementProgress() {
    let max = 100
    setInterval(() => {
      this.progressBarArray.forEach((res) => {
        let temp = res.progress + this.random(30,10)
        if(temp > max)
        {
          temp = 100
        }
        res.progress = temp
      })
      this.getAverage(this.progressBarArray);
    }, 10000)
  }

  getAverage(data) {
    let sum = 0;
    this.progressBarArray.forEach((res) => {
      sum += res.progress;
    })
    this.totalProgress = sum/10;
  }
  returnActive(data:any)
  {
    let day = this.dt.date();
    if(data ===this.today)
    {
      return 'active-date'
    }
  }

}
