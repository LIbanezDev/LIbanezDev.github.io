import React from 'react';
import Link from "next/link";
import {GetStaticProps} from "next";
import {initializeApollo} from "../lib/apolloClient";
import {GetTrendingGifsDocument, useGetTrendingGifsQuery} from "../generated/graphql";
import {NormalizedCacheObject} from "@apollo/client";

export interface InitialApolloState {
    initialApolloState: NormalizedCacheObject
}

const Index = () => {
    const {data} = useGetTrendingGifsQuery()
    return (
        <div>
            <Link href={"/users"}>
                See my app users
            </Link>
            <Link href={"/github"}>
                Github
            </Link>
            {data.trendingGifs.map(gif => {
                return <img src={gif.images.fixed_height.url} alt={gif.id} key={gif.id}/>
            })
            }
        </div>
    );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: GetTrendingGifsDocument
    })
    return {
        props: {
            initialApolloState: apolloClient.cache.extract()
        },
        revalidate: 1
    }
}

export default Index;
