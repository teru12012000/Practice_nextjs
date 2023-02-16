import { IconButton } from "@mui/material";
import Link from "next/link";
import {FC} from "react"
import HomeIcon from '@mui/icons-material/Home';
type Props={
  home:boolean;
}
const Header:FC<Props>= ({home}) => {
  return (
    <>
      <header
        style={{
          backgroundColor:"blue",
          color:"white",
          padding:"10px"
        }}
      >
        <h1>TERUSHI</h1>
      </header>
      <div
        style={{margin:"15px"}}
      >
        {home?(
          <Link
            href="/"
          >
            <IconButton aria-label="home">
              <HomeIcon sx={{color:"blue",fontSize:55}} />
            </IconButton>
          </Link>
        ):null}
      </div>
    </>
  );
}

export default Header;