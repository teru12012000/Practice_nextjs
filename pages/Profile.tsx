import Header from '@/components/Header';
import Tempalte from '@/components/Tempalte';
import Title from '@/components/Title';
export type profiledeta={
  question:string;
  answer:string;
}
const Profile = () => {
  const deta:profiledeta[]=[
    {
      question:"名前",
      answer:"TERUSI",
    },{
      question:"誕生日",
      answer:"2000/12/1"
    },{
      question:"好きな食べ物",
      answer:"焼肉、ラーメン"
    }
  ]
  return (
    <>
      <Title 
        title={'プロフィール'}
        detail={'これはプロフィールのページです。'}
      />
      <Header
        home={true}
      />
      <Tempalte
        title="プロフィール"
      >
      {deta.map((item:profiledeta,index:number)=>(
        <li 
          key={index}
          style={{
            fontSize:"20px",
            marginTop:"20px"
          }}
        >
          {item.question}：<span>{item.answer}</span>
        </li>
      ))}
    </Tempalte>
    </>
  );
}

export default Profile;