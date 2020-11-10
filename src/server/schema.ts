import {gql} from "apollo-server-micro";

export const schema = gql`
    type User {
        id: ID!
        name: String!
    }
    
    type Query {
        users: [User]
    }
`
