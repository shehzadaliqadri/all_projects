// Assignment # 06
var itemList = ["biryani", "kofta", "pulao", "daal chawal", "cold drinks", "salad", "raita", "desert"]
document.write("Welcome to Shazzy Foods."+ "<br>" + "Please enter your order.")

var order = prompt("Enter your order here.")
for(var i = 0; i < itemList.length; i++){
    if(order===itemList[i]){
        document.write("<h1>"+itemList[i] + " is available "+ "</h1>")
        itemList.splice(itemList[i],1)
        document.write("you can also try these items that are in the list" + "<br>" + itemList)
        break;
    } else if(i+1 === itemList.length) {
        document.write("<br>" + "You don't enter item that is in the list." + "<br>" + "<br>" + "Order us with following items that are in the list" + "<br>" + itemList)
    }
}
