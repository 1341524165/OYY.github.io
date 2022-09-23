import React, { Suspense } from "react";

import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
const LazyThreeJSAnimationShader = React.lazy(() =>
  import("../three/ThreeJSAnimationShader")
);
import styles from "./index.module.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <ThreeModel />
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <a href="/docs/intro">
          <button className="button1">
            <span></span>
            <span></span>
            <span></span>
            <span></span> Move On
          </button>
        </a>
      </div>
    </header>
  );
}

function ThreeModel() {
  const fallback = (
    <canvas
      style={{
        height: "100px",
        width: "100%",
        maxHeight: "100px",
        position: "relative",
        top: 0,
        zIndex: -100,
      }}
    />
  );

  return (
    <div className={styles.Three}>
      <BrowserOnly fallback={fallback}>
        {() => (
          <Suspense fallback={fallback}>
            <LazyThreeJSAnimationShader />
          </Suspense>
        )}
      </BrowserOnly>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
