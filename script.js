window.addEventListener('load', () => {
    //Variables
    const form = document.querySelector("#new-task-inputs");
    const input = document.querySelector("#new-task-text");
    const list = document.querySelector("#tasks");

    //It works when is submit event (my add task)
    form.addEventListener('submit', (test) => {
        test.preventDefault(); //it stops from refreshing the page

        //value assignment
        const task = input.value;

        //its checks value, if its empty it will print an alert
        if(!task){
            alert("Fill out the task!");
        }
            
        //create element and add to class "task"
        const task_element = document.createElement("div");
        task_element.classList.add("task")

        //create element and add to class "content"
        const task_element_content = document.createElement("div");
        task_element_content.classList.add("content")

        task_element.appendChild(task_element_content);

        //Create element - input in class "text" with value task (text in input)
        const task_element_input = document.createElement("input");
        task_element_input.classList.add("text");
        task_element_input.value = task;

        task_element_content.appendChild(task_element_input)

        //create Buttons
        const task_element_buttons = document.createElement("div")
        task_element_buttons.classList.add("buttons")
        //Edit button
        const task_element_edit = document.createElement("button");
        task_element_edit.classList.add("edit")
        task_element_edit.innerText = "Edit";
        //Delete button
        const task_element_delete = document.createElement("button");
        task_element_delete.classList.add("delete")
        task_element_delete.innerText = "Delete";
        
        task_element_buttons.appendChild(task_element_edit);
        task_element_buttons.appendChild(task_element_delete);
        
        list.appendChild(task_element)



    })
})