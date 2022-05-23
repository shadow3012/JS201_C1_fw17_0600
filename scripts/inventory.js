let products = JSON.parse(localStorage.getItem("products"))
products.forEach(({type,desc,price,image},index)=>{
    let div = document.createElement('div')
    let img = document.createElement("img")
    img.style.width="100%"
    img.style.height="50%"
    img.src = image
    let Type = document.createElement("h4")
    Type.innerText = type
    let Desc = document.createElement("h4")
    Desc.innerText = desc
    let Price = document.createElement("h4")
    Price.innerText=price
    let button = document.createElement("button")
    button.innerText = "Remove Product"
    button.id = "remove_product"
    button.onclick = ()=>{
        removeProduct(index)
    }
    div.append(img,Type,Desc,Price,button)
    document.getElementById("all_products").append(div)

})
function removeProduct(index){
    products.splice(index,1)
    localStorage.setItem('products',JSON.stringify(products))
    window.location.reload()
}
document.getElementById("add_more_product").addEventListener("click",()=>{
    window.location.href = "index.html"
})