// program no 1
var a = [[1,0,0,1],[0,1,1,0,0,0,0],[1,1,1,1],[0,0,0,0],[1,0,1,0,1,0,1]]
for (var i = 0; i< a.length; i++){
    for(j = 0; j < a[i].length; j++){
        document.write(a[i][j])
    }
    document.write("<br>")
}

// program no 2
var arr = [2,10,5,15,22,19,1];
var max = 0;
var min = arr[0];

// for(i=0; i <arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
//     if(min > arr[i]){
//         min = arr[i]
//     }
// }
for(i=0; i <arr.length; i++){
    if(arr[i] < arr[i+1]){
        max = arr[i]
    }
    if(arr[i] > arr[i+1]){
        min = arr[i]
    }
}

document.write("<br>" + "max number is " + max )
document.write("<br>" + "min number is " + min )

// program no 3
