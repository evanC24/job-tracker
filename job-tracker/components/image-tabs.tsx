"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function ImageTabs() {
      const [activeTab, setActiveTab] = useState<string>("organize");

    return ( 
        <section>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/* TABS */}
              <div className="flex gap-2 justify-center mb-8">
                <Button 
                  onClick={() => setActiveTab("organize")} 
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                    ${activeTab === "organize" 
                      ? "bg-primary text-white" 
                      : "bg-gray-100 text-grey-700 hover:bg-gray-200"} `} > 
                  Organize applications 
                </Button>
                <Button onClick={() => setActiveTab("hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                  ${activeTab === "hired" 
                    ? "bg-primary text-white" 
                    : "bg-gray-100 text-grey-700 hover:bg-gray-200"} `} > 
                  Get hired 
                </Button>
                <Button onClick={() => setActiveTab("manage")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors 
                  ${activeTab === "manage" 
                    ? "bg-primary text-white" 
                    : "bg-gray-100 text-grey-700 hover:bg-gray-200"} `} > 
                  Manage boards 
                </Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "organize" && (
                  <Image
                    src={"/demo-images/hero1.png"}
                    alt="Organize applications"
                    width={1200}
                    height={800}
                  />
                )}

                {activeTab === "hired" && (
                  <Image
                    src={"/demo-images/hero2.png"}
                    alt="Organize applications"
                    width={1200}
                    height={800}
                  />
                )}

                {activeTab === "manage" && (
                  <Image
                    src={"/demo-images/hero3.png"}
                    alt="Organize applications"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
          <div></div>
        </section>
     );
}
