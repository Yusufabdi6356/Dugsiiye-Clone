"use client";

import { useState } from "react";
import { PaperPlaneIcon } from "@/components/ui/icons";
import { DemoNotice, SUBMIT, TextAreaField, TextField, isEmail } from "./fields";

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next: Record<string, string> = {};
    if (!data.fullName?.trim()) next.fullName = "Please enter your name";
    if (!data.email?.trim()) next.email = "Please enter your email";
    else if (!isEmail(data.email.trim())) next.email = "Please enter a valid email";
    if (!data.message?.trim()) next.message = "Please enter a message";
    setErrors(next);
    const ok = Object.keys(next).length === 0;
    setDone(ok);
    if (ok) form.reset();
  };

  return (
    <form className="space-y-5" onSubmit={submit} noValidate>
      <TextField id="fullName" label="Full name" placeholder="Kadija Mohamed" error={errors.fullName} />
      <TextField id="email" label="Email address" type="email" placeholder="you@example.com" error={errors.email} />
      <TextField id="phone" label="Phone number" type="tel" placeholder="+25261XXXXXXX" />
      <TextField id="about" label="Subject" placeholder="What is this about?" />
      <TextAreaField id="message" label="Message" placeholder="Tell us how we can help..." rows={5} error={errors.message} />
      <DemoNotice show={done}>Thanks! Your message looks good.</DemoNotice>
      <button className={`${SUBMIT} mt-2 h-12 w-full gap-2 text-[15px] font-medium`} type="submit">
        <PaperPlaneIcon className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  );
}
