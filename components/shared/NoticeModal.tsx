import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

function NoticeModal() {
  const [isModalOpen, setIsModalOpen] = useState(
    process.env.NODE_ENV !== "production"
  );
  const handleModalChange = () => setIsModalOpen(!isModalOpen);

  return (
    <Dialog open={isModalOpen} onOpenChange={handleModalChange}>
      <DialogContent
        className={cn(
          "dark:bg-gray-900 dark:text-white",
          "fixed top-44 lg:top-36 left-1/2 transform -translate-x-1/2 rounded-lg",
          "shadow-lg border border-gray-700",
          "w-[90%] lg:w-full"
        )}
      >
        <DialogHeader>
          <DialogTitle className="mb-4">Important Notice</DialogTitle>
          <DialogDescription className="text-md leading-5">
            This website is just{" "}
            <i className="text-blue-500">
              <b>MVP (Mini Viable Product)</b>
            </i>{" "}
            . So please if you encountred any problems, let us know.
            <pre className="my-2">Version 1.0.0</pre>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="mt-2 ml-auto"
            onClick={handleModalChange}
          >
            Understood
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default NoticeModal;
