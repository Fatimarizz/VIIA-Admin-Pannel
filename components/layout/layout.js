import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";
import Header from "./header";

export default function Layout ({ children, title})  {

    const router = useRouter();

    useEffect(() => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        router.push('/');
      }
    }, [router]);
  
    return (
        <Fragment>
            <Head>
                
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex min-h-screen relative">
              <Sidebar/>
             
                <div className="flex flex-1 flex-col lg:pl-64 bg-white">
                <Header title={title}/>       
                    {children}
                </div>

            </div>
        </Fragment>
    );
};
