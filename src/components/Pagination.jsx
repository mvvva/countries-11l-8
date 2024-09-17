"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

export function CustomPagination({ totalPages, currentPage, onPageChange }) {
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
