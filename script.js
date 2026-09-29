class Vehicle {
  constructor(name, pricePerDay) {
    this.name = name;
    this.pricePerDay = pricePerDay;
  }
  calculatePrice(days) {
    let totalprice = this.pricePerDay * days;
    console.log(totalprice);
  }
}
class Car extends Vehicle {
  constructor(name, pricePerDay, seats) {
    super(name, pricePerDay);
    this.seats = seats;
  }
  showdetails() {
    let cname = document.createElement("h1");
    cname.textContent = this.name;
    let pricePerDay = document.createElement("h3");
    pricePerDay.textContent = this.pricePerDay;
    let seats = document.createElement("h3");
    seats.textContent = this.seats;
    document.body.appendChild(cname);
    document.body.appendChild(pricePerDay);
    document.body.appendChild(seats);
  }
}
class Bike extends Vehicle {
  constructor(name, pricePerDay, helmet) {
    super(name, pricePerDay);
    this.helmet = helmet;
  }
  showdetails() {
    let bname = document.createElement("h1");
    bname.textContent = this.name;
    let pricePerDay = document.createElement("h3");
    pricePerDay.textContent = this.pricePerDay;
    let helmet = document.createElement("h3");
    helmet.textContent = this.helmet;
    document.body.appendChild(bname);
    document.body.appendChild(pricePerDay);
    document.body.appendChild(helmet);
  }
}
let v1 = new Vehicle("BMW", 10000);
v1.calculatePrice(15);
let c1 = new Car("supra", 10000, 2);
c1.showdetails();
let b1 = new Bike("pulsar", 2000, "yes");
b1.showdetails();
