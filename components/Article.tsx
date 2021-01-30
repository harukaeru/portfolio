const Article = ({ contentElement, title }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg w-full h-full">
      {contentElement}
      <header className="flex items-center justify-between leading-tight p-2">
        <p className="text-lg">{title}</p>
      </header>
    </article>
  )
}

export default Article
