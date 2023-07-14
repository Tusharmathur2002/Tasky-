const taskContainer = document.querySelector(".task_container");

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

const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageUrl").value,
        taskTitle: document.getElementById("taskTitle").value,
        taskType: document.getElementById("taskType").value,
        taskDescription: document.getElementById("taskDescription").value,
    };
    const createNewCard = newCard(taskData);
    taskContainer.insertAdjacentHTML("beforeend", createNewCard);
}; 