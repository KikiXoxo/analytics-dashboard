import { orders } from "../data/orders";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { download } from "../assets";
import useScreenSize from "../helpers/useScreenSize";
import useDark from "../hooks/useDark";

export default function List() {
  const { width } = useScreenSize();
  const [colorTheme] = useDark();

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: () => (colorTheme === "light" ? "white" : "inherit"),
        borderRadius: "14px",
        width: () => (width < 425 ? "100%" : "60%"),
      }}
      className="transition duration-500 h-max border border-bg-[#4b5563] dark:border-gray-600"
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
          {orders.map(({ key, image, name, date, amount, status }) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="flex justify-start items-center gap-2">
                  <img src={image} alt="" />
                  <p className="dark:text-[#a8a9aa] text-[#3A3F51] font-medium">
                    {name}
                  </p>
                </div>
              </TableCell>
              <TableCell align="left" sx={{ color: "#a8a9aa" }}>
                {date}
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "500", color: "#a8a9aa" }}
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
                  <img src={download} alt="" className="fill-gray-300" />
                  <p className="font-normal text-sm not-italic text-[#0D062D] dark:text-gray-300">
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
