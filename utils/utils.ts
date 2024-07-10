export const splitFirstLastName = (name: string) => {
    const [firstName, lastName] = name?.split(" ");

    return { firstName, lastName }
}