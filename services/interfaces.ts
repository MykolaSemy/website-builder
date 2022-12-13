export interface RowType {
  columns: CellType[];
  id: string;
  color: string;
  gap: number;
}
export interface CellType {
  id: string;
  contentType: "text" | "button" | "image" | "none";
  content: any;
  size: string;
  style: string;
  color: string;
}
export interface ActiveCellType {
  row: string;
  cell: string;
}
