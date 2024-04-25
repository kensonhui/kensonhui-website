"use client";
import React from "react";
import IconButton from "./IconButton";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { Label } from "./ui/label";

const email = "kenson.hui22@gmail.com";

const SocialTab = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  return (
    <div className="flex mt-4 pl-5">
      <div className="flex space-x-4">
        <IconButton
          Icon={EnvelopeClosedIcon}
          onClick={() => {
            navigator.clipboard.writeText(email);
            toast({
              title: "Email copied!",
              description: `${email} has been saved to your clipboard.`,
              duration: 1500,
            });
          }}
        />
        <a
          href="https://www.linkedin.com/in/kensonhui/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton Icon={LinkedInLogoIcon} onClick={() => {}} />
        </a>
        <a
          href="https://github.com/kensonhui"
          rel="noopener noreferrer"
          target="_blank"
        >
          <IconButton Icon={GitHubLogoIcon} onClick={() => {}} />
        </a>
      </div>
      <div className="flex items-center space-x-2 left-auto ml-auto transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        <Switch
          id="light-mode"
          className=""
          defaultChecked={theme == "light"}
          onCheckedChange={(checked) =>
            checked ? setTheme("light") : setTheme("dark")
          }
        />
        <Label htmlFor="light-mode" className="cursor-pointer">
          Lights
        </Label>
      </div>
    </div>
  );
};

export default SocialTab;
