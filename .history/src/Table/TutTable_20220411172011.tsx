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
  streetAddress:
}

const addresses = [];

for (let i = 0; i < 20; i++) {
  addresses.push({
    streetAddress: faker.address.streetAddress(),
    secondaryAddress: faker.address.secondaryAddress(),
    zipCode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
  });
}

function TutTable() {
  return <div></div>;
}

export default TutTable;
