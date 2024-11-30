import { API_URL } from "@/constants";
import { AssessFeedback, DetailedWord } from "@/lib/types";
import axios from "axios";
import { useQuery } from "react-query";

const getDetailedWord = async (word: string) => {
  console.log("We are here");
  const res = await axios.get(`${API_URL}/word-finder?word=${word}`);
  console.log(res.data);
  const result: DetailedWord = res.data;
  console.log(result);
  return result;
};

export const useWordFinder = (word: string) =>
  useQuery(["word-finder"], () => getDetailedWord(word), {
    enabled: false,
  });
