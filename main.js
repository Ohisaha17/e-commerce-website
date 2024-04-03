gsap.registerPlugin(ScrollTrigger, ScrollSmoother);// create the scrollSmoother before your scrollTriggers
ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});






let a = document.getElementById("input")

a.value = 1;

function func1() {

    if ((a.value == 1) <= (a.value == 10)) {

        a.value--;
    }
}

function func2() {

    if ((a.value == 1) >= (a.value == 10)) {

        a.value++;
    }
}


// // function scrlToContact() {
// //     let footer = document.querySelector(`#footer`)
// //         // let a = document.body.offsetHeight;
// //         window.scrollTo(footer)
// // }

function scrlToContact() {
    // Use setTimeout to allow DOM updates before scrolling
    let a = document.body.offsetHeight;
    setTimeout(() => {
        scrollTo(0, a);
    }, 0);
}





// Create an array to store the selected items
const selectedItems = [];

// Add a click event listener to all elements with the class "card"
document.querySelectorAll(".set").forEach(set => {
  set.addEventListener("click", () => {
    // Get the product details from the card element
    const product = {
      name: set.querySelector("#product-name").textContent,
      price: set.querySelector("#price").textContent,
      quantity: 1
    };

    // Add the product to the selected items array
    selectedItems.push(product);

    // Update the cart total
    updateCartTotal();
  });
});

// Update the cart total
function updateCartTotal() {
  // Calculate the total price of the selected items
  const total = selectedItems.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Update the cart total element
  document.querySelector("#addtocartbtn1").textContent = total;
}