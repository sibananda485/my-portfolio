import Reveal from "@/components/ui/reveal"

export default function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string
  label: string
  title: React.ReactNode
  description?: string
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-4">
        {index} / {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 text-balance md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-zinc-400 text-pretty">{description}</p>}
    </Reveal>
  )
}
