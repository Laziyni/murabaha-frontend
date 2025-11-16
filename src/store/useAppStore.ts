import { create } from 'zustand';
import { DealDraft, ScheduleRow } from '@/types/contract';

type State = {
  draft: DealDraft | null;
};

type Actions = {
  setDraft: (draft: DealDraft) => void;
  updateSchedule: (rows: ScheduleRow[]) => void;
};

export const useAppStore = create<State & Actions>((set, get) => ({
  draft: null,
  setDraft: (draft) => set({ draft }),
  updateSchedule: (rows) => {
    const d = get().draft;
    if (!d) return;
    set({ draft: { ...d, schedule: rows } });
  },
}));
