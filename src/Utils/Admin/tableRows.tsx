import moment from "moment";
import { Avatar } from "../../Components/Nav/styles";
import { Checkbox } from "./styles";

export const churchMembersTableRow = () => {
  const rows = [
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      name: "Hillary",
      email: "ekwalorhillary@gmail.com",
      phone: "08055688457",
      church: "The faithfuls",
    },
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      name: "Hiljohnlary",
      email: "ekwalorjohn@gmail.com",
      phone: "08055688457",
      church: "The faithfuls",
    },
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      name: "mary",
      email: "ekwalormary@gmail.com",
      phone: "08055688457",
      church: "The faithfuls",
    },
  ];

  return rows;
};

export const SubscriptionsTableRow = () => {
  const rows = [
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      name: "Hillary",
      church: "The failthfuls",
      amount: "200",
      date: moment().format("DD-MM-YYYY"),
      duration: "2 Months",
      expiration: moment().format("DD-MM-YYYY"),
    },
  ];

  return rows;
};

export const verifiedChurshesTableRow = () => {
  const rows = [
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      churchName: "The Faithfuls",
      superAdmin: "Bismark Akodo",
      headClergy: "Pastor Ebuka",
      adminCount: "20",
      membersCount: "20",
    },
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      churchName: "The Faithfuls",
      superAdmin: "Bismark Akodo",
      headClergy: "Pastor Ebuka",
      adminCount: "20",
      membersCount: "20",
    },
  ];

  return rows;
};

export const unVerifiedChurshesTableRow = () => {
  const rows = [
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      churchName: "The Faithfuls",
      superAdmin: "Bismark Akodo",
      headClergy: "Pastor Ebuka",
      adminCount: "20",
      membersCount: "20",
    },
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      churchName: "The Faithfuls",
      superAdmin: "Bismark Akodo",
      headClergy: "Pastor Ebuka",
      adminCount: "20",
      membersCount: "20",
    },
  ];

  return rows;
};
export const transactionsTableRow = () => {
  const rows = [
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      ref: "1234ghg234589",
      channel: "offering",
      info: "NGN35000frombismark@gmail.com",
      date: moment().format("DD-MM-YYYY"),
    },
    {
      check: <Checkbox type="checkbox" />,
      avatar: <Avatar>HE</Avatar>,
      ref: "1234ghg234589",
      channel: "offering",
      info: "NGN35000frombismark@gmail.com",
      date: moment().format("DD-MM-YYYY"),
    },
  ];

  return rows;
};
