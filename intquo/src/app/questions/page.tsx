"use client";
import React,{useState,useEffect} from "react";

type Props = {};

interface Question {
    id: number;
    question: string;
    user_answer: string;
    ai_answer: string;
    topic: string;
    subtopic: string;
    difficulty: string;
    college: string;
    company: string;
  }
  
  const Page: React.FC = () => {
    const [data, setData] = useState<Question[]>([]); // Specify the type as Question[]
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        fetch("https://intquo-server.onrender.com/question")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }, []);


    const fetchByTopic = () => {
        fetch(`https://intquo-server.onrender.com/question/topic/${search}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.length === 0){
                    alert("No data found");
                    return;
                }
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }

    const fetchByCollege = () => {
        fetch(`https://intquo-server.onrender.com/question/college/${search}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.length === 0){
                    alert("No data found");
                    return;
                }
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }

    const fetchByCompany = () => {
        fetch(`https://intquo-server.onrender.com/question/company/${search}`)
            .then((response) => response.json())
            .then((data) => {
                if(data.length === 0){
                    alert("No data found");
                    return;
                }
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }

    return(
        <div className="mt-20">
            <div className="flex justify-center">
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"/>
            </div>
            <button onClick={fetchByTopic} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search By Topic</button>
            <button onClick={fetchByCollege} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search By College</button>
            <button onClick={fetchByCompany} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search By Company</button>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    {data.map((item:any) => (
                        <div key={item.id}>
                            <p>{item.question}</p>
                            <p>{item.user_answer}</p>
                            <p>{item.ai_answer}</p>
                            <p>{item.topic}</p>
                            <p>{item.subtopic}</p>
                            <p>{item.difficulty}</p>
                            <p>{item.college}</p>
                            <p>{item.company}</p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Page;