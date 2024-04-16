"use client";
import React,{useState,useEffect} from "react";
import Link from "next/link";

type Props = {};

const Page: React.FC<Props> = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://intquo-server.onrender.com/interview")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }, []);

    return(
        <div className="mt-20">  
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                <Link href="/interview/add">
                    <p>Add Interview</p>
                </Link>
                <ul>
                    {data.map((item:any) => (
                        <li key={item.id}>
                            <Link href={`/interview/${item.id}`}>
                                <p>{item.job_role} {item.company} {item.college}</p>
                                <a>Read Interview</a>
                            </Link>
                        </li>

                    ))}
                </ul>
                </>
            )}
        </div>
    )
}

export default Page;