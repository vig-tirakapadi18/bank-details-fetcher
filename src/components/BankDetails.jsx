import { Fragment } from "react";

const BankDetails = (props) => {
  console.log(props.bankDetails.BANK);
  const { BANK, BRANCH, ADDRESS, STATE, CONTACT } = props.bankDetails;
  return (
    <div
      className={props.bankDetails ? "bank-details" : ""}
      key={props.bankDetails.IFSC}>
      {props.bankDetails && (
        <Fragment>
          <h2>
            Bank Details of <span>{props.ifscCode}</span>
          </h2>
          <div>
            <p>
              BANK NAME: <span>{BANK}</span>
            </p>
            <p>
              BRANCH: <span>{BRANCH}</span>
            </p>
            <p>
              ADDRESS: <span>{ADDRESS}</span>
            </p>
            <p>
              STATE: <span>{STATE}</span>
            </p>
            <p>
              CONTACT No.: <span>{CONTACT}</span>
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default BankDetails;
