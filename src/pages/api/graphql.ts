import {apolloServer} from '../../server/app'

export const config = {
    api: {
        bodyParser: false,
    },
}

export default apolloServer.createHandler({
    path: '/api/graphql'
})

