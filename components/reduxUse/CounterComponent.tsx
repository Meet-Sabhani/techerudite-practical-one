"use client";

import {
  decrementPersist,
  incrementByAmountPersist,
  incrementPersist,
  resetPersist,
} from "@/lib/store/slices/counterPersistSlice";
import {
  decrementSession,
  incrementByAmountSession,
  incrementSession,
  resetSession,
} from "@/lib/store/slices/persistSessionSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import React from "react";

const CounterComponent = () => {
  const countPersist = useAppSelector((state) => state.counterPersist.count);

  const countSession = useAppSelector((state) => state.persistSession.count);

  const dispatch = useAppDispatch();

  return (
    <div className="paddingCommon">
      <div>
        <h2>Count: {countPersist}</h2>
        <button onClick={() => dispatch(incrementPersist())}>+1</button>
        <button onClick={() => dispatch(decrementPersist())}>-1</button>
        <button onClick={() => dispatch(resetPersist())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmountPersist(5))}>
          +5
        </button>
      </div>

      <div>
        <h2>Session Count: {countSession}</h2>
        <button onClick={() => dispatch(incrementSession())}>+1</button>
        <button onClick={() => dispatch(decrementSession())}>-1</button>
        <button onClick={() => dispatch(resetSession())}>Reset</button>
        <button onClick={() => dispatch(incrementByAmountSession(5))}>
          +5
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
