import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertDobInYears = (dateOfBirth: string) => {
  let dob = new Date(dateOfBirth);  
  //calculate month difference from current date in time  
  let month_diff = Date.now() - dob.getTime();  
    
  //convert the calculated difference in date format  
  let age_dt = new Date(month_diff);   
    
  //extract year from date      
  let year = age_dt.getUTCFullYear();  
    
  //now calculate the age of the user  
  let age = Math.abs(year - 1970); 

  return age;
}

export const splitFirstLastName = (name: string) => {
  const [firstName, lastName] = name?.split(" ");

  return { firstName, lastName }
}