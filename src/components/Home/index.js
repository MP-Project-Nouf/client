import React, { useState, useEffect } from "react"
import Header from "../Header";
import Image from "./bghome.webp";
import './style.css'

import { Button, ButtonGroup,Stack } from "@chakra-ui/react";

function Home() {
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
              <Button colorScheme="teal" variant="ghost">
                  javascript
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  java
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  C++
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
