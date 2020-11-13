import React from 'react';
import {GetStaticProps} from "next";
import Link from "next/link";

interface GithubUser {
    viewer: {
        login: string,
        avatarUrl: string,
        bio: string,
        bioHTML: string,
        repositories: {
            nodes: Array<{
                name: string,
                descriptionHTML: string,
                createdAt: string
            }>
        }
    }
}

const Github = ({viewer}: { viewer: GithubUser }) => {
    return (
        <div className="animate__animated animate__fadeInTopLeft">
            <Link href={"/"}>
                <a style={{marginRight: 5}}>
                    Index
                </a>
            </Link>
            <Link href={"/users"}>
                Users
            </Link>
            <pre> {JSON.stringify(viewer, null, 4)} </pre>
        </div>
    );
};

export const getStaticProps: GetStaticProps<GithubUser> = async () => {
    const body = {
        query: "query {\n" +
            "    viewer {\n" +
            "        login\n" +
            "        avatarUrl\n" +
            "        bio\n" +
            "        bioHTML\n" +
            "        repositories(first: 100) {\n" +
            "            nodes {\n" +
            "                name\n" +
            "                descriptionHTML\n" +
            "                createdAt\n" +
            "            }\n" +
            "        }\n" +
            "\n" +
            "    }\n" +
            "}"
    }
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Authorization: "bearer " + process.env.PERSONAL_API_TOKEN
        },
        body: JSON.stringify(body)
    })
    const {data} = await res.json()
    return {
        props: {
            viewer: data.viewer
        },
        revalidate: 1
    }
}

export default Github;
