  //Load tasks from localstorage from page load
document.addEventListener('DOMContentLoaded', loadTasks);

    //Add Enter key support
document.getElementById('task-input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        addTask();
}
});

function addTask() {
    const taskInput=document.getElementById('taskInput');
    const taskText=taskInput.value.trim();

    if (taskText==='')
        return;
}

const taskList=document.getElementById('taskList');
const listItem=document.createElement('li');

//Task text span
const taskSpan=document.createElement('span');
taskSpan.textContent=taskText;
taskSpan.className='task-text';

//complete button
const completeBtn=document.createElement('button');
completeBtn.innerHTML='&#10003;';
completeBtn.className='complete-btn';
completeBtn.onclick=()=>{
    taskSpan.classList.toggle('completed');
    updateTaskCounter();
    saveTask();
};
//Edit button
const editBtn=document.createElement('button');
editBtn.innerHTML='&#998'; // pencil icon
editBtn.className='edit-btn';
editBtn.onclick=()=>{
    const newText=prompt('Edit your task:', taskSpan.textContent);
    if (newText !== null && newText.trim() !=='') {{
        taskSpan.textContent = newText;
        saveTask();
    }
};
//Remove button
const removeButton= document.createElement('button');
removeButton.textContent='Remove';
removeButton.className='remove-btn';
removeButton.onclick=()=>{
    taskList.removeChild(listItem);
    updateTaskCounter();
    saveTask();
};

//Append everything
listItem.appendChild(completeBtn);
listItem.appendChild(taskSpan);
listItem.appendChild(editBtn);
listItem.appendChild(removeButton);

taskList.appendChild(listItem);

taskInput.value='';
updateTaskCounter();
saveTask();
} 
function loadTask() {
    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    const tasklist=document.getElementById('tasklist');
    tasks.forEach(task => {
        const listItem=document.createElement('li'));
        const taskSpan=document.createElement('span');
        taskSpan.textContent=task.text;
        taskSpan.className='task-text';  
        if (taskSpan. completed) {
            taskSpan.classList.add('completed');
        }

        completeBtn.className='complete-btn';
        completeBtn.onclick=()=>{
            taskSpan.classList.toggle('completed');
            updateTaskCounter();
            saveTask();
        };

        const editBtn=document.createElement('button');
        editBtn.innerHTML='&#998';
        editBtn.className='edit-btn';
        const newText=prompt('edit your task'); {
            taskSpan.textContent=newText.trim();
            saveTask();
        };

    const removeButton = document.createElement('button');
     removeButton.textContent='Remove';
     removeButton.className='remove-btn';
     removeButton.onclick=()=>{
         taskList.removeChild(listItem);
         updateTaskCounter();
         saveTask();
     };
        listItem.appendChild(completeBtn);
        listItem.appendChild(taskSpan);
        listItem.appendChild(editBtn);
        listItem.appendChild(removeButton);

        tasklist.appendChild(listItem);
    
    updateTaskCounter();

function saveTask() {
    const tasklist= document.getElementById('tasklist');
    const task=[];

    tasklist.querySelectorAll('li').forEach(item => {
        const taskText=item.querySelector('.task-text').textContent;
        const completed=item.querySelector('.task-text').classList.contains('completed');
        task.push({text, completed});
    });

    localStorage.setItem('tasks', JSON.stringify(task));
 }
 function updateTaskCounter() {
    const tasklist=document.getElementById('tasklist');
    const tasks = tasklist .querySelectorAll('li');
    const completedTasks=tasklist.querySelectorAll('completed');

    const counterElement=document.getElementById('taskCounter');
    if (counterElement) {
        counterElement.textContent = `${tasks.length} task${tasks.length !== 1 ? 's' : ''}, ${completedTasks.length} completed`;
    }
 }
 function clearCompletedTasks() {
    const tasklist=document.getElementById('tasklist');
    const completedTasks=tasklist.querySelectorAll('.completed');

    completedTasks.forEach(task => {
        task.parentElement.removeChild(task);
    });
    saveTask();
}
};
