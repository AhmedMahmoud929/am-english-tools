"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
import LoadingWrapper from "./shared/LoadingWrapper";
import { useWordFinder } from "@/api/wordFinder";

// Dummy data
const wordData2 = {
  word: "",
  description:
    "The occurrence and development of events by chance in a happy or beneficial way.",
  examples: [
    "They were reunited by serendipity 20 years after they last saw each other.",
    "The discovery of penicillin was a serendipitous accident.",
    "Finding your dream job while looking for something else is pure serendipity.",
  ],
  synonyms: ["Chance", "Fortuity", "Luck", "Providence"],
  antonyms: ["Misfortune", "Calamity", "Disaster", "Design"],
};

export default function WordFinder() {
  const [word, setWord] = useState("");

  const { data: result, isFetching, refetch } = useWordFinder(word);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (word.trim() === "") return;
    refetch();
  };

  return (
    <div className="flex flex-col h-[calc(100vh-9rem)] gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Word Finder 🔍</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="flex-grow"
              disabled={isFetching}
            />
            <Button type="submit" disabled={isFetching}>
              {isFetching ? "Loading..." : "Search"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card className="h-full overflow-x-auto">
          <CardHeader>
            <CardTitle>{word ? word : "-"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold">Description:</h3>
              <LoadingWrapper isLoading={isFetching}>
                <p>{result.definition}</p>
              </LoadingWrapper>
            </div>
            <div>
              <h3 className="font-semibold">Examples:</h3>
              <ul className="list-disc pl-5">
                {result.examples.map((example, ix) => (
                  <LoadingWrapper key={ix} isLoading={isFetching}>
                    <li>{example}</li>
                  </LoadingWrapper>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Synonyms:</h3>
              <LoadingWrapper isLoading={isFetching}>
                <div className="flex gap-2 flex-wrap">
                  {result.synonyms.map((ele, ix) => (
                    <span
                      key={ix}
                      className="bg-gray-200 dark:bg-gray-800 py-1 px-3 rounded-lg"
                    >
                      {ele}
                    </span>
                  ))}
                </div>
              </LoadingWrapper>
            </div>
            <div>
              <h3 className="font-semibold">Antonyms:</h3>
              <LoadingWrapper isLoading={isFetching}>
                <div className="flex gap-2 flex-wrap">
                  {result.antonyms.map((ele, ix) => (
                    <span
                      key={ix}
                      className="bg-gray-200 dark:bg-gray-800 py-1 px-3 rounded-lg"
                    >
                      {ele}
                    </span>
                  ))}
                </div>
              </LoadingWrapper>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
