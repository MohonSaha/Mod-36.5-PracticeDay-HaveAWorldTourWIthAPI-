

const docHeads = {
                    name: "Mohon saha",
                    id: 101,
                    designetion: "DocPeon",
                    address: "Magura, Khulna, BD",
                    money: 10000,
                    isEmployee:true,
                    skill : {
                        computer: "web development",
                        language: "Bangla & English",
                        speaking: "public speaking"
                    },
                    activeDays: [03, 05, 07, 09],

                    moneyManagement: function(rent, car, others){
                        this.money = this.money - rent - car - others;
                        return this.money;
                    }                 
}

const moneyHisab = docHeads.moneyManagement(2000, 1000, 2000);
// console.log(moneyHisab);
// console.log(docHeads.activeDays[1]);

const MohonSaha = `
                    My name is ${docHeads.name} Krishna. My Computer skill is ${docHeads.skill.computer}. My language skill is ${docHeads.skill.language}. My working days of 1st weak is ${docHeads.activeDays[2]}. My current Balance is ${moneyHisab}.
`;

console.log(MohonSaha);

// arrow function with no parameter 
const noParameter = () => 89;
// console.log(noParameter);

// arrow function with single parameter
const divided = (mum1) => mum1 / 7 ;
const result = divided(35);
// console.log(result);

// arrow function with two parameters

const twoParameter = (num1, num2) =>{
    const add = num1 + num2 ;
    const divided = add / 2;
    return divided;
}
const result2 = twoParameter(8, 2);
// console.log(result2);


const twoParameters = (num1, num2) =>{
    const add = num1 + 7;
    const add2 = num2 + 7;
    const add3 = add + add2;
    return add3;
}
const result3 = twoParameters(3, 3);
// console.log(result3);

const serialNo = [7, 14, 21, 20, 42];
const result4 = serialNo.map(serial => serial/7);
// console.log(result4);
const result6 = serialNo.filter(num => (num%7 == 0));
// console.log(result6);

// const result5 = serialNo.forEach(element => {
//     if(element > 30){
//         console.log("great");
//     }
//     else{
//         console.log("please enter right value");
//     }
// });




