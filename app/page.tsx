"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/shared/ModeToggle";
import WordFinder from "@/components/WordFinder";
import ComprehensionAssessment from "@/components/ComprehensionAssessment";
import NoticeModal from "@/components/shared/NoticeModal";

export default function Home() {
  return (
    <main className="container mx-auto p-4 h-screen overflow-hidden">
      <NoticeModal />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📚 Vocabulary Master</h1>
        <ModeToggle />
      </div>
      <Tabs defaultValue="word-finder" className="w-full">
        <TabsList className="w-full h-auto flex flex-wrap">
          <TabsTrigger className="w-full md:w-1/2" value="word-finder">
            Word Finder 🔍
          </TabsTrigger>
          <TabsTrigger className="w-full md:w-1/2" value="comprehension">
            Comprehension Assessment 📝
          </TabsTrigger>
        </TabsList>
        <TabsContent value="word-finder">
          <WordFinder />
        </TabsContent>
        <TabsContent value="comprehension">
          <ComprehensionAssessment />
        </TabsContent>
      </Tabs>
    </main>
  );
}
