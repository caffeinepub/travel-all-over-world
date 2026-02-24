import { useActor } from './useActor';

// This file is for React Query hooks that interact with the backend
// Currently, the backend has no methods, so no queries are needed
// Add custom hooks here when backend functionality is implemented

export function useBackendQueries() {
  const { actor, isFetching } = useActor();
  
  return {
    actor,
    isFetching
  };
}
