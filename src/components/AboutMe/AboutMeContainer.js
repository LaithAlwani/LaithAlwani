import { lazy, Suspense } from "react";
const AboutMe = lazy(() => import("./AboutMeContent"));
const MyImage = lazy(() => import("./MyImage"));

export default function AboutMeContainer() {
  const renderLoader = () => {
    return <p>Loading</p>;
  };
  return (
    <div id="about-me" className="align-content content-height">
      <div className="row">
        <Suspense fallback={renderLoader()}>
          <MyImage />
          <AboutMe />
        </Suspense>
      </div>
    </div>
  );
}
