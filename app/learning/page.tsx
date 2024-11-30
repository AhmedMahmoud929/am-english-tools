"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import LanguageLearningForm from "@/components/shared/LanguageForm";
import WordDetails from "@/components/shared/WordDetails";

export default function Component() {
  const [isQueryRequired, setIsQueryRequired] = useState(false);

  return (
    <div className="relative flex flex-col max-h-screen bg-gray-100 dark:bg-[#0f0f10] text-slate-900 dark:text-white">
      {/* ## MAIN */}
      <main
        className={cn("relative flex w-full lg:w-full flex-1 justify-center")}
      >
        {/* # CHAT-SECTION */}
        <div
          className={cn(
            "flex lg:w-1/2 h-screen mt-auto flex-col items-center justify-center pl-4 duration-300 ease-in-out pb-4 pt-2",
            isQueryRequired
              ? "border-gray-800 w-0 overflow-hidden px-0 lg:pl-4 border-r"
              : "w-full"
          )}
        >
          <LanguageLearningForm setIsQueryRequired={setIsQueryRequired} />
        </div>

        {/* # QUERIES-SECTION */}
        <div
          className={cn(
            "flex flex-col w-0 z-20 max-h-screen overflow-hidden bg-gray-200 dark:bg-[#141415] transition-all duration-500 ease-in-out",
            isQueryRequired ? "w-full lg:w-1/2" : "w-0"
          )}
        >
          <WordDetails />
        </div>
      </main>
    </div>
  );
}
