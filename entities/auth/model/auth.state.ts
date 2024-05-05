import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "jotai";
import { createJSONStorage, atomWithStorage } from "jotai/utils";
import { AuthResponse, LoginRequest } from "./auth.interface";
import axios from "axios";
import { API } from "../api/api";

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

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { email, password }: LoginRequest) => {
    try {
      set(authAtom, {
        isLoading: true,
        error: null,
        access_token: null,
      });

      const { data } = await axios.post<AuthResponse>(API.login, {
        email,
        password,
      });

      set(authAtom, {
        isLoading: false,
        error: null,
        access_token: data.access_token,
      });
    } catch (error) {
      if (error instanceof Error) {
        set(authAtom, {
          isLoading: false,
          error: error.message,
          access_token: null,
        });
      }
    }
  }
);

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, INITIAL_STATE);
});
