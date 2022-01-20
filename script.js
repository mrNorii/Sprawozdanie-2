window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-inputs");
    const input = document.querySelector("#new-task-text");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (test) => {
        test.preventDefault();

        const task = input.value;

        if(!task){
            alert("Fill out the task!")
        }
    })
})