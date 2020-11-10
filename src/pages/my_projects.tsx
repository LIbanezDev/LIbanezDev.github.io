import React from 'react';
import {GetStaticProps} from "next";
import {initializeApollo} from "../lib/apolloClient";
import {MeDocument, MeQuery} from "../generated/graphql";

const MyProjects = ({viewer}: MeQuery) => {

    return (
        <div>
            <pre> {JSON.stringify(viewer, null, 4)} </pre>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: MeDocument
    })
    return {
        props: {
            viewer: apolloClient.cache.extract()
        },
        revalidate: 1
    }
}

export default MyProjects;
