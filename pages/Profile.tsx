import Header from '@/components/Header';
import Title from '@/components/Title';
import Head from 'next/head'
type skill={
  language:string;
  thought:string;
}
const Profile = () => {
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
        title={'プロフィール'}
        detail={'これはプロフィールのページです。'}
      />
      <Header/>
      <div className='conteiner text-center'>
        <h1>スキル</h1>
        <ul 
          style={{
            listStyle:"none"
          }}
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
        </ul>
      </div>
    </>
  );
}

export default Profile;