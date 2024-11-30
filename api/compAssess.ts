import { API_URL } from "@/constants";
import { AssessFeedback } from "@/lib/types";
import axios from "axios";
import { useQuery } from "react-query";

const getExampleFeedback = async (word: string, example: string) => {
  console.log("We are here");
  const res = await axios.post(`${API_URL}/comprehension-assessment`, {
    word,
    example,
  });
  console.log(res.data);
  const result: AssessFeedback = res.data;
  return result;
};

export const useComprehensionAssessment = (word: string, example: string) =>
  useQuery(
    ["comprehension-assessment"],
    () => getExampleFeedback(word, example),
    { enabled: false }
  );
