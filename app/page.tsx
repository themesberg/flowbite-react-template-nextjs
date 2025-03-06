"use client";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <Navbar fluid rounded>
        <Navbar.Brand>
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            width={36}
            height={36}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>

      <ol className="flex w-full items-center space-x-2 rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse">
        <li className="flex items-center text-blue-600 dark:text-blue-500">
          <span className="me-2 flex size-5 shrink-0 items-center justify-center rounded-full border border-blue-600 text-xs dark:border-blue-500">
            1
          </span>
          Personal <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
          <svg
            className="ms-2 size-3 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="me-2 flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
            2
          </span>
          Account <span className="hidden sm:ms-2 sm:inline-flex">Info</span>
          <svg
            className="ms-2 size-3 sm:ms-4 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 9 4-4-4-4M1 9l4-4-4-4"
            />
          </svg>
        </li>
        <li className="flex items-center">
          <span className="me-2 flex size-5 shrink-0 items-center justify-center rounded-full border border-gray-500 text-xs dark:border-gray-400">
            3
          </span>
          Review
        </li>
      </ol>
    </main>
  );
}
