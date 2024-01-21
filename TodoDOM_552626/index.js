let my_form=document.getElementById('my_form');
let inp1=document.getElementById('task');
let inp2=document.getElementById('priority');
// let alltask=[]
// console.log(form)
my_form.addEventListener('submit',function(e){
e.preventDefault();
let data={
  task:inp1.value,
  priority: inp2.value
};
displaydata(data)
inp1.value = ""
inp2.value = ""
})


function displaydata(data){
  let tbody = document.getElementById("data");
  
  let tr = document.createElement('tr');

  let td1 = document.createElement('td');
  td1.innerText = data.task

  let td2 = document.createElement('td');
  td2.innerText = data.priority

  let td3  =document.createElement('td')
  td3.innerText = "Fav"

  if(data.priority == "High"){
    tr.style.backgroundColor = "red"
  }else{
    tr.style.backgroundColor = "green"
  }
  
  tr.append(td1,td2, td3);
  tbody.append(tr)
  // console.log(tbody)
}









    

    





// function getformdata(e){
//     e.preventDefault()
//     // console.log("hello")
    
// }