import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Hello World from Panaverse DAO!
      <br />
      <Link href="/name">Go to name page</Link>
    </div>
  );
};

export default page;
