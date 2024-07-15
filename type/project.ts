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

export type GetAllProjectParams = {
    page: number;
}

export type GetAllProjectResponse = {
    projects: Project[];
    totalCount: number
}