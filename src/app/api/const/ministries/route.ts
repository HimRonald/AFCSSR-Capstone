export const dynamic = "force-dynamic"; // defaults to auto
import { MINISTRIES_LIST } from "@/constants/data";
import Fuse, { FuseSearchOptions } from "fuse.js";

const pickedMockdata = MINISTRIES_LIST.map(data => ({
  label: data,
  value: data,
}));

const options = {
  keys: ["label"],
  threshold: 0,
  ignoreLocation: true,
  location: 0,
  distance: 100,
};

const loadOptions:FuseSearchOptions = {
    limit: 5,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fuse = new Fuse(pickedMockdata, options);
  let pattern;
  let data: any;
  if ((pattern = searchParams.get("data"))) {
   data = fuse.search(pattern, loadOptions).map(c => ({...c.item}));
  }else{
   data = [];
  }

  return new Response(JSON.stringify(data));
}
