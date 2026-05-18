import { useSyncExternalStore } from "react";
import type { QuickViewProduct } from "@/components/QuickViewModal";

let current: QuickViewProduct | null = null;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function openQuickView(p: QuickViewProduct) {
  current = p;
  emit();
}

export function closeQuickView() {
  current = null;
  emit();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function getSnapshot() {
  return current;
}

export function useQuickView() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}
