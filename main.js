const tzagaysBank = [
  {
    id: 316164144,
    firstName: "oshri",
    lastName: "tzagay",
    email: "otskills@gmail.com",
    balance: 100000000,
    phone: "0526367723",
  },
  {
    id: 888888888,
    firstName: "avi",
    lastName: "admso",
    email: "aviadmso@gmail.com",
    balance: -500,
    phone: "67676767676",
  },
  {
    id: 777777777,
    firstName: "amir",
    lastName: "mangisto",
    email: "amiros@gmail.com",
    balance: 2500,
    phone: "45454545454",
  },
  {
    id: 666666666,
    firstName: "eliyau",
    lastName: "belay",
    email: "thebelay@gmail.com",
    balance: -5000000,
    phone: "2323232323",
  },
  {
    id: 555555555,
    firstName: "yoni",
    lastName: "tagania",
    email: "ys@gmail.com",
    balance: 20,
    phone: "121212121",
  },
];

// console.log(tzagaysBank);
function addClient (newClient){
tzagaysBank.push(newClient);
return tzagaysBank;


}
addClient ({
    id: 87878787,
    firstName: "Jacob",
    lastName: "Shiber",
    email: "JShiber@gmail.com",
    balance: 2220,
    phone: "666666667",

})
console.log(tzagaysBank);