interface User {
    id: number,
    name: string
}

export const resolvers = {
    Query: {
        users: (): User[] => {
            return [{id: 1, name:"Lucas 1"}, {id: 2, name: "Lucas 2"}]
        }
    }
}
