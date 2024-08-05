'use client'
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ChevronRightCircle } from "lucide-react"
import { useState } from "react";

export default function EventsCard(){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return(
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 py-10">
            <Card className="flex flex-col font-libre rounded-xl border-4 border-white bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
                <img src="/Images/newsPic.png" alt="" width='360' height='240' className="h-full w-full object-cover rounded-t-[9px] transition-all group-hover:scale-105" style={{ aspectRatio: "360/240", objectFit: "cover" }} />
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                    <div>
                        <Badge variant='news' className="mb-3">June 24, 2024</Badge>
                        <h3 className="text-xl font-semibold mb-2">Tech Conference 2024</h3>
                        <p>Join us for a day of inspiring talks, networking, and cutting-edge technology.</p>
                    </div>
                    <Button variant="link" onClick={() => setIsDrawerOpen(true)} className="mt-4 inline-flex justify-end">
                        Learn More
                     </Button>   
                </CardContent>
            </Card>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerContent className="bg-white">
                <DrawerHeader>
                  <DrawerTitle>Tech Conference 2024</DrawerTitle>
                  <DrawerDescription>
                    Join us for a day of inspiring talks, networking, and cutting-edge technology.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6">
                  <p>
                    The Tech Conference 2024 is a must-attend event for anyone interested in the latest advancements in
                    technology. Featuring keynote speeches from industry leaders, interactive workshops, and ample networking
                    opportunities, this conference is the perfect place to connect with like-minded individuals and stay ahead
                    of the curve.
                  </p>
                  <p className="mt-4">
                    Tickets are limited, so be sure to register early to secure your spot. We look forward to seeing you
                    there!
                  </p>
                </div>
                <DrawerFooter>
                  <Button variant="btn_navbar" >
                    Register
                  </Button>
                  <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Card className="flex flex-col font-libre rounded-xl border-4 border-white bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md focus-within:scale-[1.02] focus-within:shadow-md">
                <img src="/Images/newsPic.png" alt="" width='360' height='240' className="h-full w-full object-cover rounded-t-[9px] transition-all group-hover:scale-105" style={{ aspectRatio: "360/240", objectFit: "cover" }} />
                <CardContent className="flex flex-1 flex-col justify-between p-6">
                    <div>
                        <Badge variant='news' className="mb-3">June 24, 2024</Badge>
                        <h3 className="text-xl font-semibold mb-2">Tech Conference 2024</h3>
                        <p>Join us for a day of inspiring talks, networking, and cutting-edge technology.</p>
                    </div>
                    <Button variant="link" onClick={() => setIsDrawerOpen(true)} className="mt-4 inline-flex justify-end">
                        Learn More
                     </Button>   
                </CardContent>
            </Card>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerContent className="bg-white">
                <DrawerHeader>
                  <DrawerTitle>Tech Conference 2024</DrawerTitle>
                  <DrawerDescription>
                    Join us for a day of inspiring talks, networking, and cutting-edge technology.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6">
                  <p>
                    The Tech Conference 2024 is a must-attend event for anyone interested in the latest advancements in
                    technology. Featuring keynote speeches from industry leaders, interactive workshops, and ample networking
                    opportunities, this conference is the perfect place to connect with like-minded individuals and stay ahead
                    of the curve.
                  </p>
                  <p className="mt-4">
                    Tickets are limited, so be sure to register early to secure your spot. We look forward to seeing you
                    there!
                  </p>
                </div>
                <DrawerFooter>
                  <Button variant="btn_navbar" >
                    Register
                  </Button>
                  <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
                    Close
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
        </div>
    )
}