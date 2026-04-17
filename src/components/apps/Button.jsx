import React from "react";
import { Phone, MessageSquare, Video } from "lucide-react";

const ButtonGroup = () => {
  const handleAction = (type) => {
    console.log(type);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={() => handleAction("Call")}
        className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition"
      >
        <Phone className="w-7 h-7 text-blue-500 mb-2" />
        <span className="text-sm font-medium">Call</span>
      </button>

      <button
        onClick={() => handleAction("Text")}
        className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition"
      >
        <MessageSquare className="w-7 h-7 text-green-500 mb-2" />
        <span className="text-sm font-medium">Text</span>
      </button>

      <button
        onClick={() => handleAction("Video")}
        className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition"
      >
        <Video className="w-7 h-7 text-purple-500 mb-2" />
        <span className="text-sm font-medium">Video</span>
      </button>
    </div>
  );
};

export default ButtonGroup;