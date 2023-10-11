import keyConceptsImage from '../../assets/images/key-concepts.png';

function Header(props) {
  return (
    <header>
      <img src={keyConceptsImage} alt={props.imageAlt} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  )
}

export default Header