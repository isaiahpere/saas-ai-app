import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard page (protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

// stopped at 25:43

export default DashboardPage;
