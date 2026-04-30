const poorUser ={
    name:'lalu',
    balance:5,
    addBalance(value:number):number{
        const totalBalance =this.balance + value;
        return totalBalance;
    },
};

poorUser.addBalance(10000);
console.log(poorUser.addBalance(10000));