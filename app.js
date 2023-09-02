//Create an empty array
var bucketList = []

//var listContainer = document.getElementById("list-container")
var listContainer = document.querySelector("#list-container")

function addValues(){
    //taking input from input-field
    var value = document.getElementById("input-field").value
    //pushing it inside the array - bucketList
    bucketList.push(value)
    console.log("bucketList: ", bucketList);
    //display the List
    displayList()
}

function displayList(){

    console.log("From displayList Console :",bucketList);

    //clearing the previous list
    listContainer.innerHTML=""

    for(let i = 0;i<bucketList.length;i++){
        var li = document.createElement("li") //<li> </li>
        //inserting the array elements
        li.innerHTML = bucketList[i] + `<span><img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt=""</span>`;
        console.log("li: ", li);
        //inserting the <li> </li> tag crated into the ul #list-container
        listContainer.append(li)
    }
}

function reset(){
    //Empty the array
    bucketList=[]

   //After Empty just call the displaylist function to display it again
    displayList()
}

function remove(idx){

    //delete idx element from the array
    bucketList.splice(idx,1)

    //After displaying remove the list
    displayList()
}