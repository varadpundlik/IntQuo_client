"use client"
import React,{useState,useEffect} from "react";
import { useRouter,usePathname } from "next/navigation";

type Props = {};

const Page: React.FC<Props> = () => {
    const [data, setData] = useState({company:"",college:"",conducted_on:"",job_role:"",compensation:0,status:"",result:"",Questions:[],User:{username:""}});
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        const id = pathname.split("/")[2];
        fetch(`https://intquo-server.onrender.com/interview/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data[0]);
                setData(data[0]);
                setLoading(false);
            });
    }, []);

    return(
        <div className="mt-20">  
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <p>{data.job_role} {data.company} {data.college}</p>
                    <p>{data.compensation}</p>
                    <p>{data.status}</p>
                    <p>{data.conducted_on}</p>
                    <p>{data.result}</p>
                    <p>{data.User.username}</p>
                    {data.Questions.map((question:any) => (
                        <div key={question.id}>
                            <p>{question.question}</p>
                            <p>{question.user_answer}</p>
                            <p>{question.ai_answer}</p>
                            <p>{question.topic}</p>
                            <p>{question.subtopic}</p>
                            <p>{question.difficulty}</p>
                        </div>))}
                </div>
            )}
        </div>
    )
}

export default Page;