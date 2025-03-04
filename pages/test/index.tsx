import React, { useEffect, useRef, useState } from "react";
export default function Page() {
  const getText = () => {
    // ! FIXME : find mindlength & masLength of the result 
    fetch("/api/typing/300")
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };
  console.log("Page Rendered...");
  return (
    <div className="h-screen bg-AAprimary flex items-center justify-center">
      <button onClick={() => getText()} className="text-blue px-8 py-2 border-2 border-blue rounded">
        Test
      </button>
    </div>
  );
}
