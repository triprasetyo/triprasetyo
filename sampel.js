const coffe = {
    nama:"tubruk",
    price:15000,
}

module.exports = {nama, price};
console.log(nama);

function siang(){
    const angka1 = 10;
    const angka2 = 20;
    total = angka1+angka2;
    return total;
}

console.log(siang());

const firstName = 'harry';
const lastName = 'potter';
module.exports = {firstName, lastName};
console.log(`mendapatkan ${firstName}`);