import { FC } from "react";
import { PaystackCustomButton } from "./styled";

interface IPay {
  handleSucces: any;
  email: string;
  amount: number;
  metaData: any;
  text: string;
  outlined?: boolean;
  size?: string;
}
const PaystackPaymentButton: FC<IPay> = ({
  email,
  amount,
  metaData,
  text,
  outlined,
  size,
  handleSucces,
}) => {
  const publicKey: any = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email,
    amount,
    metadata: metaData,
    publicKey,
    text: text,
    onSuccess: () => handleSucces,
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <PaystackCustomButton
      className="paystack-button"
      {...componentProps}
      outlined={outlined}
      size={size}
    />
  );
};

export default PaystackPaymentButton;
