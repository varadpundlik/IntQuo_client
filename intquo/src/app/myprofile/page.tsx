"use client"
import { useState,useEffect} from "react"

type Props = {};

const Page: React.FC<Props> = (props: Props) => {
    const [profile,setProfile] = useState({
      username: '',
      email: '',
      college: '',
      passout_year: '',
      current_org: '',
      first_name: '',
      last_name: ''
    })

    useEffect(() => {
      fetch('https://intquo-server.onrender.com/user/me',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }})
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProfile(data)
      })
    }
    ,[])
  
    return (
      <div className="mt-20">
        <h1>{profile.username}</h1>
        <h1>{profile.email}</h1>
        <h1>{profile.college}</h1>
        <h1>{profile.passout_year}</h1>
        <h1>{profile.current_org}</h1>
        <h1>{profile.first_name}</h1>
        <h1>{profile.last_name}</h1>
      </div>
    );
  };
  
  export default Page;
  