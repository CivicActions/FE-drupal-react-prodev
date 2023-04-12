import {renderHook} from "@testing-library/react";
import {useInterval} from "./useInterval";

describe('Test useInterval custom hook', () => {
  test('Render hook with null delay', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const callback = () => {};
    renderHook(() => useInterval(callback, null));
  });
  test('Render hook with number delay', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const callback = () => {};
    renderHook(() => useInterval(callback, 1000));
  })
})
