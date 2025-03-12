import { MdOutlineModeEditOutline } from "react-icons/md";
import 'App.css'

interface TaskProps {
    name: string;
    priority: string;
}

function Task({name, priority }: TaskProps) {
    return (
        <li className="list-row p-0">
            {/* <div><img className="size-10 rounded-box" src={src}/></div> */}
            <div>
                <div className="truncate">{name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{priority}</div>
            </div>
            <div className="flex ml-auto">
                <button className="btn btn-square btn-ghost">
                    <MdOutlineModeEditOutline/>
                </button>  
                <input type="checkbox" defaultChecked className="checkbox checkbox-primary checkbox-xs my-auto" />
            </div>
            </li>   
    );
}

export default Task;