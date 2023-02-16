import { profiledeta } from "@/pages/Profile";
import { FC, ReactNode } from "react";

type Props={
  title:string;
  children:ReactNode;
}
const Tempalte:FC<Props> = ({title,children}) => {
  return (
    <div className='conteiner text-center'>
        <h1>{title}</h1>
        <ul 
          style={{
            listStyle:"none",
            padding:0
          }}
        >
          {children}
        </ul>
      </div>
  );
}

export default Tempalte;