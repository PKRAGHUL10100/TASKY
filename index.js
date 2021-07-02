

const taskcontainer=document.querySelector(".task_container");

let globalStore=[];

const generateNewCard=(taskdata)=>`<div class="col-md-6 mb-5 col-lg-4 id=${taskdata.id}">
<div class="card text-center">
    <div class="card-header d-flex justify-content-end  gap-3 ">
        <button type="button" class="btn btn-danger" id=${taskdata.id} onclick="deleteCard.apply(this,arguments)"><i class="fas fa-trash"></i></button>
        <button type="button" class="btn btn-success "><i class="fas fa-edit"></i></i></button>
    </div><img src= ${taskdata.Imageurl} alt="...">
    <div><h5 class="card_title mt-1">${taskdata.Tasktitle}</h5></div>
    <div class="card-body">
      <p class="card-text">${taskdata.Taskdescription}</p>
      <a href="#" class="btn btn-primary" >${taskdata.Tasktype}</a>
    </div>
  </div> `;


  const loadInitialCardData=() =>{

    const  getCardData= localStorage.getItem("tasky");

    const {cards} =JSON.parse(getCardData);

    cards.map((cardObject)=>{
      
      taskcontainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject))

       globalStore.push(cardObject);
    })
  };

const saveChanges = () => {
  const taskdata ={
   id:`${Date.now()}`,
   Imageurl: document.getElementById("imageurl").value,
   Tasktitle: document.getElementById("tasktitle").value,
   Tasktype: document.getElementById("tasktype").value,
   Taskdescription: document.getElementById("taskdescription").value,
  };
  

  taskcontainer.insertAdjacentHTML("beforeend",generateNewCard(taskdata))

  globalStore.push(taskdata);

  localStorage.setItem("tasky", JSON.stringify ({cards:globalStore} ));
};


const deleteCard=(event)=>{
  event=window.event;

  const targetID=event.target.id;
  const tagname=event.target.tagName;

  globalStore=globalStore.filter((cardObject)=>cardObject.id!==targetID);

  localStorage.setItem("tasky", JSON.stringify ({cards:globalStore} ));

  if(tagname=="BUTTON"){
    return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode);  
  }else{
    return taskcontainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);  
  }

  //taskcontainer.removeChild(Document.getElementById(targetID));

};