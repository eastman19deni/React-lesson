import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { green } from "@mui/material/colors";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Item({id,text,fns}) {
    return ( 
        <ListItem sx={{ width: '400px'}}>
            <ListItemButton component="a" href="#" sx={{backgroundColor: green[600], cursor:'arrow'}}>
                <ListItemText primary={`${id}. ${text}`} />
                <DeleteForeverIcon onClick={fns} />
            </ListItemButton>
        </ListItem>        
     );
}

export default Item;