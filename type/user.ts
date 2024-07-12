import { Image } from "./image";

export type SocialLinks = {
    facebook: string;
    linkedin: string;
    github: string;
}

export type User = {
    _id: string;
    fullName: string;
    role: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    resumeURL: string;
    socialLinks: SocialLinks;
    profileImage: Image;
    secondaryImage: Image;
    city: string;
    country: string;
    experience: string;
    headline: string;
    quote: string;
    quoteBy: string;
}