import { DependencyList, useEffect } from 'react';

/**
 * `useEffect` Hook with support for await.
 *
 * @link https://stackoverflow.com/a/54637708/7602110
 */
export default function useEffectAsync(
  effect: () => void,
  inputs: DependencyList | undefined,
): void {
  useEffect(() => {
    effect();
  }, inputs);
}
