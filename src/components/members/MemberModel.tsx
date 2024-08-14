import { FieldValue } from "react-hook-form";
import { Timestamp } from "firebase/firestore";

export type Business = {
  name: string;
  description: string;
  type: string;
  email: string;
  address: string;
  phone: string;
  position: string;
};
export type Member = {
  //personal info
  id: string;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female";
  email: string;
  phone: string;
  title:string;

  // education info
  university: string;
  dateOfBirth: string;
  graduationDate: string;
  commencementDate: string;
  country: string;
  major:string;
  qualification: string;

  //professional info
  sector:"private" | "public";
  occupation: string;
  orgName: string;


  //business info
  business: Business[];
  businessTypes:string[];
  createdAt?:Timestamp | FieldValue<Timestamp>,
  updatedAt?:Timestamp | FieldValue<Timestamp>,
  status: "validated" | "temporary";
};