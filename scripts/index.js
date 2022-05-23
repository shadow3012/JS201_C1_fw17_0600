//store the products array in localstorage as "products"
let products = JSON.parse(localStorage.getItem("products"))||[]
function Product(type,des,price,image){
    this.type = type
    this.desc = des
    this.price = price
    this.image = image

}
let target = document.getElementById("products")
document.getElementById("add_product").addEventListener("click",addProduct)
function addProduct(){
    event.preventDefault()
    
    let type = target.type.value
    let desc = target.desc.value
    let price = target.price.value
    let image = target.image.value
    let p = new Product(type,desc,price,image)
    products.push(p)
    target.type.value=null
    target.desc.value=null
    target.price.value=null
    target.image.value=null
    localStorage.setItem("products",JSON.stringify(products))
    
}
document.getElementById("show_products").addEventListener("click",()=>{
    window.location.href = "inventory.html"
})
