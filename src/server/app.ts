import {ApolloServer} from "apollo-server-micro";
import {resolvers} from "./resolvers";
import {schema} from "./schema";

export const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
    playground: {
        settings: {"editor.fontSize": 23}
    }
})







