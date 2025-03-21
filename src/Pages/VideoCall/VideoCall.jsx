import { useParams } from "react-router-dom";

function VideoCall() {
  const { meetingCode } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Video Call</h1>
      <p className="mt-4 text-lg">Meeting Code: {meetingCode}</p>
    </div>
  );
}

export default VideoCall;
