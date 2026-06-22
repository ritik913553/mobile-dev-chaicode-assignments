import  React, { useEffect, useState } from "react";
import DynamicTabNavigator from "./src/navigator/DynamicTabNavigator";
import OnboardScreen from "./src/screens/OnboardScreen";

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOnboarding(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return showOnboarding ? <OnboardScreen /> : <DynamicTabNavigator />;
}
