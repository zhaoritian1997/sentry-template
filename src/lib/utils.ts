import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isBrowser = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const nextjsIconBas64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPgogIDxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik03LjA0IDUgMTguMiAxOS4zOGMtLjI0LjIxLS41LjQyLS43Ni42MmgtLjg2TDYuNjIgNy4xNFYxNUg0Ljk0VjVoMi4xWiIvPgogIDxwYXRoIGZpbGw9InVybCgjYikiIGQ9Ik0xNS4wOCA1SDEzLjR2MTBoMS42N1Y1WiIvPgogIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjEyLjU4IiB4Mj0iMTcuNTEiIHkxPSIxMy42OCIgeTI9IjE5Ljc5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICA8c3RvcCBzdG9wLWNvbG9yPSIjZmZmIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMTQuMjQiIHgyPSIxNC4yMiIgeTE9IjUiIHkyPSIxMi4zNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPgogICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz4KICA8L2xpbmVhckdyYWRpZW50Pgo8L3N2Zz4='

