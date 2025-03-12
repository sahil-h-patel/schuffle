import Task from '@components/Task'

function TaskList() {
    return (
        <ul className="list h-full flex bg-base-300 border-2 border-base-100 rounded-box shadow-md basis-1/5 p-0" tabIndex={0}>
            <li className="p-4 pb-2 text-lg underline">Tasks:</li>
            <Task name='PDM Quiz 1' priority='!!!'/>     
            <Task name='Concepts of Computer Systems Reading' priority='!'/>     
            <Task name='Wines of the World I Checklist' priority='!!'/>           
        </ul>
    );
}

export default TaskList;