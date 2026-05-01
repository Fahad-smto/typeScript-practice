const frnd = ['lalu','kolu','molu']        // length = 3
const frnd2 = ['bolo','mulo','tulu']       // length = 3
const frnd3 = ['dholu','alo','jolu']       // length = 3

const conbine = frnd.push(...frnd2)        
// frnd.push এ frnd2 এর 3 টি এলিমেন্ট যোগ হলে frnd এর length হবে 3+3 = 6
// তাই conbine = 6

const conbine2 = frnd2.push(...frnd3)      
// frnd2.push এ frnd3 এর 3 টি এলিমেন্ট যোগ হলে frnd2 এর length হবে 3+3 = 6
// তাই conbine2 = 6

console.log(conbine)       // 6 
console.log(conbine2)      // 6