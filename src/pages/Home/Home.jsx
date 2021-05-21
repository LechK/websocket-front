import React, { useEffect, useState } from "react";
import * as S from "./Home.style";
import { Button } from "../../components";

function Home() {
  const socket = React.useMemo(() => new WebSocket("ws://localhost:8080"), []);

  const [connected, setConnected] = useState("");
  //respone
  useEffect(() => {
    socket.addEventListener("open", function (event) {
      setConnected("Connected to server");
    });
  }, [socket]);

  useEffect(() => {
    socket.addEventListener("message", function (e) {
      const obj = e.data;
      console.log(obj);
    });
  }, [socket]);

  return (
    <S.Body>
      {connected && connected ? (
        <h3>Succesfully connected to server!</h3>
      ) : (
        <h5>Not connected!</h5>
      )}
      {/*POPUPS */}{" "}
      <Button
        color="secondary"
        handleClick={() => {
          socket.send("poi");
        }}
      >
        POI
      </Button>
      <Button
        color="secondary"
        handleClick={() => {
          socket.send("incomingCall");
        }}
      >
        INCOMING CALL
      </Button>
      {/* DYNAMIC GESTURES */}
      <Button
        color="primary"
        handleClick={() => {
          socket.send("swipeLeft");
        }}
      >
        Swipe Left
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("swipeRight");
        }}
      >
        Swipe Right
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("swipeUp");
        }}
      >
        Swipe Up
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("swipeDown");
        }}
      >
        Swipe Down
      </Button>
      {/* STATIC GESTURES */}
      <Button
        color="primary"
        handleClick={() => {
          socket.send("zoomIn");
        }}
      >
        Zoom In
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("zoomOut");
        }}
      >
        Zoom Out
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("pointingUp");
        }}
      >
        Pointing Up
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("pointingDown");
        }}
      >
        Pointing Down
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("fist");
        }}
      >
        Fist
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.send("victory");
        }}
      >
        Victory
      </Button>
    </S.Body>
  );
}

export default Home;
