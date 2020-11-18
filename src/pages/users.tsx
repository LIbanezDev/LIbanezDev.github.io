import React from 'react';
import {GetStaticProps} from "next";
import {GetMyUsersDocument} from "../generated/graphql";
import {InitialApolloState, initializeApollo} from "../lib/apolloClient";
import Layout from "../components/Layout";
import UsersList from "../components/UsersList";

const Users = () => {
    return (
        <Layout>
            <UsersList/>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
    const apolloClient = initializeApollo()
    await apolloClient.query({
        query: GetMyUsersDocument
    })
    const cache = apolloClient.cache.extract()
    return {
        props: {
            initialApolloState: cache
        },
        revalidate: 1
    }
}

export default Users;
