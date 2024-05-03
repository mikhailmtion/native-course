import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage, atomWithStorage } from "jotai/utils";

export interface AuthState {
  access_token: string | null;
  isLoading: boolean;
  error: string | null;
}

const INITIAL_STATE = {
  access_token: null,
  isLoading: false,
  error: null,
};

const storage = createJSONStorage<AuthState>(() => AsyncStorage);
export const authAtom = atomWithStorage<AuthState>(
  "auth",
  INITIAL_STATE,
  storage
);
