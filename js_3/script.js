//task 1

let room = {
    height: 3,
    tv: 'samsung',
    big: true,
};
alert(room.big);

//task 2
let user = {
    name: "John",
    age: 30
  };
console.log(user.hasOwnProperty("age"));  

//task 3
let users = {
    user_1: {
      name: "John",
      age: 30
    },
    user_2: {
      name: "Bob",
      age: 21
    },
    user_3: {
      name: "Anna",
      age: 19
    }
  }
  
  let result;

  for (let key in users) {
    if ( users[key].name === 'Bob') 
        result = users[key];
  }
  
  console.log(result);


  for (let key in users) {
    if (users[key].name === 'Anna')
    delete users[key]
  }
  console.log (users);

//task 4
  const obj = {
    id: 5,
    token: 12343423
  };

  const id = obj["id"];

  console.log(id);
  
//task 5
let car = {
  manufacturer: "BMW",
  model: "X5",
  year: 2015,
  avgSpeed: 90,
  fuelTank: 80,
  avgFuelConsump: 9,
  drivers: ['Tania', 'Mykola'],

  getInfo() {
    for(let param in this) {
      if(typeof(this[param]) !== 'function')
      console.log(param + ': '+this[param]+ '\n');
    }
  },

  addDriver(name) {
    if (!this.checkDriver(name))
      this.drivers.push(name);
  },

  checkDriver(name) {
    return this.drivers.includes(name);
  },

  calculate(distance){
    let totalTime ;
    let distancefuelConsump ;

    if (typeof(distance) !== 'number')
      return "Please enter number";

    distancefuelConsump = (distance / 100)*this.avgFuelConsump;

    let timeSpend = distance / this.avgSpeed;

    if (timeSpend >= 4)
        totalTime = timeSpend + Math.round(timeSpend / 4);
    else 
      totalTime = timeSpend;

    if (!(timeSpend % 4))
        totalTime = totalTime - 1;

    return {
      "distancefuelConsump": distancefuelConsump + " liters",
      "totalTime": totalTime + " hours"
    }
  }
};

car.getInfo();
car.addDriver('Betty');
console.log(car.checkDriver('Betty'));
console.log(car.calculate(900));
