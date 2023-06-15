BeardBoys

// page1
> List of products
url: https://dp-beardboys.onrender.com/products

>List of categories
url:https://dp-beardboys.onrender.com/categories

> products wrt to categories
(numbers can be anything from 1-5)
url:https://dp-beardboys.onrender.com/categories/1 

//page2
>Add user
data:{
    "first_name":"Ganesh",
    "last_name":"Rawal",
    "emailId":"ganesh@gmail.com",
    "mobileNo":876589943
}
url:https://dp-beardboys.onrender.com/addUser

>retrieve user profile
url:https://dp-beardboys.onrender.com/getUser/paresh@gmail.com

>products within price range
url:https://dp-beardboys.onrender.com/categories/1?lcost=400&hcost=1500

//Page3
> Details of Product
url:https://dp-beardboys.onrender.com/details/23


//Page4
> Details of order selected
data:{"id":[4,5,24]}
url:https://dp-beardboys.onrender.com/itemDetails

> Place Order
data:{
    "orderId":2,
    "name":"Garud",
    "email":"garud@gmail.com",
    "address":"Home 78",
    "phone":8955663421,
    "status":"Out for delivery"
}
url:https://dp-beardboys.onrender.com/placeOrder

// Page5
> List of all the orders
url:https://dp-beardboys.onrender.com/orders

>List orders according to user
url:https://dp-beardboys.onrender.com/orders?email=dhruv@gmail.com

> Update orders status
data:{
    "_id":"648ab907326e4d73ff4f6e5b",
    "status":"Order Dispatched"
}
url:https://dp-beardboys.onrender.com/updateOrder

> Delete Orders
data:{
    "_id":"648ab907326e4d73ff4f6e5b"
}
url:https://dp-beardboys.onrender.com/deleteOrder
