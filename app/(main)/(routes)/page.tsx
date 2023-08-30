import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex justify-between">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
};

export default Home;
