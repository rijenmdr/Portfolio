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
    email: string;
    phoneNumber: string;
    resumeUrl: string;
    socialLinks: SocialLinks;
    profileImage: Image;
    city: string;
}