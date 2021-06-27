const taskContainer=document.querySelector(".task_container");

const saveChanges = () => {
   const taskdata ={
    id:`${Date.now()}`,
    Imageurl: document.getElementById("imageurl").value,
    Tasktitle: document.getElementById("tasktitle").value,
    Tasktype: document.getElementById("tasktype").value,
    Taskdescription: document.getElementById("taskdescription").value,
   };
   console.log(taskdata);
   const newcard=` <div class="col-md-6 mb-5 col-lg-4 "id=${taskdata.id}>
   <div class="card text-center">
       <div class="card-header d-flex justify-content-end  gap-3 ">
           <button type="button" class="btn btn-danger  "><i class="fas fa-trash"></i></button>
           <button type="button" class="btn btn-success "><i class="fas fa-edit"></i></i></button>
       </div><img src=${taskdata.Imageurl} class="card-img-top" alt="...">
       <div><h5 class="card_title mt-1" >${taskdata.Tasktitle}</h5></div>
       <div class="card-body">
         <p class="card-text">${taskdata.Taskdescription}</p>
         <a href="#" class="btn btn-primary">${taskdata.Tasktype}</a>
       </div>
     </div>  `

     taskContainer.insertAdjacentHTML("beforeend",newcard);
};

