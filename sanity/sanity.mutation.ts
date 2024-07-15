"use server"
import { SendContactMessageParams } from "@/type/contact";
import client from "./sanity.client"

export const sendContactMessage = async (postData: SendContactMessageParams) => {
  try {
    console.log(postData)
    console.log(client.config())
    const newContact = await client.create({
      _type: 'contact',
      ...postData
    })

  } catch (error) {
    console.log(error);
    throw new Error('Error creating post');
  }
}