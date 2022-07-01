import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      title: "Pledge with no reward",
      content:
        "Choose to support us without a reward if you simply believe in our project. As a backer,you will be signed up to receive product updates via email.",
    },
    {
      id: 1,
      title: "Bamboo Stand",
      pledge: 25,
      content:
        "  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      left: 101,
    },
    {
      id: 2,
      title: " Black Edition Stand",
      pledge: 75,
      content:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backerm,ember list. Shipping is included.",
      left: 64,
    },
    {
      id: 3,
      title: "Mahogany Special Edition",
      pledge: 200,
      content:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be addedto our Backer member list. Shipping is included.",
      left: 0,
    },
  ],
  targetAmount: 100000,
  currentAmount: 89914,
  totalBacker: 5007,
  daysLeft: 56,
  SelectedPlege: 2,
  isSelectionOpen: false,
  progress: 0,
  bookmarked: false,
};

const donationsSlice = createSlice({
  name: "Donations",
  initialState,
  reducers: {
    updateSelected(state, action) {
      state.SelectedPlege = action.payload;
    },
    toggleSelection(state) {
      state.isSelectionOpen = !state.isSelectionOpen;
    },
    progressPercent(state) {
      state.progress = (state.currentAmount * 100) / state.targetAmount;
    },
    donate(state, action) {
      state.currentAmount += action.payload.newPledge;
      state.totalBacker += 1;
      const currentProject = state.data.filter(
        (data) => data.id === action.payload.id
      );
      currentProject[0].left -= 1;
    },
    bookmark(state) {
      state.bookmarked = !state.bookmarked;
    },
  },
});
export const {
  updateSelected,
  toggleSelection,
  progressPercent,
  donate,
  bookmark,
} = donationsSlice.actions;
export const reducer = donationsSlice.reducer;
