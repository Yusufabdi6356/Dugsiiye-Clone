"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";
import { DemoNotice, PasswordField, SUBMIT, TermsCheckbox, TextField, isEmail } from "./fields";

export default function RegisterForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [agreed, setAgreed] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Record<string, string> = {};
    if (!data.firstName?.trim()) next.firstName = "Please enter your first name";
    if (!data.lastName?.trim()) next.lastName = "Please enter your last name";
    if (!data.email?.trim()) next.email = "Please enter your email";
    else if (!isEmail(data.email.trim())) next.email = "Please enter a valid email";
    if (!data.password) next.password = "Please enter a password";
    else if (data.password.length < 8) next.password = "Password must be at least 8 characters";
    if (data.confirmPassword !== data.password) next.confirmPassword = "Passwords do not match";
    if (!agreed) next.terms = "You must accept the Terms and Conditions.";
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  };

  return (
    <form className="space-y-5" onSubmit={submit} noValidate>
      <div className="grid grid-cols-2 gap-3">
        <TextField id="firstName" label="First name" placeholder="Kadija" autoCapitalize="words" autoComplete="given-name" error={errors.firstName} />
        <TextField id="lastName" label="Last name" placeholder="Mohamed" autoCapitalize="words" autoComplete="family-name" error={errors.lastName} />
      </div>
      <TextField id="email" label="Email address" type="email" placeholder="you@example.com" autoCapitalize="none" autoComplete="email" error={errors.email} />
      <TextField id="phone" label="Phone number" type="tel" placeholder="+25261XXXXXXX" autoComplete="tel" />
      <PasswordField id="password" label="Password" autoComplete="new-password" error={errors.password} />
      <PasswordField id="confirmPassword" label="Confirm password" autoComplete="new-password" error={errors.confirmPassword} />
      <TermsCheckbox checked={agreed} onChange={setAgreed} error={errors.terms} />
      <DemoNotice show={done}>Account creation isn&apos;t available in this demo.</DemoNotice>
      <button className={`${SUBMIT} group mt-2 h-12 w-full text-[15px] font-medium`} type="submit">
        Create account
        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
