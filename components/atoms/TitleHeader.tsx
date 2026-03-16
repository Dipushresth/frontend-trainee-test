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
      <p className="mb-2 text-base text-slate-600 lg:text-[24px]">{subtitle}</p>
      <h2 className="font-nohemi items-center gap-2 text-2xl font-bold text-slate-900 lg:text-4xl xl:flex">
        {children}
        {emoji}
      </h2>
    </div>
  )
}
