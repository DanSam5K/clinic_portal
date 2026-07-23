// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>

      <h3 className="mt-6 mb-2">Skeleton</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <h3 className="mt-6 mb-2">Avatar</h3>
      <div className="flex gap-4">
        <Avatar name="alice" />
        <Avatar name="John" />
        <Avatar name="JohnDoe" />
      </div>
    </div>
  )
}
