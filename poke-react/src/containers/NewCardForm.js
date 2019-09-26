import { connect } from 'react-redux'
import PokeCardList from '../PokeCardList/PokeCardList'

const wrapperFunction = connect()
const NewPokeCardList = wrapperFunction(PokeCardList)

export default NewPokeCardList