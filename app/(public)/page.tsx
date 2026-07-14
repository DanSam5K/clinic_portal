// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <div>Tiny missions. Big office mischief.</div>
        <p className="mt-4 max-w-md">
          Sneak a sticky note onto a coworker&apos;s monitor. Swap the good
          stapler for a decoy. Recruit accomplices, assign objectives, and
          pull off the perfect office heist &mdash; five minutes at a time.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/signup" className="text-primary font-bold">
            Get Started
          </Link>
          <Link href="/login" className="text-body">
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}
