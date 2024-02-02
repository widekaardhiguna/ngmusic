import classes from "./_SearchResult.module.css"

type SearchResultProps = {
  term: string | null
}

const SearchResult = ({ term }: SearchResultProps) => {
  return (
    <p className={classes.root}>
      Search Result for: <span className={classes.author}>{term}</span>
    </p>
  )
}

export default SearchResult
