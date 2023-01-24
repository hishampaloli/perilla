import React from "react";

const ListPTagComponent = ({
  strong,
  span,
}: {
  strong: string;
  span: string;
}) => {
  return (
    <p>
      <strong>{strong} :</strong> <span>{span}</span>
    </p>
  );
};

export default ListPTagComponent;
