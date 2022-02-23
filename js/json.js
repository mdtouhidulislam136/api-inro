//JSON

const user = {id: 11, name:'Gorib Amir', job: 'actor'};


const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop = {
    name: 'Mahmud',
    address: 'Vainamoisenkatu 11',
    profit: 15000,
    owner: {
        name: 'Mahmud',
        love: 'someone'

    },
    products: ['laptop', 'mobile', 'two bichi'],
    isExpensive: true
}

console.log(shop);
// json format created
const shopStringified = JSON.stringify(shop);

console.log(shopStringified);

// converted json to normal object using parse
const converted = JSON.parse(shopStringified);
console.log(converted);
