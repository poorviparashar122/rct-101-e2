import React, { useState ,useEffect} from "react";
import {Text,Image,Box, Stack,Heading,Tag, TagLabel} from "@chakra-ui/react"
import axios from "axios"

const Product = (props) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async ()=>{
      let d=await axios.get('http://localhost:8080/products');
      console.log(d)

      setData(d.data)
    }
    getData()
  },[])

  console.log(data)


  return (
    <>
    {
      data.map((elem)=>(

        <Stack data-cy="product">
      <Image data-cy="product-image" src={elem.imageSrc}/>
      <Text data-cy="product-category">
        {elem.category}
      </Text>
      <Tag>
        <TagLabel data-cy="product-gender">{elem.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{elem.title}</Heading>
      <Box data-cy="product-price">{elem.price}</Box>
    </Stack>
      ))
    }
    </>
  );
};

 

export default Product;
