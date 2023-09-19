import { Hash } from "lucide-react";

import { MobileToggle } from "../mobile-toggle";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversations";
  imageUrl?: string;
}

export const ChatHeader = ({ serverId, name, type }: ChatHeaderProps) => {
  return (
    <div className="text-muted font-semibold px-3 flex items-center h-1/2 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId}/>
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};
