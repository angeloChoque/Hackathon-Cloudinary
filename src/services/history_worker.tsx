/* eslint-disable @typescript-eslint/no-explicit-any */
// api.ts - Servicio para interactuar con el Worker
const WORKER_URL = 'https://tramaflow-history-teller.emmanu20021.workers.dev'; // Reemplaza con tu URL real

interface StoryParams {
  gender?: string;
  language?: string;
}

interface WorkerResponse {
  inputs: any;
  response: any;
}

/**
 * Llama al worker con los parámetros opcionales de género e idioma.
 */
export const getHorrorStory = async (params: StoryParams): Promise<WorkerResponse[]> => {
  const { gender = 'male', language = 'Spanish' } = params;

  try {
    const response = await fetch(`${WORKER_URL}?gender=${gender}&language=${language}`, {
      method: 'GET', // O usa 'POST' si prefieres enviar en el body
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch story:', error);
    throw error;
  }
};
