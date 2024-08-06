// const regx=/^[A-za-z0-9]at/    ^-> first element
// const regx=/fish$/      $-> last element
// const regx=/fishes?/    ?-> last letter either present or not 
// const regx=/eats*/      *-> 0 to many
const regx=/eats+/     //  +->  1 to many
const reg=/^[^m]an/ 
const rege=/fish(es)?$/
const regu=/^[6-9]\d{9}$/

const date=/^([012][1-9]||3[01])-([0][1-9]||1[0-2])-(\d{4})$/
console.log(regx.test("cat eatsd fish"));
console.log(regx.test("bat eat fishes"));
console.log(regx.test("0at eat wheat"));
console.log(reg.test("man"));
console.log(reg.test("van"));
console.log(reg.test("tan"));
console.log(rege.test("cat eatsd fish"));
console.log(rege.test("bat eat fishes"));
console.log(rege.test("0at eat wheat"));
console.log(regu.test("9234567890"));

console.log(date.test("01-01-2999"));