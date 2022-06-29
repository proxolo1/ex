let myModule = require('./function')
module.exports = class Customer {
    constructor() {
        this.id;
        this.name;
        this.age;
        this.orderArr = new Array();
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    setOrder(orderProduct) {
        let order = new Order();
        order.id = myModule.randomNumber();
        console.log(order.id);
        order.time = myModule.dateNow();
        order.setProduct(orderProduct);
        // orderArr.push(this.order);
        this.orderArr.push(order)
    }
    getOrderId() {
        this.orderArr.forEach(value => {
            return value.id;
        })
    }
    deleteProduct(productName) {
        this.orderArr.forEach(data => {
            if (data.getProductName().find(value => {
                return value === productName;
            })) {
                return data.deleteProduct(productName);
            }
        })

    }
    modifyProduct(productName, updatedName) {
        this.orderArr.forEach(data => {
            if (data.getProductName().find(value => {
                return value === productName;
            })) {
                // this.order.modifyProduct(productName, updatedName);
                data.modifyProduct(productName, updatedName);
            }
        })

    }
}
class Order {
    constructor() {
        this.id;
        this.time;
        this.products = new Product();
    }
    setProduct(productName) {
        this.id = myModule.randomNumber();
        this.products.setProductName(productName);
    }
    deleteProduct(productName) {
        return this.products.deleteProduct(productName);
    }
    modifyProduct(productName, updatedName) {
        this.products.modifyProduct(productName, updatedName);
    }
    getProductName() {
        return this.products.productName;
    }
}
class Product {
    constructor() {
        this.productName = new Array();
    }
    setProductName(productName) {
        this.productName = productName.split(',');
    }
    deleteProduct(productName) {
        this.productName.forEach(value => {
            if (productName === value) {
                let index = this.productName.indexOf(value);
                this.productName.splice(index, 1);
                console.log("worked")
                return true;
            }
            return false;
        })
    }
    modifyProduct(productName, updatedName) {
        this.productName.forEach(value => {
            if (productName === value) {
                let index = this.productName.indexOf(value);
                this.productName[index] = updatedName;
                return true;
            }
            return false;
        })
    }
}
class Promotion {

}