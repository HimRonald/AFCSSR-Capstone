"use client";

import RegisterMemberForm from "@/components/members/RegisterMemberForm";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Page() {
  const [employmentType, setEmploymentType] = useState("");
  const [addBusiness, setAddBusiness] = useState<number[]>([]);

  const handleAddBusinessButton = () => {
    setAddBusiness([...addBusiness, addBusiness.length]);
  };

  const handleRemoveBusinessButton = (index: number) => {
    setAddBusiness(addBusiness.filter((_, i) => i !== index));
  };

  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
      }
    },
  });

  return (
    <div>
      <div className="h-32 w-full bg-[#027AC6] justify-center flex flex-col items-center">
        <span className="text-[40px] text-white font-libre font-semibold">
          Membership
        </span>
      </div>

      <div className="mx-auto container">
        <div className="mx-[79px] mt-[50px]">
          <span className="font-libre font-bold text-[28px]">
            MEMBERSHIPS REGISTRATION
          </span>
        </div>

        <RegisterMemberForm />
      </div>
    </div>
  );
}
