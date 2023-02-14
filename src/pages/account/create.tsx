import { FormEvent, useState, useEffect } from "react";

import { useForm } from "@/hooks/useForm";
import { Input } from "@/components/ui/Input";
import { UserIcon } from "@/components/svgs/UserIcon";
import { EmailIcon } from "@/components/svgs/EmailIcon";
import { UnLock } from "@/components/svgs/UnLock";
import { Lock } from "@/components/svgs/Lock";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { ErrorType } from "@/types/customTypes";
import { LayoutForm } from "@/components/LayoutForm";
import { Title } from "@/components/ui/Title";
import { useRouter } from "next/router";
import Link from "next/link";
import { Alert } from "@/components/ui/Alert";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorCheckbox, setErrorCheckbox] = useState<ErrorType | null>(null);
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState(
    {} as { message: string; success: boolean }
  );
  const router = useRouter();

  const username = useForm("username");
  const email = useForm("email");
  const password = useForm("password");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorCheckbox(null);
    setLoading(true);
    if (!checked) {
      setErrorCheckbox({
        message: "You must accept the terms and conditions.",
      });
      setLoading(false);
      return null;
    }
    if (!username.validate() && !email.validate() && !password.validate())
      return null;

    try {
      const response = await fetch("/api/account/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username.value,
          email: email.value,
          password: password.value,
        }),
      });
      const data = await response.json();
      setFlashMessage(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (flashMessage.success) {
      timer = setTimeout(() => router.replace("/account/login"), 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [flashMessage]);

  return (
    <LayoutForm>
      {flashMessage.success && (
        <Alert type="success" message={flashMessage.message} />
      )}
      <div className="min-w-fit max-w-sm w-full bg-slate-800  shadow-xl p-4 space-y-6 rounded-md">
        <Title>Create Account</Title>
        <form onSubmit={onSubmit} className="flex flex-col space-y-5">
          <Input
            type="text"
            label="username"
            value={username.value}
            onChange={username.onChange}
            onBlur={username.onBlur}
            error={username.error}
            Icon={<UserIcon />}
          />
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
          <Checkbox
            checked={checked}
            setChecked={setChecked}
            error={errorCheckbox}
          >
            <span className="text-sm text-slate-400">
              I agree all statements in{" "}
              <a
                className="text-slate-50 border-b border-slate-700 hover:border-slate-300 transition-all duration-300"
                href="#"
              >
                Terms of services
              </a>
            </span>
          </Checkbox>
          <Button label="sign up" loading={loading} />
        </form>
        <p className="text-xs text-slate-400 text-center">
          Have already an account?{" "}
          <Link
            className="text-slate-200 border-b border-slate-700 hover:border-slate-300 transition-all duration-300"
            href="/account/login"
          >
            Login here
          </Link>
        </p>
      </div>
    </LayoutForm>
  );
}
