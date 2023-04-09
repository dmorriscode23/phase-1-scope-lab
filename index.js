let name = 'bob';

function customerName() {
  return name;
}


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "joe";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bill";
}
