interface titleHeaderInterface {
  subtitle: string
  children?: React.ReactNode
  emoji?: string
}
export default function TitleHeader({
  subtitle,
  children,
  emoji,
}: titleHeaderInterface) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-[24px] text-slate-600">{subtitle}</p>
      <h2 className="font-nohemi items-center gap-2 text-4xl font-bold text-slate-900 xl:flex">
        {children}
        {emoji}
      </h2>
    </div>
  )
}
