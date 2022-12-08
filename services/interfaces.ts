export interface RowType {
  columns: CellType[];
  id: string;
  color: string;
  gap: number;
}
export interface CellType {
  id: string;
  content: any;
  size: string;
  style: string;
  color: string;
  // textSize:string;
  // textColor:string;
  // imageStyle:"cover"|"contain"
  // buttonColor:""
}
export interface ActiveCellType {
  row: string;
  cell: string;
}
