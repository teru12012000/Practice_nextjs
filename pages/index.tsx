import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Link from 'next/link'
import { Button } from '@mui/material'
type linkdeta={
  linkname:string;
  pagename:string;
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const mypages:linkdeta[]=[
    {
      linkname:"/Profile",
      pagename:"プロフィール",
    },
    {
      linkname:"/Skil",
      pagename:"スキル",
    }
  ]
  return (
    <>
      <Head>
        <title>自己紹介サイト</title>
        <meta name="description" content="これは自己紹介サイトです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        home={false}
      />
      <div className='container text-center'>
        <h1>Hello</h1>
        <ul style={{padding:"0"}}>
          {mypages.map((item:linkdeta,index:number)=>(
            <li key={index} style={{listStyle:"none",marginTop:"10px"}}>
              <Link
                href={item.linkname}
              >
                <Button variant="contained">
                  {item.pagename}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
