// вариант 1
let phone = {};
phone.make = 'Huawei';
phone.model = 'Mate 20X';
phone.color = 'black';
phone.ring = function () {
  console.log('Ring');
}

console.log(phone);

//варыант 2
const iPhoneX = {
  make: 'Apple',
  model: 'X',
  color: 'silver',
  ring: function () {
  }
}
// 
 console.log(iPhoneX);

function Phone(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}
 Phone prototype.ring = function () {
    console.log('Ring');
  }
}

const samsungNote20 = new Phone('Samsung', 'Note20', 'white');

console.log(samsungNote20);

class Smartphone {
  constructor (make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}
ring() {
  console.log(this.model + 'Ring');
  }
}

const pixel = new Smartphone('Gooogle', 'Pixel', 'white');
pixel.ring();

const samsungNote20Black = Object.create(samsungNote20);
samsungNote20Black.color = 'black';
console.log(samsungNite20Black.__proto__);
samsungNote20Black.ring();

const phoneJson `{
function Phone(make, model, color) {
  make: 'Apple',
  model: 'iPhone XII Pro Max',
  color: 'silver',
}`;

const iPhoneXIIPro = JSON.parse(phoneJson);
console.log(iPhoneXIIPro);
