import { Icon, TextField } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import { useState } from "react";
import List from '@mui/material/List';
import Item from "./Item";


function TodoListMaterial() {

    const [value, setValue] = useState('');
    const [list, setList] = useState([{id: 1, value:'Первая ЗАпись'}, {id:2, value: 'Вторая запись'}]);
    const [count, setCount] = useState(3);


    const updateValue = (e) => {
         setValue(e.target.value)
    };

    const increment = () => {setCount(prevCount => prevCount + 1)}

    const updateList = () => {
         if (value.trim() === '') {
            setValue('')
            return;
         }
         increment()
         const newList = [...list, {id:count, value}]
         setList(newList)
         setValue('')
    };

    const removeItem = (id) => {
         setList(list.filter((item) => item.id !== id))
    };


    return ( 
    <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Monomakh&display=swap" rel="stylesheet"/>

        <TextField value={value} onChange={updateValue} sx={{backgroundColor: green[200], m: '45px', width: '211px'}} label="Enter your text" color="info" focused variant="filled" />

        <Icon sx={{ color: pink[500]}} onClick={updateList}>write circle</Icon>
        <List>
            <>
            {list.map(item => <Item key={item.id} id={item.id} text={item.value} fns={() => removeItem(item.id)} />)}
            </>
        </List>
    </div> 
    );
}

export default TodoListMaterial;