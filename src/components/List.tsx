/* eslint-disable react/prop-types */
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';

const List = ({ dataList, toggleComplete, deleteToDo, editToDo }) => {
   const style = {
      li: 'flex justify-between bg-slate-200 p-4 my-2 capitalize text-2xl font-[Caveat]',
      liCompleted: 'flex justify-between bg-slate-400 p-4 my-2 capitalize',
      row: 'flex',
      text: 'ml-2 cursor-pointer transform  transition duration-200 hover:scale-125 ',
      textCompleted: ' ml-2 cursor-pointer line-through',
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
         <div className="flex gap-10">
            <button onClick={() => editToDo(dataList)}>
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
