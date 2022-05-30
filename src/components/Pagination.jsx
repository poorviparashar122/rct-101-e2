import React from "react";
import {ButtonGroup,Select,Button} from "@chakra-ui/react"

const Pagination = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const ButtonGroup = () => <div />;
  // const Select = () => <div />;

  return (
    <ButtonGroup>
      <Button data-cy="pagination-first-button">{props.button}</Button>
      <Button data-cy="pagination-previous-button">{props.button}</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">{props.Select}</option>
        <option data-cy="pagination-limit-6">{props.Select}</option>
        <option data-cy="pagination-limit-9">{props.Select}</option>
      </Select>
      <Button data-cy="pagination-next-button">{props.ButtonGroup}</Button>
      <Button data-cy="pagination-last-button">{props.ButtonGroup}</Button>
    </ButtonGroup>
  );
};

export default Pagination;
