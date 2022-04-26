import React from "react";
import styles from "./FaQ.module.css";

const FaQ = () => {
  return (
    <>
      <h1 style={{ marginTop: "40px" }}>FaQ</h1>
      <div className={styles.faq}>
        <div>
          <details>
            <hr />
            <summary>Is my personal information kept private?</summary>
            Please be assured that we take data protection seriously, and your
            information will only be shared with third parties where they abide
            by applicable data protection legislation. For more information,
            please read our Privacy Policy in full.
          </details>
        </div>
        <div>
          <details>
            <hr />
            <summary>
              Can I change or amend my order once it has been placed?
            </summary>
            Before your purchases have been prepared for dispatch we can cancel
            an item, change the size or edit your billing and shipping details.
            However, we are unable to combine orders or add pieces to an
            existing order once it has been placed.
          </details>
        </div>
        <div>
          <details>
            <hr />
            <summary>How do I return or exchange an item?</summary>
            You may return any product ordered on the beinmyshoes.com website
            for refund or exchange within Thirty (30) calendar days from the
            delivery date. For more details on the return policy, please click
            here To return a product, login to your account and request for
            return or contact customer service at customercare@beinmyshoes.com
            or call 91 22-4971 1497 or 91 90047 66541
          </details>
        </div>
      </div>
    </>
  );
};

export default FaQ;
