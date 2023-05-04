import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import {
  Timestamp,
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <>
      <Head>
        <title>Facebook</title>
        <meta
          name="description"
          content="Facebook clone created by Ahmed Faroolle"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/Imfaroolle.png" />
      </Head>

      <div className="h-screen bg-gray-100 overflow-hidden">
        {/* header */}
        <Header session={session} />
        <main className="flex">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed posts={posts} />
          {/* widgets */}
          <Widgets />
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const collectRefs = collection(db, "posts");
  const q = query(collectRefs, orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
