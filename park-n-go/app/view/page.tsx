"use client";

// Flowbite components
import Image from "next/image";
import { Navbar } from "flowbite-react";

// Bootstrap components
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

// Additional pages
// import { CarparkList } from "./CarparkList";

// ReactSearchKit component
// import { ReactSearchKit, SearchBar } from 'react-searchkit';

export default function Home() {

  // todo: actually save in a local database
  const [saved, setSaved] = useState([])

  // add a carpark information into the list
  // function addSaved(id, address, xCoord, yCoord, cpType, shortTermParking, freeParking, nightParking, gantryHeight, availLots) {
  //   setSaved(currentSaved => {
  //     return [
  //       ...currentSaved,
  //       { id, address, xCoord, yCoord, cpType, shortTermParking, freeParking, nightParking, gantryHeight, availLots }
  //     ]
  //   })
  // }

  // delete carpark information from the list
  // function deleteSaved(id) {
  //   setSaved(currentSaved => {
  //     return currentSaved.filter(item => item.id !== id)
  //   })
  // }

  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            src="/ParkNGo_Icon.png"
            className="mr-3 h-6 sm:h-9"
            alt="ParkNGo Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ParkNGo
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">

        {/* <ReactSearchKit>
          <SearchBar />
        </ReactSearchKit> */}

        <h1 className="header">Saved Carpark</h1>
        {/* <CarparkList carparkList={saved} deleteList={deleteSaved}></CarparkList> */}

        <h1 className="header">Nearby Carpark</h1>

      </main>
    </div>
  );
}