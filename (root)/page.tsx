"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import confetti from "canvas-confetti";

const Page = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    const waitlist_id = process.env.NEXT_PUBLIC_WAITLIST_ID;
    const referral_link = document.URL;
    const data = {
      email: email,
      waitlist_id: waitlist_id,
      referral_link: referral_link,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_WAITLIST_URL as string,
        data
      );
      console.log("response", response);
      setIsSuccess(true);
      setEmail("");
      const end = Date.now() + 1.5 * 1000; // 3 seconds
      const frame = () => {
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
        if (Date.now() > end) return;

        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          startVelocity: 60,
          origin: { x: 0, y: 0.5 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          startVelocity: 60,
          origin: { x: 1, y: 0.5 },
          colors: colors,
        });

        requestAnimationFrame(frame);
      };
      frame();
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-[hsla(0,0%,66%,1)] min-h-dvh flex flex-col items-center justify-between">
      <div className="relative w-full">
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="/Sequence 01_2.mp4"
            className="h-[82vh] md:h-[90vh] w-full object-cover max-sm:rounded-b-xl"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-30 md:bg-opacity-40 rounded-b-xl"></div>
        </div>

        <div className="flex flex-col items-center bg-transparent text-white rounded-lg px-4 w-full max-w-md mx-auto absolute bottom-6 md:bottom-[20%] md:translate-y-1/2 md:left-1/2 md:-translate-x-1/2 md:items-center md:max-w-xl md:text-center">
          <h2 className="text-3xl md:text-5xl font-gilmer mb-2 md:mb-4">
            Join the Waitlist 
          </h2>
          <p className="text-center md:text-center text-[hsla(0,0%,66%,1)] font-gilmer mb-4 text-lg md:text-2xl leading-tight md:leading-relaxed md:max-w-xl">
           Be among the first to witness the next step in evolution. Receive first-hand updates. 
            Stay tuned for the extraordinary.
          </p>
          <div className="w-full px-2 mt-2 md:px-0 md:mt-4">
            <form
              ref={formRef}
              onSubmit={handleFormSubmit}
              className="w-full p-2 bg-[hsla(0,0%,0%,0.25)] rounded-lg md:backdrop-blur-sm md:p-3 md:bg-transparent"
            >
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
                <Input
                  type="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full md:flex-1 p-3 rounded-md bg-transparent text-white placeholder-white border border-gray-400 md:bg-[hsla(0,0%,0%,0.25)] h-full mb-2 md:mb-0"
                  required
                />

                <Button
                  type="submit"
                  size={"sm"}
                  disabled={isSubmitting}
                  className="w-full md:flex-1 bg-[hsla(81,100%,60%,1)] text-black hover:bg-[hsla(81,100%,60%,1)] rounded-xl md:py-6 md:text-base group transition-all duration-300 whitespace-nowrap"
                >
                  {isSubmitting
                    ? "..."
                    : isSuccess
                    ? "Thanks!"
                    : "Join waitlist"}
                  {!isSubmitting && !isSuccess && (
                    <MoveRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className=" md:flex absolute top-8 left-8">
          <Image
            src="/arc-logo-white.png"
            alt="ARC Logo"
            height={50}
            width={100}
            className="h-10 w-auto"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl md:max-w-7xl px-4 md:px-12">
        <Separator />
        <div className="flex flex-row items-center justify-between py-4 text-[8px] md:text-sm md:py-6 md:pt-3">
          <div className="md:flex md:items-center">
            <span>©2025 </span>
            <span className="hidden md:inline md:mx-2">|</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex space-x-3 text-xl md:text-2xl">
            <FaDiscord className="cursor-pointer hover:text-[hsla(81,100%,60%,1)] transition-colors" />
            <IoMdMail className="cursor-pointer hover:text-[hsla(81,100%,60%,1)] transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
