import Header from "@/components/Header";
import Tempalte from "@/components/Tempalte";
import Title from "@/components/Title";
import { NextPage } from "next";
const Skil:NextPage = () => {
  const skills:string[]=[
    "C",
    "C++",
    "Javascript",
    "php",
    "python"
  ];
  return (
    <>
    <Title
      title="スキル"
      detail="私が持っているスキルのページです。"
    />
    <Header
      home={true}
    />
    <Tempalte
      title="スキル"
    >
      {skills.map((item:string,index:number)=>(
        <li 
          key={index}
          style={{
            fontSize:"20px",
            marginTop:"20px"
          }}
        >
          {item}
        </li>
      ))}
    </Tempalte>
    </>
  );
}

export default Skil;