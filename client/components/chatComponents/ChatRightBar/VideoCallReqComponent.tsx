import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ConnectSocketState, VideoChatState } from "../../../models/socket";
import styles from "../../../styles/chat.module.scss";
import PhoneIcon from "@mui/icons-material/Phone";
import { useActions } from "../../../hooks/useAction";
import { useRouter } from "next/router";
import { EmployeeAuthState } from "../../../models/employee";

const VideoCallReqComponent = () => {
  const router = useRouter();
  const { data, calling }: VideoChatState = useTypedSelector(
    (state) => state.videoCall
  );
  const employee: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const { socket }: ConnectSocketState = useTypedSelector(
    (state) => state.socketConnection
  );

  const [stopMusic, setStopMusic] = useState<boolean>(false);
  const [audioRef, setAudioRef] = useState<any>(null);
  const [callEndaudioRef, setCallEndAudioRef] = useState<any>(null);
  const { cancelOrJoinVideoCall } = useActions();

  const handleSounf = () => {
    audioRef.pause();
    audioRef.currentTime = 0;
    audioRef.play();
  };

  const endCallSound = () => {
    audioRef.pause();
  };

  const handleCallEnd = () => {
    callEndaudioRef.pause();
    callEndaudioRef.currentTime = 0;
    callEndaudioRef.play();
  };
  if (data?.callingUser) {
    handleSounf();
  }

  useEffect(() => {
    if (socket) {
      socket.on("video-call-canceled-server", () => {
        cancelOrJoinVideoCall();
        setStopMusic(!stopMusic);
        console.log("vide canceld ++++++++++++++++");
      });

      socket.on(
        "video-call-accepted-server",
        ({ roomId }: { roomId: string }) => {
          cancelOrJoinVideoCall();
          router.push(`/${employee?.data?.companyName}/chat/video/${roomId}`);
        }
      );
    }
  }, [socket]);

  useEffect(() => {
    console.log(stopMusic);
    if ((stopMusic || !stopMusic) && audioRef) {
      endCallSound();
    }
  }, [data]);

  const handleCancelCall = () => {
    audioRef.pause();
    cancelOrJoinVideoCall();
    handleCallEnd();
    socket.emit("video-call-rejected", { roomId: data?.roomId });
  };

  const endCall = () => {
    handleCallEnd();
    endCallSound();
    cancelOrJoinVideoCall();
    socket.emit("video-call-canceled", { roomId: data?.roomId });
  };

  const handleAcceptCall = () => {
    socket.emit("video-call-accepted", { roomId: data?.roomId });
    router.push(`/${employee?.data?.companyName}/chat/video/${data?.roomId}`);
    cancelOrJoinVideoCall();
  };
  return (
    <>
      {data?.callingUser && (
        <div className={styles.videoCallDivMain}>
          <img
            src="https://www.gravatar.com/avatar/631577fc0428c1dbc6176a3ca5935f77?d=retro"
            alt=""
          />
          <div>
            <h3>{data?.callingUser}</h3>
            <p>incoming call</p>
          </div>

          <div>
            <span onClick={handleCancelCall} className={styles.callSpan}>
              <PhoneIcon />
            </span>
            <span onClick={handleAcceptCall} className={styles.callSpan}>
              <PhoneIcon />
            </span>
          </div>
        </div>
      )}

      {calling?.callingUser && (
        <div className={styles.videoCallDivMain}>
          <img src={calling.image} alt="" />
          <div>
            <h3>{calling.callingUser}</h3>
            <p>outgoing call</p>
          </div>

          <div>
            <span
              style={{ backgroundColor: "#ff392c" }}
              onClick={endCall}
              className={styles.callSpan}
            >
              <PhoneIcon />
            </span>
          </div>
        </div>
      )}

      <audio
        ref={(ref) => {
          setAudioRef(ref);
        }}
      >
        <source
          src="http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/race2.ogg"
          type="audio/mpeg"
        />
      </audio>
      <audio
        ref={(ref) => {
          setCallEndAudioRef(ref);
        }}
      >
        <source
          src=" http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
          type="audio/mpeg"
        />
      </audio>
    </>
  );
};

export default VideoCallReqComponent;
