import { useState, useEffect } from 'react';
import './App.css';
import { AiOutlinePlus } from 'react-icons/ai';
import List from 'components/List';
import db from './firebase';
import {
   query,
   collection,
   onSnapshot,
   updateDoc,
   doc,
   addDoc,
   deleteDoc,
} from 'firebase/firestore';

const style = {
   bg: 'h-screen w-screen p-4 bg-gradient-to-r from-[#b1cab2] to-[#baed8e] ',
   img: 'object-cover h-32 w-full rounded-lg  ',
   container: 'bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-2xl p-4 font-semibold',
   heading: 'text-3xl font-bold text-center text-gray-800 p-2',
   form: 'flex justify-between ',
   input: 'border p-2 w-full text-xl shadow-md',
   button: 'border p-4 ml-2 bg-[#776b53] text-slate-100 hover:bg-[#8a8a72]',
   count: 'text-center p-2',
};

function App() {
   const [data, setData] = useState([]);
   const [input, setInput] = useState('');

   //CREATE TODO

   const createDoc = async (e) => {
      e.preventDefault();
      input === '' ? alert('Entrada vacía') : null;

      await addDoc(collection(db, 'todos'), {
         text: input,
         completed: false,
      });

      setInput('');
   };

   //READ TODO

   useEffect(() => {
      const q = query(collection(db, 'todos'));
      const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
         const todosArr = [];
         QuerySnapshot.forEach((doc) => {
            todosArr.push({ ...doc.data(), id: doc.id });
         });
         setData(todosArr);
      });
      return () => unsubscribe();
   }, []);

   //UPDATE TODO

   const toggleComplete = async (data) => {
      await updateDoc(doc(db, 'todos', data.id), {
         completed: !data.completed,
      });
   };

   //DELETE TODO

   const deleteToDo = async (id) => {
      await deleteDoc(doc(db, 'todos', id));
   };

   return (
      <div className={style.bg}>
         <div className={style.container}>
            <h3 className={style.heading}>
               <img className={style.img} src="/logo.svg" alt="logo"></img>{' '}
            </h3>
            <form onSubmit={createDoc} className={style.form}>
               <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={style.input}
                  type="text"
                  placeholder="Añadir recao"
               />
               <button className={style.button}>
                  <AiOutlinePlus size={30} />
               </button>
            </form>

            <ul>
               {data.map((element, index) => (
                  <List
                     key={index}
                     dataList={element}
                     toggleComplete={toggleComplete}
                     deleteToDo={deleteToDo}
                  />
               ))}
            </ul>

            {data.length < 1 ? null : (
               <p className={style.count}>{`Te quedan ${
                  data.filter((pendientes) => pendientes.completed === false).length
               } recaos pendientes`}</p>
            )}
         </div>
      </div>
   );
}

export default App;