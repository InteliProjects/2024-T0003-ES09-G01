"use client";
import FirstCard from "../components/FirstCard";
import IntroCard from "../components/IntroCard";
import TableFeedback from "../components/TableFeedback";
import UploadCard from "../components/UploadCard";
import { Toaster } from "react-hot-toast";

import { useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { LogoutButton } from "app/components/buttons/Logout";
import Header from "app/components/Header";

export default withPageAuthRequired(function Home() {
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [data, setData] = useState<Array<any>>([]);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <FirstCard />
        <IntroCard />
        {!uploaded ? (
          <UploadCard
            uploaded={uploaded}
            setUploaded={setUploaded}
            data={data}
            setData={setData}
          />
        ) : (
          <TableFeedback
            uploaded={uploaded}
            setUploaded={setUploaded}
            data={data}
            setData={setData}
          />
        )}

        <Toaster
          containerClassName="toaster"
          position="bottom-center"
          reverseOrder={false}
        />
      </div>
    </>
  );
});
