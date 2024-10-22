import React, { useEffect, useState } from "react";
import { getHorrorStory } from "../services/history_worker";

interface StoryResponse {
  inputs: any;
  response: {
    response: string; // La historia en formato de cadena
  };
}

const HorrorStory: React.FC = () => {
  const [storyData, setStoryData] = useState<StoryResponse[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await getHorrorStory({
          gender: "male",
          language: "Spanish",
        });
        setStoryData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load the story");
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Horror Story</h1>
      {storyData?.map((task, index) => (
        <div key={index}>
          <h2>Chapter {index + 1}</h2>
          <p>{task.response.response}</p>
        </div>
      ))}
    </div>
  );
};

export default HorrorStory;
