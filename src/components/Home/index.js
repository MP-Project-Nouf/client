import React, { useState, useEffect } from "react"
import Header from "../Header";
import Image from "./bghome.webp";
import { useDispatch, useSelector } from "react-redux";
import './style.css'

import { Button, ButtonGroup,Stack } from "@chakra-ui/react";

function Home() {
    const state = useSelector((state) => {
        console.log("state", state);
        return state;
      });
    const [image] = useState(Image);
  return (
    <>
      <Header />
      <div className="home">
        <div className="home-container">
          <img className="home-image" src={image} alt="image" />
          <div className="content">
            <div className="lang">
              <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="gray" variant="ghost">
                  javascript
                </Button>
                <Button colorScheme="gray" variant="ghost">
                  java
                </Button>
                <Button colorScheme="gray" variant="ghost">
                  ++c
                </Button>
                
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
