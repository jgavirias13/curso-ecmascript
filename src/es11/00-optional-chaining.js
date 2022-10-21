const users = {
  address: {
    country: 'CO'
  },
  name: 'Juan'
};

console.log(users.address?.country);
console.log(users.phone?.details); //Como phone no esta definido se retorna un undefined y no un error