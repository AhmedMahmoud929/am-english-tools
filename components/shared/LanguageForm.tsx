"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useTheme } from "next-themes";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { englishLevels, interests } from "@/constants";

export default function LanguageLearningForm({
  setIsQueryRequired,
}: {
  setIsQueryRequired: Dispatch<SetStateAction<boolean>>;
}) {
  const [englishLevel, setEnglishLevel] = useState("");
  const [customInterest, setCustomInterest] = useState(false);
  const [interest, setInterest] = useState("");
  const [customInterestValue, setCustomInterestValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchWord);
    // Implement search logic here
    setIsQueryRequired(true);
  };

  const handleRandomWord = () => {
    console.log("Generating random word");
    // Implement random word generation logic here
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 relative">
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>

      <div className="space-y-4">
        <div>
          <Label htmlFor="english-level">Current English Level 📚</Label>
          <Select onValueChange={setEnglishLevel}>
            <SelectTrigger id="english-level">
              <SelectValue placeholder="Select your level" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(englishLevels).map(([level, subLevels]) => (
                <SelectGroup key={level}>
                  <SelectLabel className="">{level}</SelectLabel>
                  {subLevels.map((subLevel) => (
                    <SelectItem key={subLevel} value={subLevel}>
                      {subLevel}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="custom-interest"
              checked={customInterest}
              onCheckedChange={(checked) => {
                setCustomInterest(checked as boolean);
                if (!checked) setInterest("");
              }}
            />
            <Label htmlFor="custom-interest">Custom Interest 🎨</Label>
          </div>

          {customInterest ? (
            <Input
              placeholder="Enter your interest"
              value={customInterestValue}
              onChange={(e) => setCustomInterestValue(e.target.value)}
            />
          ) : (
            <Select onValueChange={setInterest} disabled={customInterest}>
              <SelectTrigger>
                <SelectValue placeholder="Select your interest" />
              </SelectTrigger>
              <SelectContent>
                {interests.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      </div>

      <Tabs defaultValue="search">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="search">Search Word 🔍</TabsTrigger>
          <TabsTrigger value="random">Random Word 🎲</TabsTrigger>
        </TabsList>
        <TabsContent value="search">
          <form onSubmit={handleSearch} className="space-y-4">
            <Input
              placeholder="Enter a word to search"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Search 🔍
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="random">
          <Button onClick={handleRandomWord} className="w-full">
            Generate Random Word 🎲
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  );
}
