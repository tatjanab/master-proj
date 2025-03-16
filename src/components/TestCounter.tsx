import { useCounterStore } from "../store";
import { useEffect } from "react";
const setCount = () => {
  useCounterStore.setState({ count: 1 });
};
function TestCounter() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={incrementAsync}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default TestCounter;
