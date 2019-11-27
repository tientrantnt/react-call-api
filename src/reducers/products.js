const productsInitialState = [
    {
        id:1,
        name:"Iphone",
        price: 500,
        status :true
    },
    {
        id:2,
        name:"SamSung",
        price:600,
        status :true
    },
    {
        id:3,
        name:"Oppo",
        price: 700,
        status :false
    }
];
const products = (state = productsInitialState, action) => {
    switch (action.type) {      
        default:
            return [...state]
    }
}

export default products;