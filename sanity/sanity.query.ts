import { groq } from "next-sanity";
import client from "./sanity.client";
import { GetAllProjectParams, GetAllProjectResponse, Project } from "@/type/project";
import { LIMIT } from "@/static/generic";

export async function getHomeProfile(projection: string) {
  return client.fetch(
    groq`*[_type == "profile"][0]{
      ${projection}
    }`
  );
}

export async function getUserExperiences() {
  return client.fetch(
    groq`*[_type == "experience"] | order(_createdAt desc){
       _id,
      role,
      startDate,
      endDate,
      companyName
    }`
  );
}

export async function getAllSkill() {
  return client.fetch(
    groq`*[_type == "skill"] | order(_createdAt asc){
       _id,
      name,
      type,
      logo {alt, "image": asset->url},
    }`
  );
}

export async function getAllProjects({ page }: GetAllProjectParams) {
  const start = 0;
  const end = (page - 1) * LIMIT + LIMIT;

  try {
    const projects: Project[] = await client.fetch(
      groq`*[_type == "project"] | order(_createdAt desc)[${start}...${end}]{
         _id,
        name,
        category,
        logo {alt, "image": asset->url},
        url
      }`
    );
    const totalCount: number = await client.fetch('count(*[_type == "project"])');
    return { projects, totalCount }
  } catch (error) {
    throw new Error("Error while fetching project")
  }
}