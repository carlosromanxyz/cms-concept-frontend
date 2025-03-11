'use client'

import Link from "next/link";

export default function CloseDraftMode() {
  return (
    <Link
      href={'/api/exit-draft'}
      onClick={(e) => {
        e.preventDefault(); // Prevent internal navigation
        fetch("/api/exit-draft").then(() => {
          window.location.reload(); // Reload the page
        });
      }}
      className="bg-yellow-900 text-yellow-500 px-2 py-1 rounded-sm"
    >
      {'Close draft mode'}
    </Link>
  )
}
