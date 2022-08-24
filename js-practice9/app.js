// program no 1
var foodItems = ["biryani","qorma","pizza","salad","karahi", "dal chana", "daal fry","kofta",]
document.write("welcome to our restaurent. Please enter your order.")

var search = prompt("Enter order here.")

for(var i = 0; i < foodItems.length; i++){
    if(search===foodItems[i]){
        document.write("<h1>" + (i+1) + ")" + foodItems[i] + " is available" + "</h1>");
        break;
    } else if(i+1 === foodItems.length){
        document.write("<h1>" + search + " is not available" + "</h1>")
    }
}

// programm no 2
var itemList = ["biryani", "kofta", "pulao", "daal chawal", "cold drinks", "salad", "raita", "desert"]
var order = prompt("enter your order item")

//logic no 1
for(var i = 0; i < itemList.length; i++){
    if(order===itemList[i]){
        document.write("<h1>"+itemList[i] + " is available "+ "</h1>")
        itemList.splice(itemList[i],1)
        // var newList = itemList
        document.write("you can also try these items that are in the list" + "<br>" + itemList)
        break;
    } else if(i+1 === itemList.length) {
        document.write("you don't enter item that is in the list." + "<br>" + "Order us with following items that are in the list" + "<br>" + itemList)
    }
}

//logic no 2
index = itemList.indexOf(order)
if(index !== -1){
    document.write(itemList[index] + "is available " )
} else{
    document.write("nahi mila")
}



var chiefName = "My name is ghous"
chiefName = chiefName.slice(0,chiefName.indexOf("ghous")) + "Shehzad"
console.log(chiefName) // return "My name is Shehzad" updated my name
