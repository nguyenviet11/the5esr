'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const updateStatus = async () => {
        try {
            const response = await fetch("https://db-affiliate.onrender.com/api/update-status", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: 6, status: true }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };
  useEffect(() => {
    updateStatus()
  },[])
  return (
    <div>
    </div>
  );
}