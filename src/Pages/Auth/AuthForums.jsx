import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import PageHeader from "@/components/PageHeader/PageHeader";

function AuthForms() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <PageHeader heading={"My Account"} />
      <div className="container lg:px-32 p-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border p-8">
            <h2 className="mb-6 text-2xl font-bold">Login</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-[#f0f7ff]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-[#f0f7ff]"
                />
              </div>
              <div className="flex  items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <div className="pt-56 gap-5 flex flex-col md:flex-row  justify-center items-center">
                <Button
                  className="flex justify-between items-center px-8 w-[25em] h-14 rounded-full bg-[#2196f3] hover:bg-[#1976d2]"
                  disabled={isLoading}
                >
                  <span className="text-2xl">Log In</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Button>

                <div className="text-center">
                  <a
                    href="/forgot-password"
                    className="text-[#2196f3] text-md hover:underline whitespace-nowrap"
                  >
                    Lost your password?
                  </a>
                </div>
              </div>
            </form>
          </div>

          <div className="rounded-lg border p-8">
            <h2 className="mb-6 text-2xl font-bold">Register</h2>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required className="bg-[#f0f7ff]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required className="bg-[#f0f7ff]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth *</Label>
                <Input
                  id="dob"
                  placeholder="DD-MM-YYYY"
                  required
                  className="bg-[#f0f7ff]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registerEmail">Email address *</Label>
                <Input
                  id="registerEmail"
                  type="email"
                  required
                  className="bg-[#f0f7ff]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="registerPassword">Password *</Label>
                <Input
                  id="registerPassword"
                  type="password"
                  required
                  className="bg-[#f0f7ff]"
                />
              </div>
              <p className="text-sm text-gray-600">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <a href="/privacy" className="text-[#2196f3] hover:underline">
                  privacy policy
                </a>
                .
              </p>
              <Button
                className="flex justify-between items-center px-8 w-[25em] h-14 rounded-full bg-[#2196f3] hover:bg-[#1976d2]"
                disabled={isLoading}
              >
                
                  <span className="mr-2 text-2xl">Register</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 flex"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
               
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForms;
