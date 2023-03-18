import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import { useNavigate}  from "react-router-dom";


const getIcon = (icon) => {
    switch (icon) {
        case "HOME":
            return <Home />
            break;

        case "Task":
            return <Home />
            break;

        case "Settings":
            return <Settings />
            break;

        default:  return <Home />
            break;
    }
}

const MenuListItems =({list})=>{

    const navigate = useNavigate();
    return(
        <List>
            {list.map(({text, path, icon}, index)=>(
                <ListItem key={index} button onClick={()=>{navigate(path)}}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text}>

                    </ListItemText>

                </ListItem>
            ))}
        </List>
    )
}

export default MenuListItems;