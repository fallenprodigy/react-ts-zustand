import create from "zustand";

const useStore = create((set) => ({
  tableData: [],
  setTableData: (tableData: any) =>
    set((state: any) => ({
      state,
      tableData,
    })),
}));

export default useStore;
