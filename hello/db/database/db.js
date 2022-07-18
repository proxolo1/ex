export default class Db {
    constructor(connection) {
        this.connection = connection;
    }

    createTableProducts() {
        return this.connection.query("create table products (product_id int auto_increment primary key,product_name varchar(255),order_id int,foreign key (order_id) references orders(order_id))");
    }
    createTableCustomer() {
        return this.connection.query("create table customer (customer_id int auto_increment primary key,customer_name varchar(255),email varchar(255))");
    }
    createTableOrder() {
        return this.connection.query("create table orders (order_id int auto_increment primary key,order_name varchar(255),pincode int,customer_id int,foreign key (customer_id) references customer(customer_id))");
    }
    createTablePromotion() {
        return this.connection.query("create table promotion (promotion_id int auto_increment primary key,promotion_name varchar(255),value int,product_id int,foreign key (product_id) references products(product_id))");
    }
    insertCustomer(customer) {
        return this.connection.query(`insert into customer (customer_name,email) values ('${customer.name}',${customer.email})`, (err) => {
            if (err) { console.log(err); return err; };
            console.log("sucessfully inserted !!!!!!!");
        })
    }
    insertOrder(order) {
        return this.connection.query(`insert into orders (order_name,pincode,customer_id) values ('${order.name}',${order.pincode},${order.customerId})`, (err) => {
            if (err) {
                console.log(err);
                return err;
            }
            console.log("successfully inserted order values !!!!!!!!!!!!!!!!!!`")
        });
    }
    insertProduct(product) {
        return this.connection.query(`insert into products (product_name,order_id) values ('${product.name}',${product.quantity},${product.orderId})`);
    }
    insertPromotion(promotion) {
        return this.connection.query(`insert into promotion (promotion_name,value,product_id) values ('${promotion.name}',${promotion.value},${promotion.id})`);
    }
    updateCustomer(id, field, updateValue) {
        return this.connection.query(`update customer set ${field}='${updateValue}' where customer_id=${id}`)
    }
    deleteCustomer(id) {
        return this.connection.query(`delete from customer where id=${id}`);
    }
    deleteAllCustomer() {
        return this.connection.query(`delete from customers`);
    }
    endConnection() {
        return this.connection.end();
    }
}

let mysql = require('mysql')
let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'day 12',
        multipleStatements: true
    }
    );
    connection.connect();
    
    module.exports=new Db(connection);

// let db = new Db(connection)

// db.createTableCustomer();
// db.createTableOrder();
// db.createTableProducts();
// db.createTablePromotion();
// db.insertCustomer({ name: 'somebody', age: 22 + 3 });
// db.insertCustomer({ name: "albin", age: 26 });
// db.insertCustomer({ name: 'someone', age: 33 });
// console.log(db.insertOrder({ name: "order 1", pincode: 686604, customerId: 2 }));
// db.insertProduct({ name: "nord ce 2 lite", quantity: 2, orderId: 1 });
// db.insertPromotion({ name: "big billion sale", value: 50, id: 1 })
// db.updateCustomer(2, "age", 220)
// db.endConnection();