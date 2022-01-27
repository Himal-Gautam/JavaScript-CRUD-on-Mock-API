var url="https://61ecfbfff3011500174d226c.mockapi.io/users"

// Read the data
function getData(){
    fetch(url)
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error) => console.log(error));
}
getData();



//create the data with post
function createData(){
    let Data = {
        //id is auto generated
        name:"Himal",
        email:"himal@gmail.com"
    }

    fetch(url,{
        method:"POST",
        body:JSON.stringify(Data),
        headers:{
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
createData();



// update => http method is put
// i have to update the data with id 1
function updateData(){
    let Data = {
        name:"Manthan",
        email:"manthan@gmail.com"
    }

    fetch(url+"/1",{
        method:"PUT",
        body:JSON.stringify(Data),
        headers:{
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
}
updateData();

//delete =>http method is DELETE
//delete the data with id 1
function deleteData(){
    await fetch(url+"/1",{
        method:"DELETE",})
    .then((response) => response.json())
    .then((data)=>console.log(data))
    .catch((error) => console.log(error));
}

deleteData();
