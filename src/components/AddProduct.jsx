import React from "react";
import {Button,Modal,ModalBody,Input,Select,RadioGroup,Radio} from "@chakra-ui/react"
const AddProduct = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;

  return (
    <>
      <Button my={4} data-cy="add-product-button">{props.Button}</Button>
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />{props.Input}
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt"></option>
            <option data-cy="add-product-category-pant"></option>
            <option data-cy="add-product-category-jeans"></option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">{props.Radio}</Radio>
            <Radio data-cy="add-product-gender-female">{props.Radio}</Radio>
            <Radio data-cy="add-product-gender-unisex">{props.Radio}</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">{props.Button}</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
