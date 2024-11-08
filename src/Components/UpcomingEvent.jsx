"use client";

import React from "react";

const UpcomingEvent = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 max-h-[30vh] overflow-y-auto">
      <h5 className="text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Upcoming Events
      </h5>
      <ul className="">
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              aria-hidden="true"
              className="h-4"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                fill="#E17726"
              />
              <path
                d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                fill="#E27625"
              />
              {/* ...other SVG paths... */}
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              aria-hidden="true"
              className="h-4"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                fill="#E17726"
              />
              <path
                d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                fill="#E27625"
              />
              {/* ...other SVG paths... */}
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              aria-hidden="true"
              className="h-4"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                fill="#E17726"
              />
              <path
                d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                fill="#E27625"
              />
              {/* ...other SVG paths... */}
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Popular
            </span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
          >
            <svg
              aria-hidden="true"
              className="h-4"
              viewBox="0 0 40 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                fill="#E17726"
              />
              <path
                d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                fill="#E27625"
              />
              {/* ...other SVG paths... */}
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">MetaMask</span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
              Popular
            </span>
          </a>
        </li>
        {/* Repeat the list items */}
      </ul>
    </div>
  );
};

export default UpcomingEvent;
