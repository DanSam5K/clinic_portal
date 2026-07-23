import styles from "./Avatar.module.css"

function getInitials(name: string) {
  const isPascalCase = /^[A-Z][a-z0-9]*(?:[A-Z][a-z0-9]*)+$/.test(name)

  if (isPascalCase) {
    return (name.match(/[A-Z]/g) ?? []).slice(0, 2).join("")
  }

  return name.charAt(0).toUpperCase()
}

export default function Avatar({ name }: { name: string }) {
  return (
    <div className={styles.avatar} role="img" aria-label={name}>
      {getInitials(name)}
    </div>
  )
}
