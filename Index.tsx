import { useState } from "react";
import GameHeader from "@/components/GameHeader";
import NavigationTabs from "@/components/NavigationTabs";
import HomePage from "@/components/HomePage";
import MyTeam from "@/components/MyTeam";
import PackOpening from "@/components/PackOpening";
import SeasonMode from "@/components/SeasonMode";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage onTabChange={setActiveTab} />;
      case "team":
        return <MyTeam onTabChange={setActiveTab} />;
      case "packs":
        return <PackOpening />;
      case "season":
        return <SeasonMode />;
      case "events":
        return (
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Events</h2>
            <p className="text-muted-foreground">Live events and tournaments coming soon!</p>
          </div>
        );
      case "settings":
        return (
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Settings</h2>
            <p className="text-muted-foreground">Game settings and more options coming soon!</p>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <GameHeader />
      <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;