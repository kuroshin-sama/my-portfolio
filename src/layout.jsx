import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Mainheader from "./mainheader";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// مدل سه‌بعدی — فقط یک بار لود می‌شه و همیشه پشت همه صفحات هست
function BackgroundModel() {
  const { scene } = useGLTF("models/formalball.glb");
  return <primitive object={scene} scale={0.4} position={[0, -2, 0]} />;
}

export default function Layout() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>

      {/* بک‌گراند سه‌بعدی — کاملاً پشت همه چیز */}
      <Canvas
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
        camera={{ position: [0, 0, 8], fov: 45 }}
      >
        {/* پس‌زمینه سفید-شیری ملایم */}
        <color attach="background" args={["#faf9f7"]} />

        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={0.7} />

        <Suspense fallback={null}>
          <BackgroundModel />
        </Suspense>

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
        />
      </Canvas>

      {/* محتوای اصلی سایتت — دقیقاً همون چیزی که قبلاً داشتی، فقط روی مدل سه‌بعدی */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          pointerEvents: "none",   // اجازه می‌ده ماوس مدل رو بچرخونه
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>   {/* کلیک روی Navbar و ... کار کنه */}
          <Navbar />
          <Mainheader />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>

    </div>
  );
}