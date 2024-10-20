"use client"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
export function Control() {

    const router = useRouter();

    const params = useParams();
    const id = params.id;
    return (
        <ul>
            <li><Link href="/create">create</Link></li>
            {id ? <>
                <li><Link href={`/update/${id}`}>update</Link></li>
                <li><input type="button" value="delete" onClick={() => {
                    const options = { method: "DELETE" }
                    fetch(`http://localhost:9999/topics/${id}`, options)
                        .then(response => response.json()).then(result => {
                            router.push("/");
                            router.refresh();
                        })
                }} /></li>
            </> : null}

        </ul>
    )
}