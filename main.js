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
    id: 1,
    firstName: "avi",
    lastName: "admso",
    email: "aviadmso@gmail.com",
    balance: -500,
    phone: "67676767676",
  },
  {
    id: 2,
    firstName: "amir",
    lastName: "mangisto",
    email: "amiros@gmail.com",
    balance: 2500,
    phone: "45454545454",
  },
  {
    id: 3,
    firstName: "eliyau",
    lastName: "belay",
    email: "thebelay@gmail.com",
    balance: -5000000,
    phone: "2323232323",
  },
  {
    id: 4,
    firstName: "yoni",
    lastName: "tagania",
    email: "ys@gmail.com",
    balance: 20,
    phone: "121212121",
  },
];

// console.log(tzagaysBank);

////////////////////////////////////////
function addClient(newClient) {
  tzagaysBank.push(newClient);
  return tzagaysBank;
}
addClient({
  id: 5,
  firstName: "Jacob",
  lastName: "Shiber",
  email: "JShiber@gmail.com",
  balance: 2220,
  phone: "666666667",
});

// console.log(tzagaysBank);
//////////////////////////////////////////

//////////////////////////////////////////

function getClient(id) {
  for (let i = 0; i < tzagaysBank.length; i++) {
    if (tzagaysBank[i].id == id) {
      return tzagaysBank[i];
    }
  }
}

// console.log(getClient(5));

//////////////////////////////////////////

////////////////////////////////////////////

function deleteClient(id) {
  for (let i = 0; i < tzagaysBank.length; i++) {
    if (tzagaysBank[i].id == id) {
      tzagaysBank.splice([i], 1);

      return tzagaysBank;
    }
  }
}
// console.log(deleteClient(2));

////////////////////////////////////////////

////////////////////////////////////////////

function withdrawMoney(id, amount) {
  for (let i = 0; i < tzagaysBank.length; i++) {
    if (tzagaysBank[i].id == id) {
      tzagaysBank[i].balance = tzagaysBank[i].balance - amount;
      return tzagaysBank;
    }
  }
}
// console.log(withdrawMoney(316164144, 500000));

/////////////////////////////////////////////

function depositMoney(id, amount) {
  for (let i = 0; i < tzagaysBank.length; i++) {
    if (tzagaysBank[i].id == id) {
      tzagaysBank[i].balance = tzagaysBank[i].balance + amount;
      return tzagaysBank;
    }
  }
}
// console.log(depositMoney(2,2000000));

/////////////////////////////////////////////

function BlockedClients (id){

    let blacklist = [];
    if (tzagaysBank.id == id){

        blacklist.push([i],1)
        return blacklist
    }
}
console.log(BlockedClients(2));

