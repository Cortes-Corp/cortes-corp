"use client";

import { FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
export default function Contact() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));


    e.target.reset();

  };
  return (
    <section className="bg-white mt-20 dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Get in touch with one of our agents.
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
        <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your name
            </label>
            <input
              type="text"
              id="email"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
              placeholder="name@cortescorp.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Phone Number
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phoneNumber"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
              placeholder="123-456-7890"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 shadow-sm focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border border-gray-300 focus:ring-red-600 focus:border-red-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
              placeholder="Leave a message"></textarea>
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              onClick={() => {
                const currentDate = new Date();
                const formattedDate = currentDate.toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                });
                return toast("Your Message Has been sent to our agents!", {
                  description: formattedDate,
                  action: {
                    label: "Thank You!",
                    onClick: () => console.log("Thank You!"),
                  },
                });
              }}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-none  text-white">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
