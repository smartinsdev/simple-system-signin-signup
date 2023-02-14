import { LayoutForm } from "@/components/LayoutForm";
import { Title } from "@/components/ui/Title";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <LayoutForm>
      <Title>User Authenticate</Title>
      <button
        onClick={() => signOut()}
        className="text-slate-100 px-7 py-3 uppercase tracking-wide outline-none border-none bg-gradient-to-r from-green-900 to-green-600 bg-[length:300%] bg-[0%] hover:bg-[100%] transition-all duration-700 mt-2 rounded-md"
      >
        sign out
      </button>
    </LayoutForm>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/account/login",
      },
    };
  }
  return {
    props: {},
  };
}
