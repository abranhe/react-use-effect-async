import { useEffect } from 'react';

/**
 * `useEffect` Hook with support for await.
 *
 * TODO: Move to Typescript.
 * 
 * @link https://stackoverflow.com/a/54637708/7602110
 */
export default function useEffectAsync(effect, inputs) {
  useEffect(() => {
    effect();
  }, inputs);
}
