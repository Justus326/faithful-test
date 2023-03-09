/* eslint-disable react/require-default-props */
import { FC, useRef } from "react";
// import { useAppDispatch } from "../../../Redux/app/hooks";
// import { setPage } from "../../../Redux/Reducers/formReducer";
// import Loader from "./Loader";
// import NoRecords from "./NoRecords";
import {
  Table,
  TableBody,
  TableContainer,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  TableTitle,
} from "./styles";
// import ReactPaginate from "react-paginate";
import SearchBox from "./../Reusables/SearchBox";

interface TableProps {
  data?: {
    columns: any;
    rows: any;
  };
  title?: string;
  loading?: Boolean;
  pageCount?: any;
  currentPage?: any;
  tableId?: string;
  tableRef?: any;
  page?: string;
  searchOptions?: any;
  noRecordText?: string;
  showFilter?: boolean;
}

const CustomTable: FC<TableProps> = ({
  data,
  title,
  loading,
  pageCount,
  currentPage,
  tableId,
  tableRef,
  page,
  searchOptions,
  noRecordText,
  showFilter,
}) => {
  const tableScroll = useRef<any>();
  //   const dispatch = useAppDispatch();
  // const scrollToTop = () => {
  //   tableScroll.current.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  //   const ChangePage = (prop: any) => {
  //     const { selected } = prop;
  //     dispatch(setPage({ page, value: selected + 1 }));
  //   };

  return (
    <TableContainer ref={tableScroll}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TableTitle>{title}</TableTitle>
        {showFilter && <SearchBox />}
      </div>
      {searchOptions}
      {!loading ? (
        <div style={{ width: "100%", overflowX: "auto" }}>
          {data?.rows?.length ? (
            <>
              <Table id={tableId} ref={tableRef}>
                <TableHeader>
                  <TableRow>
                    {data?.columns?.map((column: any, index: number) => (
                      <TableHead
                        key={column + index}
                        // style={{ width: column.width }}
                      >
                        {column?.label}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {data?.rows?.map((row: any, index: number) => (
                    <TableRow key={row + index}>
                      {data?.columns?.map((column: any, index: number) => (
                        <TableData
                          key={column + index}
                          // style={{ width: column.width }}
                        >
                          {row[`${column.field}`]}
                        </TableData>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
              ></div>
              {/* {pageCount && (
                <ReactPaginate
                  previousLabel={"< "}
                  nextLabel={" >"}
                  pageCount={pageCount}
                  onPageChange={ChangePage}
                  containerClassName={"paginationBttns"}
                  activeClassName={"paginationActive"}
                  marginPagesDisplayed={4}
                  pageRangeDisplayed={4}
                  onClick={scrollToTop}
                  initialPage={currentPage - 1}
                  previousClassName={"prev"}
                  nextClassName={"next"}
                />
              )} */}
            </>
          ) : (
            // <NoRecords text={noRecordText} />
            " N / A"
          )}
        </div>
      ) : (
        // <Loader />
        "Loading..."
      )}
    </TableContainer>
  );
};

export default CustomTable;
