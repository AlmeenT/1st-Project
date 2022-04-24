
function toAbout(){
    var onAbout = document.querySelector('#about');
    onAbout.scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById('aboutText').onclick = toAbout;

function toShop(){
    var onShop = document.querySelector('#shop');
    onShop.scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById('shopText').onclick = toShop;

document.getElementById('shopNow').onclick = toShop;

function removeFrom1(){
    var product1Text = document.getElementById('addProduct1');
    if (product1Text.innerHTML === 'REMOVE FROM CART'){
        product1Text.innerHTML = 'ADD TO CART';

        product1Text.style.backgroundColor = '#ff9a3d';
        product1Text.style.left = '28%';
    } else {
    product1Text.innerHTML = 'REMOVE FROM CART';
    product1Text.style.backgroundColor = '#ffcd9e';
    product1Text.style.left = '28%';
    }

}
document.getElementById('addProduct1').onclick = removeFrom1;

function removeFrom2(){
    var product2Text = document.getElementById('addproduct2');
    if (product2Text.innerHTML === 'REMOVE FROM CART'){
        product2Text.innerHTML = 'ADD TO CART';

        product2Text.style.backgroundColor = '#ff9a3d';
        product2Text.style.left = '28%';
    } else {
    product2Text.innerHTML = 'REMOVE FROM CART';
    product2Text.style.backgroundColor = '#ffcd9e';
    product2Text.style.left = '28%';
    }

}
document.getElementById('addproduct2').onclick = removeFrom2;

function removeFrom3(){
    var product3Text = document.getElementById('addproduct3');
    if (product3Text.innerHTML === 'REMOVE FROM CART'){
        product3Text.innerHTML = 'ADD TO CART';

        product3Text.style.backgroundColor = '#ff9a3d';
        product3Text.style.left = '28%';
    } else {
    product3Text.innerHTML = 'REMOVE FROM CART';
    product3Text.style.backgroundColor = '#ffcd9e';
    product3Text.style.left = '28%';
    }

}
document.getElementById('addproduct3').onclick = removeFrom3;

function removeFrom4(){
    var product4Text = document.getElementById('addproduct4');
    if (product4Text.innerHTML === 'REMOVE FROM CART'){
        product4Text.innerHTML = 'ADD TO CART';

        product4Text.style.backgroundColor = '#ff9a3d';
        product4Text.style.left = '28%';
    } else {
    product4Text.innerHTML = 'REMOVE FROM CART';
    product4Text.style.backgroundColor = '#ffcd9e';
    product4Text.style.left = '28%';
    }

}
document.getElementById('addproduct4').onclick = removeFrom4;

function removeFrom5(){
    var product5Text = document.getElementById('addproduct5');
    if (product5Text.innerHTML === 'REMOVE FROM CART'){
        product5Text.innerHTML = 'ADD TO CART';

        product5Text.style.backgroundColor = '#ff9a3d';
        product5Text.style.left = '28%';
    } else {
    product5Text.innerHTML = 'REMOVE FROM CART';
    product5Text.style.backgroundColor = '#ffcd9e';
    product5Text.style.left = '28%';
    }

}
document.getElementById('addproduct5').onclick = removeFrom5;

function removeFrom6(){
    var product6Text = document.getElementById('addproduct6');
    if (product6Text.innerHTML === 'REMOVE FROM CART'){
        product6Text.innerHTML = 'ADD TO CART';

        product6Text.style.backgroundColor = '#ff9a3d';
        product6Text.style.left = '28%';
    } else {
    product6Text.innerHTML = 'REMOVE FROM CART';
    product6Text.style.backgroundColor = '#ffcd9e';
    product6Text.style.left = '28%';
    }

}
document.getElementById('addproduct6').onclick = removeFrom6;



var modal = document.getElementById('cartModal');
var modalButton = document.getElementById('cart');
var span = document.getElementsByClassName('close')[0];

modalButton.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

function continueShop() {
    modal.style.display = 'none';
    var onShop = document.querySelector('#shop');
    onShop.scrollIntoView({
        behavior: "smooth"
    });
    
}

document.getElementById('conShop').onclick = continueShop;

var shoppingCart = (function(){
    cart = [];

    function Item(sn,name,price,count){
        this.sn = sn;
        this.name = name;
        this.price = price;
        this.count = count;
    }

    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem('shoppingCart') != null) {
        loadCart();
    }

    var obj = {};

    obj.addItemToCart = function(sn, name, price, count){
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count ++;
                saveCart();
                return;
            }
        }

        var item = new Item(sn, name, price, count);
        cart.push(item);
        saveCart();
    }

    obj.setCountForItem = function(name, count) {
        for (var i in cart) {
            if (cart[i].name === name){
                cart[i].count = count;
                break;
            }
        }
    };

    obj.removeItemFromCart = function(name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count --;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    obj.removeItemFromCartAll = function(name) {
        for( var item in cart) {
            if (cart[item].name === name){
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCount = function() {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    obj.totalCart = function() {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }
    
    obj.listCart = function() {
        var cartCopy = [];
        for ( i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item){
                itemCopy[p] = item[p];
            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
})();

$('.tocart').onclick(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(1, name, price, 1);
    displayCart();
})

$('.tocart').onclick(function () {
    var btnContent = document.querySelectorAll('.tocart');
    for (c in btnContent) {
        btn = btnContent[c];
    }
    if (btn.innerHTML === 'REMOVE FROM CART'){

    }
})

function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = '';
    for (var i in cartArray) {
        output += '<tr>'
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     var name = $(this).data('name');
     var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  

var img1 = document.getElementById('image1');
var img2 = document.getElementById('image2');
var img3 = document.getElementById('image3');
var img4 = document.getElementById('image4');
var img5 = document.getElementById('image5');
var img6 = document.getElementById('image6');

img1.onmouseover = function(){
     var over1 = document.getElementsByClassName('overlay1')[0];
     over1.style.display = 'block';
}

img1.onmouseleave = function(){
    var over1 = document.getElementsByClassName('overlay1')[0];
    over1.style.display = 'none';
}

img2.onmouseover = function(){
    var over2 = document.getElementsByClassName('overlay2')[0];
    over2.style.display = 'block';
}

img2.onmouseleave = function(){
    var over2 = document.getElementsByClassName('overlay2')[0];
    over2.style.display = 'none';
}

img3.onmouseover = function(){
    var over3 = document.getElementsByClassName('overlay3')[0];
    over3.style.display = 'block';
}

img3.onmouseleave = function(){
    var over3 = document.getElementsByClassName('overlay3')[0];
    over3.style.display = 'none';
}

img4.onmouseover = function(){
    var over4 = document.getElementsByClassName('overlay4')[0];
    over4.style.display = 'block';
}

img4.onmouseleave = function(){
    var over4 = document.getElementsByClassName('overlay4')[0];
    over4.style.display = 'none';
}

img5.onmouseover = function(){
    var over5 = document.getElementsByClassName('overlay5')[0];
    over5.style.display = 'block';
}

img5.onmouseleave = function(){
    var over5 = document.getElementsByClassName('overlay5')[0];
    over5.style.display = 'none';
}

img6.onmouseover = function(){
    var over6 = document.getElementsByClassName('overlay6')[0];
    over6.style.display = 'block';
}

img6.onmouseleave = function(){
    var over6 = document.getElementsByClassName('overlay6')[0];
    over6.style.display = 'none';
}

var formName = document.getElementById('name');
var nameErr = document.getElementById('nameError');
var emailId = document.getElementById('email');
var emailErr = document.getElementById('emailError');

function NameValidation() {
    if (formName.value == ''){
        formName.style.borderColor = 'red';
        nameErr.innerHTML ='please enter your name';
        nameErr.style.color = 'red';
    } else {
        formName.style.borderColor = 'green';
    }
}

function emailValidation() {
    if (emailId.value == ''){
        emailId.style.borderColor = 'red';
        emailErr.innerHTML ='please enter your email';
        emailErr.style.color = 'red';
    } else if (!emailId.value.includes('@')){
        emailId.style.borderColor = 'red';
        emailErr.innerHTML ='invalid email';
        emailErr.style.color = 'red';
    } else {
        emailId.style.borderColor = 'green';
    }
}

formName.onblur = NameValidation;
emailId.onblur = emailValidation;