import { useState } from "react";
import BankDetails from "./BankDetails";

const SearchInput = () => {
  const [ifscCode, setIfscCode] = useState("");
  const [bankDetails, setBankDetails] = useState("");

  const clickHandler = async (event) => {
    event.preventDefault();
    const bankNameResponse = await fetch(
      `https://ifsc.razorpay.com/${ifscCode}`
    );
    const bankNameResponseData = await bankNameResponse.json();
    setBankDetails(bankNameResponseData);
  };

  return (
    <>
      <form className="ifsc-input">
        <input
          type="text"
          placeholder="Enter IFSC Code"
          onChange={(event) => setIfscCode(event.target.value)}
          value={ifscCode}
        />
        <button onClick={clickHandler}>Get Bank Name</button>
      </form>

      <BankDetails
        bankDetails={bankDetails}
        ifscCode={ifscCode}
      />
      {ifscCode.length > 0 && ifscCode.length < 11 && (
        <p className="error-text">
          Please enter a valid IFSC Code(Must be 11 digits)!
        </p>
      )}
    </>
  );
};

export default SearchInput;
