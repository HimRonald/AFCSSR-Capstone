export const dynamic = "force-dynamic"; // defaults to auto
import { db } from "@/firebase/config";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
export async function GET(request: Request) {
  const first = query(collection(db, "members"),where("sex", "==", "F"), where("occupation", "==", "Computer Programmer"), limit(25));
  const documentSnapshots = await getDocs(first);
  let data:any = [];
  documentSnapshots.forEach((item) => data.push(item.data()));
  return new Response(JSON.stringify(data));
}
