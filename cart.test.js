let cart = require('./cart.js');
let cars = require('./data/cars.js');

describe('Cart Properties:', () => {
    test('cart should be an empty array', () => {
        expect(cart.cart.length).toEqual(0);
        expect(Array.isArray(cart.cart)).toEqual(true);
    });

    test('total property should be 0', () => {
        expect(cart.total).toEqual(0);
    });


});

describe('Cart Methods:', () => {
    afterEach(function() {
        cart.cart = [];
        cart.total = 0;
    });
    test('addToCart should add a car to the cart.cart', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    });
    test('addToCart should increase the total each time', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        
        expect(cart.total).toEqual(cars[0].price + cars[1].price);
    });
    test('removeFromCart should decrease the length of the cart.cart', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[2]);
    });
    test('removeFromCart should decrease the total', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(1, cars[1].price);

        expect(cart.total).toEqual(cars[0].price + cars[2].price);
    });
    test('checkout should create a cart length and total of 0', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);
        cart.addToCart(cars[2]);

        cart.checkout();

        expect(cart.cart.length).toEqual(0);
        expect(cart.total).toEqual(0);
    });


});