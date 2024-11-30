"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useComprehensionAssessment } from "@/api/compAssess";
import { cn } from "@/lib/utils";
import LoadingWrapper from "./shared/LoadingWrapper";

export default function ComprehensionAssessment() {
  const [word, setWord] = useState("");
  const [example, setExample] = useState("");
  const {
    data: result,
    isFetching,
    refetch,
  } = useComprehensionAssessment(word, example);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-9rem)]">
      <Card>
        <CardHeader>
          <CardTitle>Comprehension Assessment 📝</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Enter a word"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                disabled={isFetching}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Enter an example using this word"
                value={example}
                onChange={(e) => setExample(e.target.value)}
                disabled={isFetching}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isFetching}>
              {isFetching ? "Loading..." : "Assess"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card className="h-full overflow-x-auto">
          <div className="px-6 pt-6 mb-4 flex items-start justify-between">
            <CardTitle>Assessment Result</CardTitle>
            <div className="-mt-3">
              <div className="text-center">
                <span className="text-2xl font-bold">
                  <span className="text-5xl">
                    {isFetching ? "..." : result.score}
                  </span>
                  /100
                </span>
              </div>
              <div className="text-center">
                <span
                  className={cn(
                    "text-2xl font-semibold",
                    isFetching
                      ? "text-yellow-500"
                      : result.score >= 50
                      ? "text-green-500"
                      : "text-red-500"
                  )}
                >
                  {isFetching
                    ? "LOADING ⌛"
                    : result.score >= 50
                    ? "PASS ✅"
                    : "FAIL ❌"}
                </span>
              </div>
            </div>
          </div>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Feedback:</h3>
              <LoadingWrapper isLoading={isFetching}>
                <p>{result.feedback}</p>
              </LoadingWrapper>
            </div>

            <div>
              <h3 className="font-semibold">Corrected Version:</h3>
              <LoadingWrapper isLoading={isFetching}>
                <p>{result.correctedVersion}</p>
              </LoadingWrapper>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
