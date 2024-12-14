import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '526b3d132c98d2753e36ca720e24a7a1c0e2814d', queries,  });
export default client;
  