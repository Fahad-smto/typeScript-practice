function add (num1:number,num2:string){
    return (num1+num2);
};

const result= add(2,"2")

console.log(result);


const addArrow = (num1:number,num2:number):number=>{
return (num1+num2)
}

const result1 = addArrow(4,4);

console.log(result1);


const user ={
    name : 'fahad',
    balance:0,
    addBalance(value:number):number{
        const totalBalance = this.balance+ value;
        return totalBalance;
    }
}
const addBalance1 =user.addBalance(10000000)

console.log(addBalance1);