import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "@/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            credentials?.email || "",
            credentials?.password || ""
          );

          console.log("res: ", res);

          if (res.user) {
            return res.user;
          }

          return null;
        } catch (error) {
          console.error("Error: ", error);
          throw new Error(error.message);
        }
      },
    }),
  ],
};

export { authOptions };
