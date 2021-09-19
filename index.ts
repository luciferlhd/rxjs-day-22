import './style.css';

import { of, map, fromEvent, throttleTime, from, defer, merge } from 'rxjs';

// of('World')
//   .pipe(map(name => `Hello, ${name}!`))
//   .subscribe(console.log);

// Open the console in the bottom right to see results.
// fromEvent(document, 'mousemove')
//   .pipe(
//     throttleTime(1000),
//     map((ev: MouseEvent) => ev.clientX + '' + ev.clientY)
//   )
//   .subscribe(console.log);
// const observer = {
//   next: (val) => console.log(val),
//   error: (err) => console.log(err),
//   complete: () => console.log('complete'),
// };
// of thì nó sẽ emit tất các các gtrij truyền vào . và complete 
// of(Promise.resolve('Hello'));
//from chỉ nhận observable array 
// from(Promise.resolve('hello'));
// from([1,2,3]);
//  fromEvent(document,'click');
//  const ramdom = defer(()=> of(Math.random()))
//  ramdom.subscribe(observer)
//  ramdom.subscribe(observer)

//  ramdom.subscribe(observer)
//  ramdom.subscribe(observer)

// bài 21 :Transformation Operators là  chỉ để vận chuyễn từ thằng A sang  thằng B ọkkie
const users = [
  {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
  {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
];

const usersVm = users.map(user => {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
});

 const observable1={
   next : value => console.log(value),
   Error : err => console.error (err),
   complete :() => console.log ('thành công')
 }
 //nếu dùng from nó sẽ emiter từng phần tử
 from(users).pipe(map( dt =>{ console.log('mappppppp', dt)})); 
 of(users).pipe(map(data =>{    
  //  map này nhận tất cả data từ observable này : *(users). chứ không nhận lẻ từ phần tử
   console.log('map nè :', data)
 }));

 