const taskContainer = document.querySelector(".task_container");
//Global store
const globalStore = [];
// card 1, card 2--> array

const newCard = ({ id, imageUrl, taskTitle, taskType, taskDescription }) =>
    `<div class="col-md-6 col-lg-4" id=${id}>
<section><div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-success"><i class="fa-sharp fa-solid fa-pencil"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
    </div>
    <img src=${imageUrl}
    class="card-img-top" 
    alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${taskTitle}</h5>
      <p class="card-text">${taskDescription}</p>
      <span class="badge bg-primary">${taskType}</span></h5>
    </div>
    <div class="card-footer text-body-secondary">
      <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>
</section>
</div>`;


const loadInitialTaskCards = () => {
  //access local storage
const getInitialData = localStorage.getItem("tasky");
if(!getInitialData) return;
  //convert string object to object
const { cards } = JSON.parse(getInitialData);
  //map around the array to generate HTML card and injict it to DOM
cards.map((cardObject) => {
  const createNewCard = newCard(cardObject);
  taskContainer.insertAdjacentHTML("beforeend", createNewCard);
  globalStore.push(cardObject);
});
}
const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("ImageUrl").value,
        taskTitle: document.getElementById("Tasktitle").value,
        taskType: document.getElementById("tasktype").value,
        taskDescription: document.getElementById("taskdescription").value,
    };
    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
    globalStore.push(taskData);
    console.log(globalStore);

    //API(Application Programming Interface)
    //localstorage-->interface-->programming


    localStorage.setItem("tasky",JSON.stringify({cards: globalStore}));
    //tasky--> is a keyto provide a unique to identify in local storage
    //setItem--> a function used to set items in local storage


}; 
