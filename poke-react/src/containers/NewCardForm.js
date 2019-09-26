import { connect } from 'react-redux'
import PokeCard from '../PokeCard/PokeCard'

const wrapperFunction = connect()
const NewPokeCard = wrapperFunction(PokeCard)

export default NewPokeCard