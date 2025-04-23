import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchX } from "lucide-react";

function Notfound() {
  const navigate = useNavigate("");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-6 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="text-[20rem] font-bold text-muted-foreground">
                4
              </span>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center py-8">
              <SearchX className="h-24 w-24 text-primary animate-pulse text-purple-700" />
              <h1 className="mt-6 text-4xl font-bold">Page Not Found</h1>
            </div>
          </div>

          <p className="text-[#71717a] text-lg">
            Sorry, we couldn't find the page you're looking for. The page might
            have been removed or the link might be broken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-purple-700 text-white px-5 py-2 rounded-md hover:bg-purple-600"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto border px-5 py-2 rounded-md hover:bg-gray-200 "
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
