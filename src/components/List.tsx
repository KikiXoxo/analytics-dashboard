import { orders } from "../data/orders";
import Row from "./Row";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import download from "../assets/download.svg";

import useDark from "../hooks/useDark";

export default function List() {
  const [colorTheme, setTheme] = useDark();

  const rows = orders;
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "inherit",
        borderRadius: "14px",
        width: "60%",
      }}
      className="transition duration-500 md:w-3/5 h-max bg-inherit border border-bg-[#4b5563] dark:border-gray-600"
    >
      <Table sx={{ minWidth: 650 }} aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "16px", color: "#9CA4AB" }}>
              Name
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "16px", color: "#9CA4AB" }}>
              Date
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "16px", color: "#9CA4AB" }}>
              Amount
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "16px", color: "#9CA4AB" }}>
              Status
            </TableCell>
            <TableCell align="left" sx={{ fontSize: "16px", color: "#9CA4AB" }}>
              Invoice
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ key, image, name, date, amount, status }) => (
            <TableRow
              key={key}
              className="dark:border-b dark:border-b-gray-300"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="flex justify-start items-center gap-2">
                  <img src={image} alt="" />
                  <p className="dark:text-[#737373] text-[#3A3F51] font-medium">
                    {name}
                  </p>
                </div>
              </TableCell>
              <TableCell align="left" sx={{ color: "#737373" }}>
                {date}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "500", color: "#737373" }}
              >
                ${amount}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: () => (status === "Paid" ? "#34CAA5" : "#ED544E"),
                }}
              >
                {status}
              </TableCell>
              <TableCell align="left">
                <div className="flex justify-start items-center gap-1">
                  <img src={download} alt="" />
                  <p className="font-normal text-sm not-italic text-[#0D062D] dark:text-[#737373]">
                    View
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
