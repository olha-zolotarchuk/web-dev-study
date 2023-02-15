import React from "react";
import Row from "./Row";

const Table = ({ items }) => {
  return (
    <React.Fragment>
      <div className="table-container">
              <table>
                  <thead></thead>
          <tbody>
            {items.map((item) => (
              <Row key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Table;
