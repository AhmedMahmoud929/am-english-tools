import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface WordDetailsProps {
  word?: string;
  level?: string;
  interest?: string;
  description?: string;
  examples?: string[];
  synonyms?: string[];
  antonyms?: string[];
  imageUrl?: string;
}

export default function WordDetails({
  word = "Adventure",
  level = "Intermediate",
  interest = "Travel",
  description = "An unusual and exciting or daring experience.",
  examples = [
    "They went on an adventure in the Amazon rainforest.",
    "Life is an adventure waiting to be explored.",
    "The children loved reading adventure stories.",
  ],
  synonyms = ["journey", "expedition", "venture"],
  antonyms = ["routine", "boredom", "monotony"],
  imageUrl = "/placeholder.svg?height=200&width=400",
}: WordDetailsProps) {
  return (
    <ScrollArea className="h-screen px-6 py-4">
      <div className="flex flex-col gap-3 pb-8">
        <div className="flex items-center gap-4">
          <Badge className="text-sm font-medium">
            Level:
            <pre className="ml-2">{level}</pre>
          </Badge>
          <Badge className="text-sm font-medium">
            Interest:
            <pre className="ml-2">{interest}</pre>
          </Badge>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-3xl font-bold -mb-4">{word}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{description}</p>
          </CardContent>
        </Card>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-xl -mb-4">Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              {examples.map((example, index) => (
                <li key={index} className="text-muted-foreground">
                  {example}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl -mb-2">Synonyms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {synonyms.map((synonym, index) => (
                  <Badge key={index} variant="secondary">
                    {synonym}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl -mb-2">Antonyms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {antonyms.map((antonym, index) => (
                  <Badge key={index} variant="outline">
                    {antonym}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-xl">Visual Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={`Image representing ${word}`}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
