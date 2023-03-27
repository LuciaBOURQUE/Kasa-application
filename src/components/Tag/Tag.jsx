import "../../scss/index.scss"

export default function Tag(props) {
  const tagValue = props.tagValue

  return (
    <div className="tag-list">
      {tagValue.map((tag, index) => (
        <p key={`${tag}-${index}`} className="tag">
          {tag}
        </p>
      ))}
    </div>
  )
}
