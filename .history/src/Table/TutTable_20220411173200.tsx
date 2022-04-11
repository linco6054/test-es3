import React from "react";

import {
  Button,
  Link,
  Paper,
  Stack,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { faker } from "@faker-js/faker";

interface Address {
  streetAddress: string;
  secondaryAddress: string;
  zipCode: string;
  city: string;
  state: string;
}

const addresses: Address[] = [];

for (let i = 0; i < 20; i++) {
  addresses.push({
    streetAddress: faker.address.streetAddress(),
    secondaryAddress: faker.address.secondaryAddress(),
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
  });
}

const tableContainerSx = {};

function TutTable() {
  return (
    <TableContainer component={Paper} sx={tableContainerSx}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell scope="header">Street Address</TableCell>
            <TableCell>Secondary Address</TableCell>
            <TableCell>Zip Code</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {addresses.map(
            ({ streetAddress, secondaryAddress, zipCode, city, state }) => (
              <TableRow>
                <TableCell>{streetAddress}</TableCell>{" "}
                <TableCell>{zipCode}</TableCell> <TableCell>{city}</TableCell>
                <TableCell>{state}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TutTable;
