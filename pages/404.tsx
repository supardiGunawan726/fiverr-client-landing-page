import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NotFound: NextPage = () => {
  const [timeout, setTimeout] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (timeout === 0) {
      router.replace("/");
    } else {
      window?.setTimeout(() => setTimeout(timeout - 1), 1000);
    }

    return () => {
      clearTimeout();
    };
  }, [timeout]);

  return (
    <main className="pt-[60px] md:pt-[80px] bg-dark flex items-center justify-center text-center text-white">
      <section className="py-24 border-b-2 border-white/5 w-full">
        <h1 className="font-bold text-9xl lg:text-[200px] xl:text-[250px]">
          404
        </h1>
        <p>
          You just found our 404 page, you will be redirected to homepage the
          automatically in{" "}
          <span className="text-primary underline">{timeout}</span> seconds.
        </p>
      </section>
    </main>
  );
};

export default NotFound;
