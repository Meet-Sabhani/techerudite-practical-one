"use client";

import React, { ReactNode, useEffect, useState } from "react";

interface CombinedProvidersProps {
  children: ReactNode;
}
const CombinedProviders = ({ children }: CombinedProvidersProps) => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return <>{children}</>;
};

export default CombinedProviders;
