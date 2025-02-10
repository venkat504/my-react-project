import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: "Potato", price: 100.99, image: "Potato.webp" },
            { name: "Tomato", price: 50.87, image: "Tomato.jpeg" },
            { name: "Paneer", price: 500.65, image: "Paneer.jpeg" },
            { name: "Carrot", price: 200, image: "Carrot.jpeg" },
            { name: "Capsicum", price: 150, image: "Capsicum.jpeg" },
            { name: "Drumstick", price: 50, image: "Drumstick.jpeg" },
            { name: "Cabbage", price: 90, image: "Cabbage.jpeg" },
            { name: "Cauliflower", price: 120, image: "Cauliflower.jpeg" },
            { name: "Brinjal", price: 70, image: "Brinjal.jpeg" },
            { name: "Onion", price: 80, image: "Onion.jpeg" },
            { name: "Garlic", price: 200, image: "Garlic.jpeg" },
            { name: "Ginger", price: 250, image: "Ginger.jpeg" },
            { name: "Coriander", price: 30, image: "Coriander.jpeg" },
            { name: "Spinach", price: 40, image: "Spinach.jpeg" },
            { name: "Radish", price: 60, image: "Radish.jpeg" },
            { name: "Beetroot", price: 80, image: "Beetroot.jpeg" },
            { name: "Bitter Gourd", price: 110, image: "BitterGourd.jpeg" },
            { name: "Bottle Gourd", price: 90, image: "BottleGourd.jpeg" },
            { name: "Ridge Gourd", price: 100, image: "RidgeGourd.jpeg" },
            { name: "Pumpkin", price: 70, image: "Pumpkin.jpeg" },
            { name: "Sweet Corn", price: 120, image: "SweetCorn.jpeg" },
            { name: "Cucumber", price: 50, image: "Cucumber.jpeg" },
            { name: "Broccoli", price: 300, image: "Broccoli.jpeg" },
            { name: "Mushroom", price: 250, image: "Mushroom.jpeg" },
            { name: "Zucchini", price: 180, image: "Zucchini.jpeg" },
            { name: "Lettuce", price: 100, image: "Lettuce.jpeg" },
            { name: "Peas", price: 150, image: "Peas.jpeg" },
            { name: "Spring Onion", price: 90, image: "SpringOnion.jpeg" },
            { name: "Fenugreek", price: 80, image: "Fenugreek.jpeg" },
            { name: "Celery", price: 130, image: "Celery.jpeg" }
        ],
        nonVeg: [
            { name: "Chicken", price: 200, image: "Chicken.jpeg" },
            { name: "Mutton", price: 800, image: "Mutton.jpeg" },
            { name: "Prawns", price: 500, image: "Prawns.jpeg" },
            { name: "Egg", price: 100, image: "Egg.jpeg" },
            { name: "Fish", price: 150, image: "Fish.jpeg" },
            { name: "Chicken Drumstick", price: 150, image: "ChickenDrumstick.jpeg" },
            { name: "Crab", price: 600, image: "Crab.jpeg" },
            { name: "Lobster", price: 1200, image: "Lobster.jpeg" },
            { name: "Duck Meat", price: 700, image: "DuckMeat.jpeg" },
            { name: "Turkey", price: 900, image: "Turkey.jpeg" },
            { name: "Squid", price: 450, image: "Squid.jpeg" },
            { name: "Octopus", price: 1300, image: "Octopus.jpeg" },
            { name: "Salmon", price: 1000, image: "Salmon.jpeg" },
            { name: "Rohu Fish", price: 300, image: "RohuFish.jpeg" },
            { name: "Tilapia", price: 250, image: "Tilapia.jpeg" },
            { name: "Goat Meat", price: 850, image: "GoatMeat.jpeg" },
            { name: "Pork", price: 500, image: "Pork.jpeg" },
            { name: "Quail Meat", price: 400, image: "QuailMeat.jpeg" },
            { name: "Buffalo Meat", price: 700, image: "BuffaloMeat.jpeg" },
            { name: "Shrimp", price: 600, image: "Shrimp.jpeg" }
        ],
        milk: [
            { name: "Jercy", price: 400, image: "Jercy.jpeg" },
            { name: "Hatsun", price: 500, image: "Hatsun.jpeg" },
            { name: "Vishaaka", price: 700, image: "Vishaaka.jpeg" },
            { name: "Sangam", price: 200, image: "Sangam.jpeg" },
            { name: "SriKrishna", price: 1500, image: "SriKrishna.jpeg" }
        ]
    },
    reducers: {}
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.name === action.payload.name);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(item => item.name !== action.payload.name);
                }
            }
        },
        remove: (state, action) => {
            return state.filter(item => item.name !== action.payload.name);
        },
        clearCart: () => []
    }
});

const purchaseDetailsSlice = createSlice({
    name: 'purchaseDetails',
    initialState: [],
    reducers: {
        addPurchaseDetails: (state, action) => {
            state.push(action.payload);
        }
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: localStorage.getItem("username") ? true : false,
        user: localStorage.getItem("username") || " ",
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            localStorage.setItem("username", action.payload);
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = " ";
            localStorage.setItem("username", "");
        }
    }
});

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchaseDetails: purchaseDetailsSlice.reducer,
        auth: authSlice.reducer
    },
});

export const { addToCart, increment, decrement, remove, clearCart } = cartSlice.actions;
export const { addPurchaseDetails } = purchaseDetailsSlice.actions;
export const { login, logout } = authSlice.actions;

export default store;
