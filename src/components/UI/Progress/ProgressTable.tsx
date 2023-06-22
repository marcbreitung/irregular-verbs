import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useRef, useState } from "react";
import { useVirtual } from "react-virtual";
import ProgressBar from "./ProgressBar";
import VerbInfo from "../Verb/VerbInfo";
import ButtonText from "../Button/ButtonText";
import { VerbType } from "../../../model/app.model";

const columnHelper = createColumnHelper<VerbType>();

type ProgressTableProps = {
  progress: VerbType[];
  dictionaryUrl: string;
};

const ProgressTable = ({ progress, dictionaryUrl }: ProgressTableProps) => {
  const [data] = useState(() => [...progress]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("infinitive", {
        header: "Verb",
        cell: (info) => <VerbInfo verb={info.getValue()} dictionaryUrl={dictionaryUrl} />,
      }),
      columnHelper.accessor("progress", {
        header: "Progress",
        cell: (info) => <ProgressBar value={info.getValue()} />,
      }),
      columnHelper.display({
        header: "Action",
        id: "action",
        cell: (info) => <ButtonText layout="primary">Learn</ButtonText>,
      }),
    ],
    [dictionaryUrl]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

  return (
    <div>
      <div ref={tableContainerRef} className="overflow-y-auto" style={{ height: "90vh" }}>
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      style={{ width: header.getSize() }}
                      className="sticky top-0 z-20 p-1 text-left font-normal bg-darkGreen text-lightYellow"
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center justify-between"
                              : "flex item-center justify-between",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <FontAwesomeIcon icon={faAngleUp} />,
                            desc: <FontAwesomeIcon icon={faAngleDown} />,
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="relativ z-10 w-1/3 py-4 border-b border-b-lightYellow p-1">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTable;
