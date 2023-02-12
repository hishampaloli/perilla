import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const demo = () => {
  const [roomCode, setRoomCode] = useState<string>();
  const router = useRouter();
  return (
    <div>
      <h1>Join ROOM</h1>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          router.push(`/hp/chat/video/${roomCode}`);
        }}
      >
        <input
          onChange={(e) => setRoomCode(e.target.value)}
          type="text"
          name=""
          id=""
        />
        <button>join</button>
      </form>
    </div>
  );
};

export default demo;
