import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { getServerSession } from "next-auth";

import { authOptions } from "../api/auth/[...nextauth]";
import { useForm } from "@/hooks/useForm";
import { Input } from "@/components/ui/Input";
import { UnLock } from "@/components/svgs/UnLock";
import { Lock } from "@/components/svgs/Lock";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { LayoutForm } from "@/components/LayoutForm";
import { Title } from "@/components/ui/Title";
import { EmailIcon } from "@/components/svgs/EmailIcon";
import { useRouter } from "next/router";
import { Alert } from "@/components/ui/Alert";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const email = useForm("email");
  const password = useForm();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!email.validate() && !password.validate()) {
        return null;
      }
      signIn("credentials", {
        email: email.value,
        password: password.value,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutForm>
      {router.query.error === "Unauthorized" && (
        <Alert type="error" message="Ops! Email or Password invalid" />
      )}
      <div className="min-w-fit max-w-sm w-full bg-slate-800  shadow-xl p-4 space-y-6 rounded-md">
        <Title>Welcome</Title>
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
          <Input
            type="text"
            label="email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            error={email.error}
            Icon={<EmailIcon />}
          />
          <Input
            type={showPassword ? "text" : "password"}
            label="password"
            value={password.value}
            onChange={password.onChange}
            onBlur={password.onBlur}
            error={password.error}
            Icon={showPassword ? <UnLock /> : <Lock />}
            setShowPassword={() => setShowPassword(!showPassword)}
          />
          <Checkbox checked={checked} setChecked={setChecked}>
            <span className="text-sm text-slate-400">Remember me</span>
          </Checkbox>
          <Button label="sign in" loading={loading} />
        </form>
        <div className="space-y-1">
          <p className="text-xs text-slate-400 text-center">
            Forgot{" "}
            <a
              className="text-slate-200 border-b border-slate-700 hover:border-slate-300 transition-all duration-300"
              href="#"
            >
              Password?
            </a>
          </p>
          <p className="text-xs text-slate-400 text-center">
            Don't have an account?{" "}
            <Link
              className="text-slate-200 border-b border-slate-700 hover:border-slate-300 transition-all duration-300"
              href="/account/create"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </LayoutForm>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
}
