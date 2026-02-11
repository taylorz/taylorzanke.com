import { useEffect } from "react";
import { useRouter } from "next/router";

const Information = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/?overlay=1");
  }, [router]);

  return null;
};

export default Information;
