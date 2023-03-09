import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const memberSignUpInputs = [
  {
    placeholder: "First Name",
  },
  {
    placeholder: "Last Name",
  },
  {
    placeholder: "Email",
  },
  {
    placeholder: "Phone",
  },
  {
    placeholder: "Gender",
  },
  {
    placeholder: "Password",
    ActiveIcon: <AiFillEye />,
    InActiveIcon: <AiFillEyeInvisible />,
  },
];
export const adminSignUpInputs = [
  {
    placeholder: "Church Name",
  },
  {
    placeholder: "Select Church Denomination",
  },
  {
    placeholder: "Church Email",
  },
  {
    placeholder: "Church Address",
  },
  {
    placeholder: "Gender",
  },
  {
    placeholder: "Closest Landmark",
  },
  {
    placeholder: "Select City",
  },
  {
    placeholder: "Select State",
  },
  {
    placeholder: "Country",
  },
  {
    placeholder: "Church Phone Number",
  },
  {
    placeholder: "Password",
    ActiveIcon: <AiFillEye />,
    InActiveIcon: <AiFillEyeInvisible />,
  },
];

export const AboutChurchInputs = [
  {
    placeholder: "Church Motto",
  },
  {
    text: "Church Logo",
    type: "file",
  },
  {
    placeholder: "Name of Clergy/Priest",
  },
  {
    placeholder: "Role of Clergy/Priest",
  },
  {
    placeholder: "Clergy Phone Number",
  },
  {
    text: "Add Clergy/Priest",
    type: "button",
    outlined: true,
  },
];

export const loginInput = [
  {
    placeholder: "Email",
    type: "text",
  },
  {
    placeholder: "Password",
    type: "password",
  },
];

export const churchVerificationInputs = [
  {
    placeholder: "Church Name",
    type: "text",
  },
  {
    placeholder: "Select Church Denomination",
    type: "text",
  },
  {
    placeholder: "Church Email",
    type: "text",
  },
  {
    placeholder: "Church Address",
    type: "text",
  },
  {
    placeholder: "Closest Landmark",
    type: "text",
  },
  {
    placeholder: "Select City",
    type: "text",
  },
  {
    placeholder: "Select State",
    type: "text",
  },
  {
    placeholder: "Country",
    type: "text",
  },
  {
    placeholder: "Church Phone Number",
    type: "phone",
  },
];
