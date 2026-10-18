"use client";

import SmartLink from "@/components/ui/SmartLink";
import { useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { DemoNotice, PasswordField, SUBMIT, TextField, isEmail } from "./fields";

export default function LoginForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    const next: Record<string, string> = {};
    if (!email) next.email = "Please enter your email";
    else if (!isEmail(email)) next.email = "Please enter a valid email";
    if (!password) next.password = "Please enter your password";
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  };

  return (
    <form className="space-y-5" onSubmit={submit} noValidate>
      <TextField id="email" label="Email address" type="email" placeholder="you@example.com" autoCapitalize="none" autoComplete="email" error={errors.email} />
      <PasswordField
        id="password"
        label="Password"
        autoComplete="current-password"
        error={errors.password}
        labelAside={
          <SmartLink className="text-xs font-medium text-[#1E1E1E] underline-offset-4 transition-colors hover:underline dark:text-neutral-100" href="/auth/forgot-password">
            Forgot password?
          </SmartLink>
        }
      />
      <DemoNotice show={done}>Signing in isn&apos;t available in this demo.</DemoNotice>
      <button className={`${SUBMIT} group mt-2 h-12 w-full text-[15px] font-medium`} type="submit">
        Sign in
        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
