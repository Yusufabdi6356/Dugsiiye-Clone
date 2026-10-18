import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

export default function SignUpSection() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-12">
      <div className="w-full max-w-md">
        <div className="space-y-8">
          <Link className="inline-flex items-center gap-1.5 text-sm text-[#8D8D8D] transition-colors hover:text-[#1E1E1E] dark:text-neutral-400 dark:hover:text-neutral-100" href="/">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
            Back to home
          </Link>
          <div>
            <span className="mb-3 block text-[11px] font-semibold uppercase tracking-wider text-[#8D8D8D] dark:text-neutral-400">
              Get Started
            </span>
            <h1 className="font-display mb-3 text-3xl font-semibold tracking-[-0.03em] text-[#1E1E1E] sm:text-4xl dark:text-neutral-50">
              Create your account
            </h1>
            <p className="text-base leading-6 text-[#8D8D8D] dark:text-neutral-400">
              <span className="font-medium text-[#1E1E1E] dark:text-neutral-100">
                Join 7,000+ Somali learners
              </span>
              {" "}mastering tech in their own language.
            </p>
          </div>
          <RegisterForm />
          <div className="border-t border-neutral-200 pt-6 dark:border-neutral-800">
            <p className="text-center text-sm text-[#8D8D8D] dark:text-neutral-400">
              Already have an account?{" "}
              <Link className="font-semibold text-[#1E1E1E] underline-offset-4 transition-colors hover:underline dark:text-neutral-100" href="/auth/login">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
