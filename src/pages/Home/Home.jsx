import React, { useEffect, useState } from "react";
import * as S from "./Home.style";
import io from "socket.io-client";
import { Button } from "../../components";

const socket = io.connect("http://localhost:4000", {
  withCredentials: true,
  extraHeaders: {
    "Access-Control-Allow-Origin": "*",
  },
});

function Home() {
  const [connected, setConnected] = useState(false);
  //respone
  useEffect(() => {
    socket.on("connect", () => {
      setConnected(socket.connected);
    });
  }, []);

  useEffect(() => {
    socket.on("response", (response) => {
      console.log(response);
    });
  }, []);

  return (
    <S.Body>
      {connected === true ? (
        <h3>Succesfully connected to server!</h3>
      ) : (
        <h5>Not connected!</h5>
      )}
      {/* DYNAMIC GESTURES */}
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "swipeLeft" });
        }}
      >
        Swipe Left
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "swipeRight" });
        }}
      >
        Swipe Right
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "swipeUp" });
        }}
      >
        Swipe Up
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "swipeDown" });
        }}
      >
        Swipe Down
      </Button>
      {/* STATIC GESTURES */}
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "zoomIn" });
        }}
      >
        Zoom In
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "zoomOut" });
        }}
      >
        Zoom Out
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "pointingUp" });
        }}
      >
        Pointing Up
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "pointingDown" });
        }}
      >
        Pointing Down
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "fist" });
        }}
      >
        Fist
      </Button>
      <Button
        color="primary"
        handleClick={() => {
          socket.emit("gesture", { value: "victory" });
        }}
      >
        Victory
      </Button>
    </S.Body>
  );
}

export default Home;
