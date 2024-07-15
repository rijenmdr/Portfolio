"use server"
import { SendContactMessageParams } from "@/type/contact";
import client from "./sanity.client"

export const sendContactMessage = async (postData: SendContactMessageParams) => {
  try {
    await client.create({
      _type: 'contact',
      ...postData
    })

  } catch (error) {
    throw new Error('Error creating post');
  }
}