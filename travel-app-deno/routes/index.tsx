import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>FWDP Travel App</title>
      </Head>
      <h1>FWDP Travel App...</h1>
     
    </>
  );
}
