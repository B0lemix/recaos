/* eslint-disable react/prop-types */
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

const List = ({ dataList, toggleComplete, deleteToDo, editToDo,inputElement }) => {
   const style = {
      li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize text-2xl font-[Caveat]',
      liCompleted: 'flex justify-between bg-slate-400 p-4 my-2 capitalize',
      row: 'flex group',
      text: ' ml-2 cursor-pointer transform  transition duration-200 hover:scale-110 ',
      textCompleted:
         'ml-2 cursor-pointer  transition-all text-lg decoration-red-500/60 decoration-4 duration-300 ease-out',
      button: ' cursor-pointer flex items-center',
   };

   return (
      <li className={dataList.completed ? style.liCompleted : style.li}>
         <div className={style.row}>
            <input
               onChange={() => toggleComplete(dataList)}
               type="checkbox"
               checked={dataList.completed ? true : false}
            />
            <p
               onClick={() => toggleComplete(dataList)}
               className={dataList.completed ? style.textCompleted : style.text}
            >
               {dataList.text}
            </p>
         </div>
         <div className="flex gap-10 mr-10">
            <button onClick={() => {editToDo(dataList);inputElement.current.focus()}}>
               <FaRegEdit className="transform transition duration-200 hover:scale-125" />
            </button>
            <button onClick={() => deleteToDo(dataList.id)}>
               <FaRegTrashAlt className="transform transition duration-200 hover:scale-125" />
            </button>
         </div>
      </li>
   );
};

export default List;
