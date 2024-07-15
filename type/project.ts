export type Project = {
    _id: string,
    name: string,
    category: string,
    logo: {
        alt: string;
        image: string;
    }
    url: string;
}