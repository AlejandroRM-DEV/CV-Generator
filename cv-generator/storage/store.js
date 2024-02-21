import { create } from 'zustand';
import { produce } from 'immer';

const useStore = create((set) => ({
  cv: {
    name: '',
    email: '',
    phone: '',
    location: '',
    about: '',
    languages: [],
    professionalSkills: [],
    personalSkills: [],
    experience: [],
    education: [],
    continuosEducation: [],
  },
  updateData: (data) =>
    set(
      produce((draft) => {
        Object.entries(data).forEach(([key, value]) => {
          draft.cv[key] = value;
        });
      })
    ),
}));

export default useStore;
