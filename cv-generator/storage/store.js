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
  reset: () =>
    set(
      produce((draft) => {
        draft.cv = {
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
        };
      })
    ),
}));

export default useStore;
