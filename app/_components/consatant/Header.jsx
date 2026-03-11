'use client'
import { Button } from "../../../components/ui/button";
import { Show, SignInButton, SignUpButton, UserButton, useUser  } from "@clerk/nextjs";
import React from "react";

const Header = () => {
  const {user , isSignedIn} = useUser()
  return (
    <div className="flex justify-between items-center p-5">
      <h1>Expense Tracker</h1>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          {
            isSignedIn ?  <UserButton /> : <Button>Get Started</Button>
          }
         
        </Show>
      </header>
      <Button>Click To Add Expense</Button>
    </div>
  );
};

export default Header;
