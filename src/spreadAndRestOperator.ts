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



const frnd11 = ['lalu','kolu','molu']
const frnd22 = ['bolo','mulo','tulu']
const frnd33 = ['dholu','alo','jolu']

frnd11.push(...frnd22)
frnd22.push(...frnd33)

console.log(frnd11);      // আউটপুট: ['lalu','kolu','molu','bolo','mulo','tulu']
console.log(frnd22);     // আউটপুট: ['bolo','mulo','tulu','dholu','alo','jolu']
console.log(frnd33);     // আউটপুট: ['dholu','alo','jolu'] (অপরিবর্তিত)