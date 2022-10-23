import { accessTokenKey } from "$utils/data";
import toast from "$utils/toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuthenticate = () => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem(accessTokenKey)) {
      router.push("/");
      toast("error", "Connect wallet");
    }
  }, [router]);
};

export default useAuthenticate;
