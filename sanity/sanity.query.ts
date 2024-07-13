import { groq } from "next-sanity";
import client from "./sanity.client";

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