import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useRouter } from "next/router";
import { EmployeeAuthState } from "../../../../models/employee";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const VideoCHat = () => {
  const { data }: EmployeeAuthState = useTypedSelector(
    (state) => state.employee
  );
  const router = useRouter();
  const { videoChatId } = router.query;
  const chatId: string = videoChatId!.toString();
  const myMeeting = async (element: any) => {
    const appID: number = 1942584430;
    const serverSecret = "19f46f170c4dca5d617eaf4d6a7301e3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      chatId,
      Date.now().toString(),
      data?.name
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
};

export default VideoCHat;
