import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className="flex justify-between items-center shadow-sm p-4">
        <div className="flex gap-1 items-center font-bold">
          <img src="/logo.svg" alt="logo" />
          <h1>CMA</h1>
        </div>
        <ul className="hidden md:flex gap-16">
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Home
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Search
          </li>
          <li className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary">
            Car's Area
          </li>
        </ul>
        {isSignedIn ? (
          <div className="flex gap-2 items-center">
            <UserButton />
            <Link to={"/profile"}>
              <Button>Add Cars</Button>
            </Link>
          </div>
        ) : (
          <SignInButton>
            <Button>Login</Button>
          </SignInButton>
        )}
      </div>
    </>
  );
};

export default Header;
