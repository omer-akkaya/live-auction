import Navbar from "@/components/Navbar";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProductDisplayer from "@/components/ProductDisplayer";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  return (
    <>
      {user && (
        <>
          <Navbar></Navbar>
          <ProductDisplayer />
        </>
      )}
    </>
  );
}
